<template>
  <!--Contact page Start-->
  <section class="contact-page">
    <div class="container">
      <div class="section-title text-center">
        <span class="section-title__tagline">Contact With Us</span>
        <h2 class="section-title__title">
          We love to hear from our <br />
          fellow ocean lovers.
        </h2>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="contact-page__left">
            <div class="contact-page__img">
              <img src="~images/resources/contact-page-img-1.jpg" alt="" />
            </div>
            <p class="contact-page__text">
              Send a messsage our way and we'll try our best to reply!
            </p>
            <div class="contact-page__contact-info">
              <ul class="contact-page__contact-list list-unstyled">
                <li>
                  <div class="icon">
                    <span class="icon-chat"></span>
                  </div>
                  <div class="text">
                    <p>Call Anytime</p>
                    <a href="tel:92 666 888 0000">+62xxx-xxx-xxxx</a>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="icon-message"></span>
                  </div>
                  <div class="text">
                    <p>Send Email</p>
                    <a href="mailto:Projectbluephl@gmail.com"
                      >Projectbluephl@gmail.com</a
                    >
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="icon-address"></span>
                  </div>
                  <div class="text">
                    <p>Visit Office</p>
                    <h5>City of Vigan, Philippines</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="contact-page__form">
            <form
              action="#"
              class="contact-page__main-form contact-form-validated"
            >
              <div class="row">
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <input type="text" placeholder="Your name" name="name" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6">
                  <div class="contact-page__input-box">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="contact-page__input-box">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <textarea
                      name="message"
                      placeholder="Write message"
                    ></textarea>
                  </div>
                  <button type="submit" class="thm-btn contact-page__btn">
                    <i class="fas fa-arrow-circle-right"></i>Send a Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Contact page End-->
</template>
