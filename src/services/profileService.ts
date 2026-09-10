import type { UserProfile } from '../types/profile';
import type { Database } from '../types/supabase';
import { mockProfile } from '../data/mock/profile';
import { getSupabaseOrThrow, isSupabaseReady } from '../lib/supabase';

const MOCK_USER_ID = 'user-001';

type ProfileRow = Database['public']['Tables']['profiles']['Row'];
type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

let profileStore: UserProfile = { ...mockProfile };

function toProfile(row: ProfileRow): UserProfile {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    avatarUrl: row.avatar_url,
    currency: row.currency ?? undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getProfile(): Promise<UserProfile> {
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const { data, error } = await sb
      .from('profiles')
      .select('*')
      .eq('id', MOCK_USER_ID)
      .maybeSingle();
    if (error) throw error;
    if (data) return toProfile(data);
  }
  return { ...profileStore };
}

export async function updateProfile(
  updates: Partial<UserProfile>,
): Promise<UserProfile> {
  const updatedAt = new Date().toISOString();
  if (isSupabaseReady()) {
    const sb = getSupabaseOrThrow();
    const payload: ProfileUpdate = {
      name: updates.name,
      email: updates.email,
      avatar_url: updates.avatarUrl,
      currency: updates.currency,
      updated_at: updatedAt,
    };
    const { data, error } = await sb
      .from('profiles')
      .update(payload)
      .eq('id', MOCK_USER_ID)
      .select()
      .single();
    if (error) throw error;
    return toProfile(data);
  }
  profileStore = {
    ...profileStore,
    ...updates,
    updatedAt,
  };
  return { ...profileStore };
}