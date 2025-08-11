document.addEventListener("DOMContentLoaded", function(){
  fetch("assets/JS/design.js/main.json")
    .then(response => response.json())
    .then(Mains => Mains.filter(a => a.type == "main"))
    .then(Data => {
      var container = $("#main_container");
      var articleData = "";
      Data.forEach(function(main) {
        articleData += `
          <div class="blog-post row align-items-center" data-aos-delay="100">
            <div class="col-md-6">
              <img src="assets/images/design-images/${main.img1}" alt="${main.title}" class="img-fluid blog-img mb-3 mb-md-0" />
            </div>
            <div class="col-md-6 ps-md-5">
              <h3 class="theme-color">${main.title}</h3>
              <p>${main.description}</p>
              <a href="category.html?category=${encodeURIComponent(main.title)}" class="btn btn-theme btn-sm">Explore More</a>
            </div>
          </div>
        `;
      });
      container.append(articleData);
    })
    .catch(error => console.error("Error loading designs:", error));
});
