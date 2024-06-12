import { getCategories } from "./Components/getCategories.js";
import { getProducts, getProductsInCategory, getSelectedProductAmount } from "./Components/getProducts.js"

// write cool JS hwere!!
export const initPage = () => {
    getProducts();
    getCategories();
    getSelectedProductAmount(10, 20);
}

initPage();