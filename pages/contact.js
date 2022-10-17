const contact =()=>{
    return`
        <!-- ======= Contact Section ======= -->

    <section id="contact" class="connect">

      <div class="container">

        <div class="subTitle">
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        
        <div class="subTitle">
          <h2>Contact</h2>
        </div>

        <div class="row" data-aos="fade-in">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="fas fa-map-marker-alt"></i>
                <h4>Location:</h4>
                <p>Stadium Road, Benin City, Edo State, Nigeria.</p>
              </div>

              <div class="email">
                <i class="fa fa-at"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="fa fa-phone"></i>
                <h4>Call:</h4>
                <p>+234 80 2345 6789 1</p>
              </div>

<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Samuel%20Ogbemudia%20Stadium,%208JM6+56J,%20Stadium%20Road,%20Ekenwan%20300102,%20Benin%20City&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">how do i add a google map to my website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div></div>

  </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="form-details">
              <div class="row">
                <div class="form-info col-md-6">
                  <label for="name">
                  <i class="fa fa-user"></i>  
                  </label>
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your name" required/>
                </div>
                
                <div class="form-info col-md-6">
                  <label for="name">
                  <i class="fa fa-at"></i>
                  </label>
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your e-mail" required/>
                </div>
              </div>
              
              <div class="form-info">
                <label for="name">
                <i class="fa fa-edit"></i>
                </label>
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Your subject" required/>
              </div>
              
              <div class="form-info">
                <label for="name">
                <i class="fa fa-envelope-open"></i>
                </label>
                <textarea class="form-control" name="message" rows="10" placeholder="Your message" required>
                </textarea>
              </div>
              
              <div class="text-center"><button type="submit">Send Message</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->
    `;
}
export default contact
