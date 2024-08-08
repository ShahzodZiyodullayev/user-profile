export type TUser = {
  userId?: string | undefined | null;
  firstName: string;
  lastName: string;
  street: string;
  country: string;
  city: string;
  avatar: File | string;
  bio: string;
};
