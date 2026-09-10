export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          email: string;
          avatar_url: string | null;
          currency: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          email?: string | null;
          avatar_url?: string | null;
          currency?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string | null;
          avatar_url?: string | null;
          currency?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      wallets: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          balance: number;
          accent: string;
          type: string;
          is_default: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          balance?: number;
          accent?: string;
          type?: string;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          balance?: number;
          accent?: string;
          type?: string;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'wallets_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      transactions: {
        Row: {
          id: string;
          wallet_id: string;
          category_id: string | null;
          title: string;
          merchant: string | null;
          amount: number;
          type: string;
          status: string;
          date: string;
          note: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          wallet_id: string;
          category_id?: string | null;
          title: string;
          merchant?: string | null;
          amount: number;
          type?: string;
          status?: string;
          date?: string;
          note?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          wallet_id?: string;
          category_id?: string | null;
          title?: string;
          merchant?: string | null;
          amount?: number;
          type?: string;
          status?: string;
          date?: string;
          note?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'transactions_wallet_id_fkey';
            columns: ['wallet_id'];
            isOneToOne: false;
            referencedRelation: 'wallets';
            referencedColumns: ['id'];
          },
        ];
      };
      budgets: {
        Row: {
          id: string;
          user_id: string;
          category: string;
          amount: number;
          spent: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          category: string;
          amount: number;
          spent?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          category?: string;
          amount?: number;
          spent?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'budgets_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      goals: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          target: number;
          saved: number;
          deadline: string | null;
          status: string;
          emoji: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          target: number;
          saved?: number;
          deadline?: string | null;
          status?: string;
          emoji?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          target?: number;
          saved?: number;
          deadline?: string | null;
          status?: string;
          emoji?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'goals_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      transaction_type: 'income' | 'expense';
      transaction_status: 'success' | 'pending' | 'failed';
      goal_status: 'in_progress' | 'completed' | 'paused';
    };
    CompositeTypes: Record<string, never>;
  };
}