export type BudgetCategory =
  | 'Food & Drinks'
  | 'Shopping'
  | 'Transportation'
  | 'Bills'
  | 'Entertainment';

export interface Budget {
  id: string;
  category: BudgetCategory;
  amount: number;
  spent: number;
  createdAt?: string;
  updatedAt?: string;
}