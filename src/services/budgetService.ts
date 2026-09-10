import type { Budget, BudgetCategory } from '../types/budget';
import type { Database } from '../types/supabase';
import { mockBudgets } from '../data/mock/budgets';
import { getSupabaseOrThrow, isSupabaseReady } from '../lib/supabase';

const MOCK_USER_ID = 'user-001';

type BudgetRow = Database['public']['Tables']['budgets']['Row'];

export interface BudgetInput {
  category: BudgetCategory;
  amount: number;
  spent?: number;
}

let budgetStore: Budget[] = mockBudgets.map((b) => ({ ...b }));

function toBudget(row: BudgetRow): Budget {
  return {
    id: row.id,
    category: row.category as BudgetCategory,
    amount: row.amount,
    spent: row.spent,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getBudgets(): Promise<Budget[]> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('budgets')
      .select('*')
      .order('category', { ascending: true });
    if (error) throw error;
    return data.map(toBudget);
  }
  return budgetStore.map((b) => ({ ...b }));
}

export async function createBudget(input: BudgetInput): Promise<Budget> {
  const now = new Date().toISOString();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('budgets')
      .insert({
        user_id: MOCK_USER_ID,
        category: input.category,
        amount: input.amount,
        spent: input.spent ?? 0,
      })
      .select()
      .single();
    if (error) throw error;
    return toBudget(data);
  }
  const budget: Budget = {
    id: `budget-${Date.now()}`,
    category: input.category,
    amount: input.amount,
    spent: input.spent ?? 0,
    createdAt: now,
    updatedAt: now,
  };
  budgetStore = [budget, ...budgetStore];
  return { ...budget };
}

export async function updateBudget(
  id: string,
  updates: Partial<Budget>,
): Promise<Budget> {
  const updatedAt = new Date().toISOString();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('budgets')
      .update({
        category: updates.category,
        amount: updates.amount,
        spent: updates.spent,
        updated_at: updatedAt,
      })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return toBudget(data);
  }
  const index = budgetStore.findIndex((b) => b.id === id);
  if (index === -1) {
    throw new Error(`Budget not found: ${id}`);
  }
  const updated: Budget = {
    ...budgetStore[index]!,
    ...updates,
    updatedAt,
  };
  budgetStore = budgetStore.map((b) => (b.id === id ? updated : b));
  return { ...updated };
}

export async function deleteBudget(id: string): Promise<void> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { error } = await sb.from('budgets').delete().eq('id', id);
    if (error) throw error;
    return;
  }
  budgetStore = budgetStore.filter((b) => b.id !== id);
}