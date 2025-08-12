document.addEventListener("DOMContentLoaded", function(){
  // URL se product ID lo
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch("assets/JS/design.js/main.json")
    .then(response => response.json())
    .then(data => {
      const main = data.find(p => p.id == id);
      if (!main) return;

      let container = $("#detail_container");

      let html = `
        <div class="row">
          <!-- Image Section -->
          <div class="col-md-6 text-center">
            <img id="mainImage" src="assets/images/design-images/${main.img1}" class="img-fluid mb-3" style="height:300px; object-fit:cover; border-radius: 15px; ">
            <div>
              <img src="assets/images/design-images/${main.img1}" class="thumb mx-1" style=" height: 70px; cursor:pointer; border-radius: 15px;">
              <img src="assets/images/design-images/${main.img2}" class="thumb mx-1" style=" height: 70px; cursor:pointer; border-radius: 15px;">
              <img src="assets/images/design-images/${main.img3}" class="thumb mx-1" style=" height: 70px; cursor:pointer; border-radius: 15px;">
            </div>
          </div>

          <!-- Details Section -->
          <div class="col-md-6">
            <h4>${main.name}</h4>
            <p><strong>Category:</strong> ${main.title}</p>
            <p>${main.description}</p>
            <ul>
              ${main.products.split(".").map(item => item.trim() ? `<li>${item}</li>` : "").join("")}
            </ul>
            <h6 class="text-dark">Price: ₹${main.price}</h6>
          </div>
        </div>
      `;

      container.html(html);

      // Thumbnail click event
      $(".thumb").on("click", function(){
        let newSrc = $(this).attr("src");
        $("#mainImage").attr("src", newSrc);
      });
    });
});
