import React from 'react'
import imgsrc from '../assests/1.png'
import imgsrc2 from '../assests/2.webp'

function Home() {
  return (
   <>
  <div className="bg-dark pdding">
  <div className="home">
      <img src={imgsrc} alt="" srcset="" />
      <div className="para">
      <h1>TeachStar</h1>
      <p>SOLUTION TO ALL YOUR PROBLEMS</p>
      </div>
    </div>

    <div class="bg-dark py-5 text-white mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={imgsrc2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body m-5 p-5">
        <p class="card-text m-3 fs-2">We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.</p>
      </div>
    </div>
  </div>
</div>

<div class="card text-center p-5 my-5" style={{width:"60em", borderRadius:"0 200px 200px 0px"}}>
  <div class="card-body p-1 m-5">
    <h5 class="card-title fs-1 py-5"><u>WHO WE ARE?</u></h5>
    <p class="card-text fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam quis officiis fugit sunt dolores nostrum tenetur iusto est odio mollitia. Dolor placeat repellendus officia aspernatur dolorum harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium quia tempore. Dignissimos esse sequi numquam est ipsam nemo, voluptas vel recusandae iste aspernatur qui quasi, commodi, atque ipsa dolores tempore asperiores? Dolores soluta placeat molestiae aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit similique maxime praesentium sunt unde necessitatibus voluptates ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat, qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum sed cumque corporis voluptate quibusdam nostrum quod saepe</p>
  </div>
  </div>

  <div className="my-5 p-5">
  <div class="card text-center bg-primary" style={{borderRadius:"200px 0px 0px 200px", width:"60rem" , marginLeft:"31.9rem"}}>
  <div class="card-body p-5">
    <h5 class="card-title fs-1"><u>BRANDS</u></h5>
    <div class="row row-cols-1 row-cols-md-3 g-4 m-4">
  <div class="col p-3">
    <div class="">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-instagram"></i>Instagram</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="rounded-circle">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-threads"></i> Threads</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
      <div class="card-body">
        <h5 class="card-title"><i class="bi bi-whatsapp"></i> WhatsApp</h5>
      </div>
    </div>
  </div>
 
</div>
  </div>
  </div>
  </div>
  </div>
   </>
  )
}

export default Home
