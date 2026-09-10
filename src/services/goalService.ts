import type { Goal, GoalInput } from '../types/goal';
import type { Database } from '../types/supabase';
import { mockGoals } from '../data/mock/goals';
import { getSupabaseOrThrow, isSupabaseReady } from '../lib/supabase';

const MOCK_USER_ID = 'user-001';

type GoalRow = Database['public']['Tables']['goals']['Row'];

let goalStore: Goal[] = mockGoals.map((g) => ({ ...g }));

function toGoal(row: GoalRow): Goal {
  return {
    id: row.id,
    userId: row.user_id,
    title: row.title,
    target: row.target,
    saved: row.saved,
    deadline: row.deadline ?? undefined,
    status: row.status as Goal['status'],
    emoji: row.emoji,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getGoals(): Promise<Goal[]> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('goals')
      .select('*')
      .eq('user_id', MOCK_USER_ID)
      .order('created_at', { ascending: true });
    if (error) throw error;
    return data.map(toGoal);
  }
  return goalStore.map((g) => ({ ...g }));
}

export async function createGoal(input: GoalInput): Promise<Goal> {
  const now = new Date().toISOString();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('goals')
      .insert({
        user_id: input.userId ?? MOCK_USER_ID,
        title: input.title,
        target: input.target,
        saved: input.saved ?? 0,
        deadline: input.deadline,
        status: input.status ?? 'in_progress',
        emoji: input.emoji,
      })
      .select()
      .single();
    if (error) throw error;
    return toGoal(data);
  }
  const goal: Goal = {
    id: `goal-${Date.now()}`,
    userId: input.userId ?? MOCK_USER_ID,
    title: input.title,
    target: input.target,
    saved: input.saved ?? 0,
    deadline: input.deadline,
    status: input.status ?? 'in_progress',
    emoji: input.emoji,
    createdAt: now,
    updatedAt: now,
  };
  goalStore = [goal, ...goalStore];
  return { ...goal };
}

export async function updateGoal(
  id: string,
  updates: Partial<Goal>,
): Promise<Goal> {
  const updatedAt = new Date().toISOString();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('goals')
      .update({
        title: updates.title,
        target: updates.target,
        saved: updates.saved,
        deadline: updates.deadline,
        status: updates.status,
        emoji: updates.emoji,
        updated_at: updatedAt,
      })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return toGoal(data);
  }
  const index = goalStore.findIndex((g) => g.id === id);
  if (index === -1) {
    throw new Error(`Goal not found: ${id}`);
  }
  const updated: Goal = {
    ...goalStore[index]!,
    ...updates,
    updatedAt,
  };
  goalStore = goalStore.map((g) => (g.id === id ? updated : g));
  return { ...updated };
}

export async function deleteGoal(id: string): Promise<void> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { error } = await sb.from('goals').delete().eq('id', id);
    if (error) throw error;
    return;
  }
  goalStore = goalStore.filter((g) => g.id !== id);
}