import { getCategories } from "./Components/getCategories.js";
import { getProducts, getProductsInCategory } from "./Components/getProducts.js"

// write cool JS hwere!!
export const initPage = () => {
    getProducts();
    getCategories();
    // getProductsInCategory("electronics", 3);
}

initPage();