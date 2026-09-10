export interface ActivityBar {
  month: string;
  heightClass: string;
  value: number;
  active?: boolean;
}

export const mockActivityBars: ActivityBar[] = [
  { month: 'Jan', heightClass: 'h-16', value: 16000 },
  { month: 'Feb', heightClass: 'h-14', value: 14000 },
  { month: 'Mar', heightClass: 'h-24', value: 24000 },
  { month: 'Apr', heightClass: 'h-[142px]', value: 29500, active: true },
  { month: 'Mei', heightClass: 'h-28', value: 28000 },
  { month: 'Jun', heightClass: 'h-20', value: 20000 },
];

export const mockMonthlyStats = {
  income: 20005,
  expense: 12040,
  deltaIncome: -2.35,
  deltaExpense: 4.5,
  balance: 100320,
  balanceDelta: 12.05,
  activitySpent: 81200,
  activityIncome: 81200,
};