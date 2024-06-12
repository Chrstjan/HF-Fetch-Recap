import { myFetchData } from "../Utils/apiUtil.js";
import { buildProductCards } from "./buildProducts.js";

export const getProducts = async () => {
    const productEndpoint = "https://fakestoreapi.com/products?limit=0";
    const data = await myFetchData(productEndpoint);
    buildProductCards(data);
}

export const getSelectedProductAmount = async (start, end) => {
    const productEndpoint = "https://fakestoreapi.com/products?limit=0";
    const data = await myFetchData(productEndpoint);

    const selectedProducts = data.slice(start, end);
    console.log(selectedProducts);
}

export const getProductsInCategory = async (products, limit) => {
    console.log(products);
    const productCategoryEndpoint = `https://fakestoreapi.com/products/category/${products}?limit=${limit}`;
    const data = await myFetchData(productCategoryEndpoint);
    console.log(data);
    buildProductCards(data);
}