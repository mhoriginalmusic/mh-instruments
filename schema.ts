import { decimal, int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, longtext } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  subscriptionPlan: mysqlEnum("subscriptionPlan", ["free", "pro"]).default("free").notNull(),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Music releases table
export const musicReleases = mysqlTable("musicReleases", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  artist: varchar("artist", { length: 255 }).notNull(),
  composer: varchar("composer", { length: 255 }),
  lyricist: varchar("lyricist", { length: 255 }),
  genre: varchar("genre", { length: 100 }).notNull(),
  language: varchar("language", { length: 50 }).notNull(),
  label: varchar("label", { length: 255 }).default("MH Original Music").notNull(),
  coverArtUrl: text("coverArtUrl"),
  coverArtKey: varchar("coverArtKey", { length: 500 }),
  status: mysqlEnum("status", ["draft", "in_moderation", "released", "rejected", "deleted"]).default("draft").notNull(),
  releaseDate: timestamp("releaseDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type MusicRelease = typeof musicReleases.$inferSelect;
export type InsertMusicRelease = typeof musicReleases.$inferInsert;

// Music tracks table
export const musicTracks = mysqlTable("musicTracks", {
  id: int("id").autoincrement().primaryKey(),
  releaseId: int("releaseId").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  duration: int("duration"), // in seconds
  audioUrl: text("audioUrl"),
  audioKey: varchar("audioKey", { length: 500 }),
  format: varchar("format", { length: 10 }), // wav, flac, mp3
  fileSize: int("fileSize"), // in bytes
  trackNumber: int("trackNumber"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type MusicTrack = typeof musicTracks.$inferSelect;
export type InsertMusicTrack = typeof musicTracks.$inferInsert;

// Beats table
export const beats = mysqlTable("beats", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  genre: varchar("genre", { length: 100 }).notNull(),
  bpm: int("bpm"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  audioUrl: text("audioUrl"),
  audioKey: varchar("audioKey", { length: 500 }),
  previewUrl: text("previewUrl"),
  previewKey: varchar("previewKey", { length: 500 }),
  coverArtUrl: text("coverArtUrl"),
  coverArtKey: varchar("coverArtKey", { length: 500 }),
  description: text("description"),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Beat = typeof beats.$inferSelect;
export type InsertBeat = typeof beats.$inferInsert;

// Beat purchases table
export const beatPurchases = mysqlTable("beatPurchases", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  beatId: int("beatId").notNull(),
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  status: mysqlEnum("status", ["pending", "completed", "failed", "refunded"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BeatPurchase = typeof beatPurchases.$inferSelect;
export type InsertBeatPurchase = typeof beatPurchases.$inferInsert;

// Custom music orders table
export const customMusicOrders = mysqlTable("customMusicOrders", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  genre: varchar("genre", { length: 100 }).notNull(),
  specifications: longtext("specifications"),
  rawMelodyUrl: text("rawMelodyUrl"),
  rawMelodyKey: varchar("rawMelodyKey", { length: 500 }),
  finalTrackUrl: text("finalTrackUrl"),
  finalTrackKey: varchar("finalTrackKey", { length: 500 }),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }),
  status: mysqlEnum("status", ["pending_payment", "payment_confirmed", "in_progress", "completed", "cancelled"]).default("pending_payment").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CustomMusicOrder = typeof customMusicOrders.$inferSelect;
export type InsertCustomMusicOrder = typeof customMusicOrders.$inferInsert;

// Earnings table
export const earnings = mysqlTable("earnings", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  releaseId: int("releaseId"),
  beatPurchaseId: int("beatPurchaseId"),
  customOrderId: int("customOrderId"),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  type: mysqlEnum("type", ["music_release", "beat_sale", "custom_order"]).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Earning = typeof earnings.$inferSelect;
export type InsertEarning = typeof earnings.$inferInsert;

// Withdrawals table
export const withdrawals = mysqlTable("withdrawals", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  method: mysqlEnum("method", ["binance", "payoneer"]).notNull(),
  walletAddress: varchar("walletAddress", { length: 500 }),
  payoneerEmail: varchar("payoneerEmail", { length: 320 }),
  status: mysqlEnum("status", ["pending", "approved", "rejected", "completed"]).default("pending").notNull(),
  transactionId: varchar("transactionId", { length: 255 }),
  rejectionReason: text("rejectionReason"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Withdrawal = typeof withdrawals.$inferSelect;
export type InsertWithdrawal = typeof withdrawals.$inferInsert;

// Admin content settings table
export const contentSettings = mysqlTable("contentSettings", {
  id: int("id").autoincrement().primaryKey(),
  key: varchar("key", { length: 255 }).notNull().unique(),
  value: longtext("value"),
  type: mysqlEnum("type", ["text", "number", "json"]).default("text").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContentSetting = typeof contentSettings.$inferSelect;
export type InsertContentSetting = typeof contentSettings.$inferInsert;