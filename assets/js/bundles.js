import { getProducts, getProductsInCategory } from "./Components/getProducts.js"

// write cool JS hwere!!
export const initPage = () => {
    getProducts();
    getProductsInCategory("electronics", 3);
}

initPage();