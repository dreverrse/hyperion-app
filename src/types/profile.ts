export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string | null;
  avatarEmoji?: string | null;
  currency?: string;
  createdAt?: string;
  updatedAt?: string;
}