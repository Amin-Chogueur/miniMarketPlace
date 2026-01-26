import type { CommentType } from "./commentType";
import type { UserType } from "./userType";

export type ProductType = {
  id?: string;
  userId?: string;
  title: string;
  description: string;
  imageUrl: string;
  userPhone?: string | undefined;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductWithRelationsType = ProductType & {
  user: UserType;
  comments: CommentType[];
};
