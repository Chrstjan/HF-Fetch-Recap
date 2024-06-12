import { getProductsInCategory } from "./getProducts.js";

const navigation = document.getElementById("navigation");

export const buildCategoryNavigation = async (category) => {
    clearNavigation();

    category.map((navCategory) => {
        const navigationElement = `
            <ul class="category-navigation">
                <li class="category" data-category="${navCategory}">${navCategory}</li>
            </ul>`;

            navigation.innerHTML += navigationElement;
    });

    const categoryBtns = document.querySelectorAll(".category");
    categoryBtns.forEach((category) => {
        category.addEventListener("click", async (e) => {
            const clickedCategory = e.currentTarget.getAttribute("data-category");
            const stringCategory = JSON.stringify(clickedCategory);
            console.log(stringCategory);
            getProductsInCategory(`${clickedCategory}`, 2);
        })
    })
}

const clearNavigation = () => {
    navigation.innerHTML = "";
}