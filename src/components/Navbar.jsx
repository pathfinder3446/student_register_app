import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        
          <div className="ps-4 container-fluid">
            <a className="navbar-brand" href="/">
            Mors <br></br> Akademi
          </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/form">
                  Yeni Kayıt
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/form/table">
                  Öğrenci Listesi
                </a>
              </li>
            </ul>
          </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
