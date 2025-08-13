document.addEventListener("DOMContentLoaded", function () {
    fetch("assets/JS/designer.JS/dsgnrdata.json")
        .then(response => response.json())
        .then(DsgnrData => {
            let cards = "";
            DsgnrData.forEach(d => {
                cards += `
                  <div class="designer-card col-md-6" data-aos="zoom-in">
                    <div class="designer-header">
                      <img src="assets/images/designer-img/${d.img1}" alt="" class="designer-avatar">
                      <span class="designer-name">${d.name}</span>
                      <div class="button">
                      <a href="dsgnrdetails.html" class="btn-theme">Explore More</a>
                        
                      </div>
                    </div>
                    <div class="designer-image">
                      <img src="assets/images/designer-img/${d.img2}" alt="Home Design">
                    </div>
                    <div class="designer-tags">
                      <span>${d.tag1}</span>
                      <span>${d.tag2}</span>
                      <span>${d.tag3}</span>
                    </div>
                  </div>
                `;
            });
            document.getElementById("designer_container").innerHTML = cards;
        })
        .catch(error => console.error("Error loading JSON:", error));
});
