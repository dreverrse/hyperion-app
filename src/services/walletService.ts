import type { Wallet, WalletType } from '../types/wallet';
import type { Database } from '../types/supabase';
import { mockWallets } from '../data/mock/wallets';
import { getSupabaseOrThrow, isSupabaseReady } from '../lib/supabase';

const MOCK_USER_ID = 'user-001';

type WalletRow = Database['public']['Tables']['wallets']['Row'];

export interface WalletInput {
  name: string;
  balance?: number;
  accent?: string;
  type: WalletType;
  isDefault?: boolean;
}

let walletStore: Wallet[] = mockWallets.map((w) => ({ ...w }));

function toWallet(row: WalletRow): Wallet {
  return {
    id: row.id,
    name: row.name,
    balance: row.balance,
    accent: row.accent,
    type: row.type as WalletType,
    isDefault: row.is_default,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getWallets(): Promise<Wallet[]> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('wallets')
      .select('*')
      .order('is_default', { ascending: false });
    if (error) throw error;
    return data.map(toWallet);
  }
  return walletStore
    .map((w) => ({ ...w }))
    .sort((a, b) => Number(b.isDefault) - Number(a.isDefault));
}

export async function getWallet(id: string): Promise<Wallet | undefined> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('wallets')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) throw error;
    return data ? toWallet(data) : undefined;
  }
  const wallet = walletStore.find((w) => w.id === id);
  return wallet ? { ...wallet } : undefined;
}

export async function createWallet(input: WalletInput): Promise<Wallet> {
  const now = new Date().toISOString();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('wallets')
      .insert({
        user_id: MOCK_USER_ID,
        name: input.name,
        balance: input.balance ?? 0,
        accent: input.accent,
        type: input.type,
        is_default: input.isDefault ?? false,
      })
      .select()
      .single();
    if (error) throw error;
    return toWallet(data);
  }
  const wallet: Wallet = {
    id: `wallet-${Date.now()}`,
    name: input.name,
    balance: input.balance ?? 0,
    accent: input.accent,
    type: input.type,
    isDefault: input.isDefault ?? false,
    createdAt: now,
    updatedAt: now,
  };
  walletStore = [wallet, ...walletStore];
  return { ...wallet };
}

export async function updateWallet(
  id: string,
  updates: Partial<Wallet>,
): Promise<Wallet> {
  const updatedAt = new Date().toISOString();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('wallets')
      .update({
        name: updates.name,
        balance: updates.balance,
        accent: updates.accent,
        type: updates.type,
        is_default: updates.isDefault,
        updated_at: updatedAt,
      })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return toWallet(data);
  }
  const index = walletStore.findIndex((w) => w.id === id);
  if (index === -1) {
    throw new Error(`Wallet not found: ${id}`);
  }
  const updated: Wallet = {
    ...walletStore[index]!,
    ...updates,
    updatedAt,
  };
  walletStore = walletStore.map((w) => (w.id === id ? updated : w));
  return { ...updated };
}

export async function deleteWallet(id: string): Promise<void> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { error } = await sb.from('wallets').delete().eq('id', id);
    if (error) throw error;
    return;
  }
  walletStore = walletStore.filter((w) => w.id !== id);
}