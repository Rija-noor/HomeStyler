document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/js/product.js/categories.json")
    .then(response => response.json())
    .then(categories => {
      var container = $("#main_container");
      var categoryData = "";

      categories.forEach(function (cat, index) {
        if (index % 2 === 0) {
          // Even index: image left, text right
          categoryData += `
            <div class="blog-post row align-items-center mb-4" data-aos-delay="100">
              <div class="col-md-6">
                <a href="card.html?category=${encodeURIComponent(cat.id)}">
                  <img src="${cat.image}" alt="${cat.name}" class="img-fluid blog-img mb-3 mb-md-0" />
                </a>
              </div>
              <div class="col-md-6 ps-md-5">
                <h3 class="theme-color">${cat.name}</h3>
                <p>Explore our premium ${cat.name.toLowerCase()} collection with modern designs.</p>
                <div class="text-center">

                <a href="card.html?category=${encodeURIComponent(cat.id)}" class="btn btn-theme btn-md">Explore More</a>
                </div>
              </div>
            </div>
          `;
        } else {
          // Odd index: image right, text left
          categoryData += `
            <div class="blog-post row align-items-center mb-4" data-aos-delay="100">
              <div class="col-md-6 order-md-2">
                <a href="card.html?category=${encodeURIComponent(cat.id)}">
                  <img src="${cat.image}" alt="${cat.name}" class="img-fluid blog-img mb-3 mb-md-0" />
                </a>
              </div>
              <div class="col-md-6 ps-md-5 order-md-1">
                <h3 class="theme-color">${cat.name}</h3>
                <p>Explore our premium ${cat.name.toLowerCase()} collection with modern designs.</p>
                <div class="text-center">
                <a href="card.html?category=${encodeURIComponent(cat.id)}" class="btn btn-theme btn-md">Explore More</a>
                </div>
              </div>
            </div>
          `;
        }
      });

      container.append(categoryData);
    })
    .catch(error => console.error("Error loading categories:", error));
});
