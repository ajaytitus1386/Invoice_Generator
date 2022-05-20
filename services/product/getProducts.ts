import axios, { AxiosResponse } from "axios";
import { Product, convertResponseToProduct } from "../../models/product";

export default async function getProducts() {
  try {
    const response: AxiosResponse = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    const data: any[] = response.data;
    const products: Product[] = data.map((res) => {
      return convertResponseToProduct(res);
    });
    return products;
  } catch (error) {
    throw error;
  }
}
