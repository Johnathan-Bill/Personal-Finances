import Dexie, { type EntityTable } from "dexie";
import type { Test } from "./models";

export type { Test } from "./models";
class FinancialDB extends Dexie {
  tests!: EntityTable<Test, "id">;
  constructor() {
    super("FinancialDB");
    this.version(1).stores({
      tests: "++id, desc",
    });
  }
}

export const db = new FinancialDB();
