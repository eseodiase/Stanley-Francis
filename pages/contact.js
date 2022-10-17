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

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
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
