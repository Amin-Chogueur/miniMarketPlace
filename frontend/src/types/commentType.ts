import type { UserType } from "./userType";

export type CommentType = {
  id: string;
  userId: string;
  productId: string;
  content: string;
  createdAt: Date;
};

export type CommentWithRelationsType = CommentType & {
  user: UserType;
};
