export type GoalStatus = 'in_progress' | 'completed' | 'paused';

export interface Goal {
  id: string;
  userId: string;
  title: string;
  target: number;
  saved: number;
  deadline?: string;
  status: GoalStatus;
  emoji?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export type GoalInput = Pick<Goal, 'title' | 'target'> &
  Partial<Pick<Goal, 'userId' | 'saved' | 'deadline' | 'status' | 'emoji'>>;