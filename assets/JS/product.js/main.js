// assets/JS/product.js/main.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/JS/product.js/categories.json")
    .then(response => response.json())
    .then(categories => {
      var container = $("#main_container");
      var categoryData = "";

      categories.forEach(function (cat) {
        categoryData += `
          <div class="blog-post row align-items-center mb-4">
            <div class="col-md-6">
              <a href="card.html?category=${encodeURIComponent(cat.id)}">
                <img src="${cat.image}" alt="${cat.name}" class="img-fluid blog-img" />
              </a>
            </div>
            <div class="col-md-6">
              <h3>${cat.name}</h3>
              <p>Explore our premium ${cat.name.toLowerCase()} collection with modern designs.</p>
              <a href="card.html?category=${encodeURIComponent(cat.id)}" class="btn btn-theme">Explore More</a>
            </div>
          </div>
        `;
      });

      container.append(categoryData);
    })
    .catch(error => console.error("Error loading categories:", error));
});
