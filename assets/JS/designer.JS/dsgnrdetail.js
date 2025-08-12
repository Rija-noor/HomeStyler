document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/JS/designer.js/designerdetail.json")
    .then(Response => Response.json())
    .then(Data => {
        var id = localStorage.getItem("id");
        var detail = Data.find(card => card.id == id);
        var container = document.getElementById("designer_detail");
        container.innerHTML = `
                <header class="header-banner">
  <img src="assets/images/designer-img/${detail.image1}" alt="Designer Banner" class="banner-img">

  <div class="profile-pic">
    <img src="assets/images/designer-img/${detail.image2}" alt="Designer">
  </div>
</header>

<!-- DESIGNER INFO -->
<section class="designer-info">
  <h1 class="designer-name">${detail.name}</h1>
  <p class="designer-bio" id="bio">
    ${detail.des1}
    <span class="more-text">
      ${detail.des2}
    </span>
  </p>
  <button class="read-more-btn" id="readMoreBtn">Read More</button>
</section>

  <!-- Designs Grid -->
  <section class="design-grid mt-3" data-aos="fade-up">

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design1}" alt="DesignImage1">
    </div>

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design2}" alt="DesignImage2">
    </div>

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design3}" alt="DesignImage3">
    </div>

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design4}" alt="DesignImage4">
    </div>

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design5}" alt="DesignImage5">
    </div>

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design6}" alt="DesignImage6">
    </div>

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design7}" alt="DesignImage7">
    </div>

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design8}" alt="DesignImage8">
    </div>

    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design9}" alt="DesignImage9">
    </div>
    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design10}" alt="DesignImage10">
    </div>
    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design11}" alt="DesignImage11">
    </div>
    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design12}" alt="DesignImage12">
    </div>
    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design13}" alt="DesignImage13">
    </div>
    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design14}" alt="DesignImage14">
    </div>
    <div class="design-item">
      <img src="assets/images/designer-img/${detail.design15}" alt="DesignImage15">
    </div>
  </section>
        `
    })
})