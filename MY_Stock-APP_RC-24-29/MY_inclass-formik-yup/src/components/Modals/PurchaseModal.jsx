import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";
import { modalStyle, flexColumn } from "../../styles/globalStyle";

export default function PurchaseModal({ open, handleClose, initialState }) {
  const [info, setInfo] = useState(initialState);

  const { postStockData, putStockData } = useStockCall();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info); //! setter asenkron çalışır, o nedenle
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", info);
    postStockData("purchases", info);
    if (info._id) {
      putStockData("purchases", info);
    } else {
      postStockData("purchases", info);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} // onClose mui modal'a ait bir fonksiyon
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-category-label">Firm</InputLabel>
              <Select
                labelId="demo-simple-category-label"
                id="categoryId"
                label="Category"
                name="categoryId"
                value={info.categoryId}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-brand-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                id="brandId"
                label="Brand"
                name="brandId"
                value={info.brandId}
                onChange={handleChange}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-product-label">Product</InputLabel>
              <Select
                labelId="demo-simple-product-label"
                id="productId"
                label="Product"
                name="productId"
                value={info.productId}
                onChange={handleChange}
              >
                {categories.map((product) => (
                  <MenuItem key={product._id} value={product._id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
            fullWidth
              label="Quantity"
              name="quantity"
              id="quantity"
              type="text"
              variant="outlined"
              value={info.quantity}
              onChange={handleChange}
            />

             <TextField
             fullWidth
              label="Price"
              name="price"
              id="price"
              type="text"
              variant="outlined"
              value={info.price}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              Submit Purchase
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
