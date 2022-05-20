import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Invoice } from "../../../models/invoice";
import { Product } from "../../../models/product";
import getProducts from "../../../services/product/getProducts";

interface ProductTableRowProps {
  index: number;
  productsMenuItems: Product[];
  setProductsMenuItems: React.Dispatch<React.SetStateAction<Product[]>>;
  //TODO: product required?
  product: Product;
  invoice: Invoice;
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>;
}

function ProductTableRow({
  index,
  productsMenuItems,
  setProductsMenuItems,
  invoice,
  setInvoice,
}: ProductTableRowProps) {
  const [isLatestProduct, setIsLatestProduct] = useState(true);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(0);
  const [lineTotal, setLineTotal] = useState(0);

  const product: Product = {
    id: index,
    description: productName,
    quantity: quantity,
    rate: rate,
  };

  useEffect(() => {
    setLineTotal(rate * quantity);
  }, [rate, quantity]);

  useEffect(() => {
    // If product is changed and is not already in products list
    if (productName != "" && isLatestProduct) {
      setIsLatestProduct(false);
      setInvoice({ ...invoice, products: [...invoice.products, product] });
    }
  }, [productName]);

  function updateQuantity() {
    const splicedProducts = invoice.products.filter(
      (element) => element.description != product.description
    );

    setInvoice({
      ...invoice,
      products: [...splicedProducts, product],
    });
  }

  useEffect(() => {
    if (quantity >= 0 && !isLatestProduct) updateQuantity();
  }, [quantity]);

  return (
    <tr className="">
      <td>
        <FormControl variant="standard" className="border-class" fullWidth>
          <Select
            labelId="product-select-label"
            id="product-select"
            label="Add Product"
            value={productName}
            onChange={(event) => {
              const selectedValue = event.target.value;
              setProductName(selectedValue);
              const index = productsMenuItems
                .map((product) => product.description.toString())
                .indexOf(selectedValue);

              const productRate = productsMenuItems.at(index)?.rate ?? 0;
              setRate(productRate);
            }}
            disableUnderline
            displayEmpty
            renderValue={
              productName !== ""
                ? undefined
                : () => <label className="pr-4">Add Product</label>
            }
          >
            {productsMenuItems &&
              productsMenuItems.map((product, index) => {
                return (
                  <MenuItem key={index} value={product.description.toString()}>
                    {product.description.toString()}
                  </MenuItem>
                );
              })}
            {productsMenuItems.length == 0 && (
              <MenuItem disabled>Loading Products</MenuItem>
            )}
          </Select>
        </FormControl>
      </td>
      <td className="text-center">{productName && "$" + rate.toFixed(2)}</td>
      <td className="w-24">
        <div className="border-class">
          <TextField
            type={"number"}
            variant={"standard"}
            value={quantity}
            onChange={(event) => {
              if (Number(event.target.value) >= 0) {
                setQuantity(Number(event.target.value));
              }
            }}
            InputProps={{ disableUnderline: true }}
          />
        </div>
      </td>
      <td className="text-center">
        {productName && "$" + lineTotal.toFixed(2)}
      </td>
    </tr>
  );
}

export default ProductTableRow;
