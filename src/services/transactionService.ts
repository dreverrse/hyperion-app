import type {
  Transaction,
  TransactionStatus,
  TransactionType,
} from '../types/transaction';
import type { Database } from '../types/supabase';
import { mockTransactions } from '../data/mock/transactions';
import { getSupabaseOrThrow, isSupabaseReady } from '../lib/supabase';

type TransactionRow = Database['public']['Tables']['transactions']['Row'];

export interface TransactionInput {
  walletId: string;
  categoryId?: string;
  title: string;
  merchant?: string | null;
  amount: number;
  type: TransactionType;
  status?: TransactionStatus;
  date?: string;
  note?: string | null;
}

let transactionStore: Transaction[] = mockTransactions.map((t) => ({ ...t }));

function toTransaction(row: TransactionRow): Transaction {
  return {
    id: row.id,
    walletId: row.wallet_id,
    categoryId: row.category_id ?? undefined,
    title: row.title,
    merchant: row.merchant,
    amount: row.amount,
    type: row.type as TransactionType,
    status: row.status as TransactionStatus,
    date: row.date,
    note: row.note,
    createdAt: row.created_at,
  };
}

function matchesQuery(transaction: Transaction, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    transaction.title.toLowerCase().includes(q) ||
    (transaction.merchant ?? '').toLowerCase().includes(q)
  );
}

export async function getTransactions(): Promise<Transaction[]> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('transactions')
      .select('*')
      .order('date', { ascending: false });
    if (error) throw error;
    return data.map(toTransaction);
  }
  return transactionStore
    .map((t) => ({ ...t }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function searchTransactions(
  query: string,
): Promise<Transaction[]> {
  const q = query.trim();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    if (!q) return getTransactions();
    const { data, error } = await sb
      .from('transactions')
      .select('*')
      .or(`title.ilike.%${q}%,merchant.ilike.%${q}%`)
      .order('date', { ascending: false });
    if (error) throw error;
    return data.map(toTransaction);
  }
  return transactionStore
    .map((t) => ({ ...t }))
    .filter((t) => matchesQuery(t, q))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getTransactionsByWallet(
  walletId: string,
): Promise<Transaction[]> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('transactions')
      .select('*')
      .eq('wallet_id', walletId)
      .order('date', { ascending: false });
    if (error) throw error;
    return data.map(toTransaction);
  }
  return transactionStore
    .filter((t) => t.walletId === walletId)
    .map((t) => ({ ...t }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function createTransaction(
  input: TransactionInput,
): Promise<Transaction> {
  const now = new Date().toISOString();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('transactions')
      .insert({
        wallet_id: input.walletId,
        category_id: input.categoryId ?? null,
        title: input.title,
        merchant: input.merchant ?? null,
        amount: input.amount,
        type: input.type,
        status: input.status ?? 'success',
        date: input.date ?? now,
        note: input.note ?? null,
      })
      .select()
      .single();
    if (error) throw error;
    return toTransaction(data);
  }
  const transaction: Transaction = {
    id: `tx-${Date.now()}`,
    walletId: input.walletId,
    categoryId: input.categoryId,
    title: input.title,
    merchant: input.merchant,
    amount: input.amount,
    type: input.type,
    status: input.status ?? 'success',
    date: input.date ?? now,
    note: input.note,
    createdAt: now,
  };
  transactionStore = [transaction, ...transactionStore];
  return { ...transaction };
}