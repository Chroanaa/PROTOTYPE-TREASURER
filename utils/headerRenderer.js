const header = document.querySelector(".header");
function renderHeader() {
    header.innerHTML = `
    <div class="row">
        <div class="col-sm-3 header-container">
          <img src="../assets/images/logo.png" width="100px" />
          <h4 style="margin-top: 1.5rem">BRGY STA. LUCIA</h4>
          <nav class="navbar navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
              <span class="">Treasurer <i class="bi bi-caret-down"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav gap-3">
                <li class="nav-item border border-1 mt-2 rounded">
                  <a class="nav-link p-1" href="#">
                    <img
                      src="../assets/images/dashboard.png"
                      alt=""
                      class="p-2"
                    />Dashboard</a
                  >
                </li>
                <li class="nav-item border border-1 rounded">
                  <a class="nav-link p-1" href="#">
                    <img
                      src="../assets/images/financerecords.png"
                      alt=""
                      class="p-2"
                    />Financial Records</a
                  >
                </li>
                <li class="nav-item border border-1 rounded">
                  <a class="nav-link p-1" href="#">
                    <img
                      src="../assets/images/collection.png"
                      alt=""
                      class="p-2"
                    />Collection of fees</a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div class="vertical-line"></div>`
}
renderHeader();