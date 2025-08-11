const logoRowHTML = `
  <div class="logo-bar text-center">
    <div class="row py-1">
      <div class="col text-center">
        <a class="navbar-brand" href="index.html">
          <img src="assets/images/logo.png" alt="logo" style="height: 40px;" class="mt-2">
        </a>
      </div>
    </div>
  </div>
`;


const navRowHTML = `
  <nav class="navbar navbar-expand-lg navbar-light nav-bar px-2 shadow-sm">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link text-dark" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link text-dark" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link text-dark" href="about.html">Designs</a></li>
        <li class="nav-item"><a class="nav-link text-dark" href="about.html">Designers</a></li>
        <li class="nav-item"><a class="nav-link text-dark" href="about.html">Contact</a></li>
        <li class="nav-item"><a class="nav-link text-dark" href="about.html">Feedback</a></li>
      </ul>

      <div class="d-flex gap-2">
        <button class="btn btn-outline-dark rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
        <button class="btn rounded-pill px-4 signup-btn" data-bs-toggle="modal" data-bs-target="#signupModal"  style="background-color: black; color: white;">Sign Up</button>
      </div>
    </div>
  </nav>
`;

document.getElementById("navbar-container").innerHTML = logoRowHTML + navRowHTML;



const loginModalHTML = `
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content needs-validation" novalidate>
      <div class="modal-header">
        <h5 class="modal-title" id="loginModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="loginEmail" class="form-label">Username or Email</label>
          <input type="email" class="form-control" id="loginEmail" required>
          <div class="invalid-feedback">Please enter a valid email or username.</div>
        </div>
        <div class="mb-3">
          <label for="loginPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="loginPassword" minlength="6" required>
          <div class="invalid-feedback">Password must be at least 6 characters.</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-dark">Login</button>
      </div>
    </form>
  </div>
</div>
`;


const signupModalHTML = `
<div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content needs-validation" novalidate>
      <div class="modal-header">
        <h5 class="modal-title" id="signupModalLabel">Sign Up</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="signupName" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="signupName" required>
          <div class="invalid-feedback">Please enter your full name.</div>
        </div>
        <div class="mb-3">
          <label for="signupEmail" class="form-label">Email address</label>
          <input type="email" class="form-control" id="signupEmail" required>
          <div class="invalid-feedback">Please enter a valid email address.</div>
        </div>
        <div class="mb-3">
          <label for="signupPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="signupPassword" minlength="6" required>
          <div class="invalid-feedback">Password must be at least 6 characters.</div>
        </div>
        <div class="mb-3">
          <label for="signupConfirmPassword" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="signupConfirmPassword" minlength="6" required>
          <div class="invalid-feedback">Please confirm your password.</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-dark"; color: white;">Sign Up</button>
      </div>
    </form>
  </div>
</div>
`;

document.getElementById("modal-container").innerHTML = loginModalHTML + signupModalHTML;

// Form Validation
window.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });
});
