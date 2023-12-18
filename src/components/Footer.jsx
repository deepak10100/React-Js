import React from 'react'

function Footer() {
  return (
    <>
   <div class="container-fluid bg-white mt-5">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
      </a>
      <span class="text-muted">© 2021 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex btn-outline-primary">
      <li class="ms-3 btn-outline-primary"><a class="text-muted btn-outline-primary" href="#"><i class="bi bi-instagram" style={{fontSize:"30px"}}></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-whatsapp" style={{fontSize:"30px"}}></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-twitter" style={{fontSize:"30px"}}></i></a></li>
    </ul>
  </footer>
</div>
    </>
  )
}

export default Footer
