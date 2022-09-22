import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg container-fluid">
        
          <div className="ps-4">
            <a className="navbar-brand" href="/">
            Mors <br></br> Akademi
          </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/form">
                  Yeni Kayıt
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/table">
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
