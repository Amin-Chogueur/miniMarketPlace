import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

//tables
export const users = pgTable("users", {
  id: text("id").primaryKey(), //clerkId
  email: text("email").notNull().unique(),
  name: text("name"),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(), //generated bu pg
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  userPhone: text("user_phone"),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const comments = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey(), //generated bu pg
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});

//relations
export const usersRelations = relations(users, ({ many }) => ({
  products: many(products),
  comments: many(comments),
}));

export const productsRelations = relations(products, ({ many, one }) => ({
  //each product has foeign key (products.userId) refer to primary key (users.id)
  user: one(users, { fields: [products.userId], references: [users.id] }),
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  user: one(users, { fields: [comments.userId], references: [users.id] }),
  product: one(products, {
    fields: [comments.productId],
    references: [products.id],
  }),
}));

export type UserType = typeof users.$inferSelect;
export type CommentType = typeof comments.$inferSelect;
export type ProductType = typeof products.$inferSelect;

export type NewUserType = typeof users.$inferInsert;
export type NewCommentType = typeof comments.$inferInsert;
export type NewProductType = typeof products.$inferInsert;
