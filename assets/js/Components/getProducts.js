import { myFetchData } from "../Utils/apiUtil.js";

export const getProducts = async () => {
    const productEndpoint = "https://fakestoreapi.com/products?limit=0";
    const data = await myFetchData(productEndpoint);
    console.log(data);
}

export const getProductsInCategory = async (products, limit) => {
    const productCategoryEndpoint = `https://fakestoreapi.com/products/category/${products}?limit=${limit}`;
    const data = await myFetchData(productCategoryEndpoint);
    console.log(data);
}