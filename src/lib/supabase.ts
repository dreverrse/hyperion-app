import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
}

export const supabase = createSupabaseClient();

export function getSupabaseOrThrow() {
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env',
    );
  }
  return supabase;
}

export function isSupabaseReady(): boolean {
  return isSupabaseConfigured && supabase !== null;
}