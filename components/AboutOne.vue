<template>
  <!--About Page Start-->
  <section class="about-page">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-page__left">
            <div class="about-page__img">
              <img
                src="~/assets/images/resources/about-page-img-1.jpg"
                alt=""
              />
              <div class="about-page__trusted">
                <h3>We’re trusted by <span>x</span> organizations</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="about-page__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">Our Introduction</span>
              <h2 class="section-title__title">
                How We Started
              </h2>
            </div>
            <p class="about-page__right-text">
              Project Blue (PB), formerly Project Blue Ilocos (PBI), was established in the province of Ilocos on the 12th of December 2020.  From an initial cleanup drive idea to a nonprofit organization, PB was founded by Adem Inovejas, a Mechanical Engineering Student from De La Salle University - Manila and resident of Ilocos Sur. After almost two years, PB has decided to venture out of the province and drive their focus towards a national movement.
            </p>
            <h3 class="about-page__right-title">
              Project Blue is based in the province of Ilocos Sur 
            </h3>
            <div class="about-five__progress-wrap">
              <div class="about-five__progress">
                <div class="about-five__progress-box">
                  <div class="circle-progress">
                    <client-only>
                      <vue-ellipse-progress
                        :progress="90"
                        :size="138"
                        :thickness="3"
                        emptyThickness="3%"
                        color="#15c8a0"
                        emptyColor="#e5eeec"
                        :legend="false"
                      />
                    </client-only>
                  </div>
                  <!-- /.circle-progress -->
                  <span>x</span>
                </div>
                <div class="about-five__progress-content">
                  <h3>Successful causes</h3>
                </div>
              </div>
              <div class="about-five__progress">
                <div class="about-five__progress-box">
                  <div class="circle-progress">
                    <client-only>
                      <vue-ellipse-progress
                        :progress="50"
                        :size="138"
                        :thickness="3"
                        emptyThickness="3%"
                        color="#15c8a0"
                        emptyColor="#e5eeec"
                        :legend="false"
                      />
                    </client-only>
                  </div>
                  <!-- /.circle-progress -->
                  <span>x</span>
                </div>
                <!-- /.about-five__progress-box -->
                <div class="about-five__progress-content">
                  <h3>Amazing cleanups</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--About Page Start-->
</template>
<script>
export default {};
</script>
