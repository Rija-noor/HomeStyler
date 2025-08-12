document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");

    if (!categoryId) {
        document.getElementById("subcategoryContainer").innerHTML = "<p>No category selected.</p>";
        return;
    }

    // Page title
    document.getElementById("categoryTitle").textContent =
        categoryId.charAt(0).toUpperCase() + categoryId.slice(1);

    // Load JSON for the category
    fetch(`assets/js/product.js/${categoryId}.json`)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
        })
        .then(products => {
            let output = "";
            products.forEach(product => {
                output += `
                    <div class="col-md-6 col-lg-4">
                        <div class="card shadow-sm h-100 border-0">
                            <img src="${product.image}" class="card-img-top" alt="${product.title}">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="price">$${product.price}</p>
                                <p>⭐ ${product.rating} (${product.reviews} reviews)</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            document.getElementById("subcategoryContainer").innerHTML = output;
        })
        .catch(err => console.error("Error loading products:", err));
});
