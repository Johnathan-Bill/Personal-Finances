import Dexie from "dexie";
export * from "./models";

class FinancialDB extends Dexie {
  constructor() {
    super("FinancialDB");
  }
}

export const db = new FinancialDB();
