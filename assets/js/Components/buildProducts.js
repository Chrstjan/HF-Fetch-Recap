const app = document.getElementById("productList");

export const buildProductCards = async (products) => {
    clearApp();

    products.map((product) => {
        let productCard = `
            <figure class="product-card">
                <header>
                    <h2>${product.title}</h2>
                    <h4>${product.id}</h4>
                </header>
                <img src="${product.image}" alt="Product picture" />
                <figcaption>
                    <h4>${product.category}</h4>
                    <p>${product.description}</p>
                    <span class="rating-container">
                        <p>${product.rating.rate}</p>
                        <p>${product.rating.count}</p>
                    </span>
                </figcaption>
            </figure>`;
        app.innerHTML += productCard;
    });
}

const clearApp = () => {
    app.innerHTML = "";
}