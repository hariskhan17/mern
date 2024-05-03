import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initMDB, Dropdown } from "mdb-ui-kit";

function Navbar() {
  const Navigate = useNavigate();

  useEffect(() => {
    // Initialize MDB components including Dropdown
    initMDB({ Dropdown });
  }, []);

  function logout() {
    localStorage.removeItem('token')
    Navigate('/Login')

  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://i.pinimg.com/originals/6f/51/ba/6f51ba2555b8c332c874960a534bf22b.png"
                height="50"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <button className='Post' onClick={() => Navigate("/sell")}>Post-Adds</button>
            <button className='Update' onClick={() => Navigate("/adds")}>My-Adds & Update</button>
            <button className='logout' onClick={logout}>Log-out</button>
          </div>

        </div>

      </nav>
    </div>
  );
}

export default Navbar;
