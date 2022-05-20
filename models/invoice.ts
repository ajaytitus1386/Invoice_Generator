import { Product } from "./product";

export interface Invoice {
  id: String;
  transaction_name: String;
  date: number;
  products: Product[];
}
