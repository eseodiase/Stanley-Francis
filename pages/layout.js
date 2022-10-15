const navigation =()=>{
    return `<div class="d-flex flex-column">

      <div class="nav-layout">

      <img src="assets/img/profile-img.jpg" alt="" class="img-fluid square">
       <h1 class="text-light">Stanley Francis</h1>
             
        
       <div class="social-links mt-3 text-center">
           <div>
           <p class="intro">I'm <span class="typed" data-typed-items="Edo Queens Coach, an ex-footballer, also a business man, Edo Queens' Coach">  
           </span>   
           </p>
           </div>
           
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li class="homeLi"><a href="#hero" class=""><i class="bi bi-house-fill"></i> <span>Home</span></a></li>
          
          <li class="aboutLi"><a href="#about" class="nav-link scrollto"><i class="bi bi-person-fill"></i> <span>About</span></a></li>
          
          <li class="galleryLi"><a href="#portfolio" class="nav-link scrollto"><i class="bi bi-collection-fill"></i> <span>Portfolio</span></a></li>

          <li class="contactLi"><a href="#contact" class="nav-link scrollto"><i class="bi bi-envelope-fill"></i> <span>Contact</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
    
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-chevron-up"></i></a>
      
  <!-- dev footer -->
  <footer class="dev">
    <div class="container">

      <div class="txt">
        Developed by <a href="https://eseodiase.website/">Ese Odiase</a>
      </div>
    </div>
  </footer><!-- End  Footer -->

      `;
}
export default navigation;