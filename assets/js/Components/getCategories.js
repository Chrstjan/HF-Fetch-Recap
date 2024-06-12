import { myFetchData } from "../Utils/apiUtil.js";
import { buildCategoryNavigation } from "./buildCategoryNavigation.js";

export const getCategories =  async () => {
    const categoryEndpoint = "https://fakestoreapi.com/products/categories";
    const data = await myFetchData(categoryEndpoint);
    buildCategoryNavigation(data);
}