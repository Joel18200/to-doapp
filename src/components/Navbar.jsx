import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-danger">
        <div class="container-fluid">
        <a class="navbar-brand"> 
              <img src="https://www.svgrepo.com/show/10000/mastercard.svg"style={{marginRight:17}} alt="Bootstrap" width="40" height="40" />
           <font style={{ color: 'aquamarine' }}></font>𖢧𖣠-<font style={{ color: 'aquamarine' }}>𖤀𖣠-</font><font style={{ color: 'beige' }}>ⒶⓅⓅ </font>
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>𝐀𝐃𝐃</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search" style={{ color: 'white' }}>𝐒𝐄𝐀𝐑𝐂𝐇</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view" style={{ color: 'white' }}>𝐕𝐈𝐄𝐖</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar