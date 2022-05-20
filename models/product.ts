export interface Product {
  id: number;
  description: String;
  rate: number;
  quantity: number;
}

export function convertResponseToProduct(response: any): Product {
  return {
    id: response.id,
    description: response.title,
    quantity: 0,
    rate: response.price,
  };
}
