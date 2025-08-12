document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/JS/product.js/categories.json")
    .then(response => response.json())
    .then(categories => {
      var container = $("#main_container");
      var articleData = "";

      categories.forEach(function(category, index) {
        if(index % 2 === 0) {
          // Even index: image left, text right
          articleData += `
            <div class="blog-post row align-items-center mb-5" data-aos-delay="100">
              <div class="col-md-6">
                <img src="${category.image}" alt="${category.name}" class="img-fluid blog-img mb-3 mb-md-0" />
              </div>
              <div class="col-md-6 ps-md-5">
                <h3 class="theme-color">${category.name}</h3>
                <p>Explore our wide range of ${category.name.toLowerCase()} products including ${category.subcategories.join(", ")}.</p>
                <a href="category.html?category=${encodeURIComponent(category.name)}" class="btn btn-theme btn-sm">Explore More</a>
              </div>
            </div>
          `;
        } else {
          // Odd index: image right, text left
          articleData += `
            <div class="blog-post row align-items-center mb-5" data-aos-delay="100">
              <div class="col-md-6 order-md-2">
                <img src="${category.image}" alt="${category.name}" class="img-fluid blog-img mb-3 mb-md-0" />
              </div>
              <div class="col-md-6 ps-md-5 order-md-1">
                <h3 class="theme-color">${category.name}</h3>
                <p>Explore our wide range of ${category.name.toLowerCase()} products including ${category.subcategories.join(", ")}.</p>
                <a href="category.html?category=${encodeURIComponent(category.name)}" class="btn btn-theme btn-sm">Explore More</a>
              </div>
            </div>
          `;
        }
      });

      container.append(articleData);
    })
    .catch(error => console.error("Error loading categories:", error));
});
