import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Invoice } from "../../../models/invoice";
import { Product } from "../../../models/product";

interface ProductTableRowProps {
  index: number;
  productsMenuItems: Product[];
  setProductsMenuItems: React.Dispatch<React.SetStateAction<Product[]>>;
  initialProduct: Product;
  invoice: Invoice;
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>;
}

function ProductTableRow({
  index,
  productsMenuItems,
  setProductsMenuItems,
  initialProduct,
  invoice,
  setInvoice,
}: ProductTableRowProps) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(0);
  const [lineTotal, setLineTotal] = useState(0);

  useEffect(() => {
    setProductName(initialProduct.description.toString());
    setQuantity(initialProduct.quantity);
    setRate(initialProduct.rate);
  }, [
    initialProduct.description,
    initialProduct.quantity,
    initialProduct.rate,
  ]);

  const productNames = useMemo(
    () => productsMenuItems.map((product) => product.description.toString()),
    [productsMenuItems]
  );

  function updateInvoiceProducts(newProduct: Product) {
    // Very shorthand way of:
    // Create a new invoice copy using all the old values
    // except products field is made from an array of products
    //  where the element with same index as current one uses the new product info OR stays the same
    setInvoice((prevInv) => ({
      ...prevInv,
      products: prevInv.products.map((prod, idx) =>
        idx === index ? newProduct : prod
      ),
    }));
  }

  const updateProductName = (
    newProductName: string,
    newProductRate: number
  ) => {
    const newProduct: Product = {
      id: index,
      description: newProductName,
      quantity: 0,
      rate: newProductRate,
    };

    updateInvoiceProducts(newProduct);
  };

  const updateQuantity = (newQuantity: number) => {
    const newProduct: Product = {
      id: index,
      description: productName,
      quantity: newQuantity,
      rate: rate,
    };

    updateInvoiceProducts(newProduct);
  };

  const removeProduct = () => {
    setInvoice((prevInv) => ({
      ...prevInv,
      products: prevInv.products.filter((_prod, idx) => idx != index),
    }));
  };

  useEffect(() => {
    setLineTotal(rate * quantity);
  }, [quantity, rate]);

  return (
    <tr>
      <td className="text-center">
        <button name="removeProduct" onClick={() => removeProduct()}>
          <i className="material-icons-outlined text-red-400">
            {"remove_circle"}
          </i>
        </button>
      </td>
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
              const index = productNames.indexOf(selectedValue.toString());

              const productRate = productsMenuItems.at(index)?.rate ?? 0;
              setRate(productRate);

              updateProductName(selectedValue, productRate);
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
            disabled={productName == ""}
            onChange={(event) => {
              const newQuantity = Number(event.target.value);
              if (newQuantity >= 0) {
                setQuantity(newQuantity);
                updateQuantity(newQuantity);
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
