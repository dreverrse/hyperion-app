export type TransactionType = 'income' | 'expense';
export type TransactionStatus = 'success' | 'pending' | 'failed';

export interface Transaction {
  id: string;
  walletId?: string;
  categoryId?: string;
  title: string;
  icon?: string;
  merchant?: string | null;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  date: string;
  displayDate?: string | null;
  note?: string | null;
  createdAt?: string;
}