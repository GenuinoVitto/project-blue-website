<template>
  <!--Welcome One Start-->
  <section class="welcome-one">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="welcome-one__left">
            <div class="welcome-one__img-box">
              <img src="~images/resources/welcome-one-img-1.jpg" alt="" />
              <div class="welcome-one__img-box-2">
                <img src="~images/resources/welcome-one-img-2.jpg" alt="" />
              </div>
              <h2 class="welcome-one__bottom-text">Adem Inovejas</h2>
              <div class="welcome-one__heart-icon">
                <img
                  src="~images/resources/welcome-one-heart-icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="welcome-one__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">Founding Story</span>
              <h2 class="section-title__title">
                Get to know Adem, Project Blue's founder.
              </h2>
            </div>
            <p class="welcome-one__right-text">
              I'm Adem Inovejas, currently a second-year BS Mechanical Engineering student in DLSU - Manila. My hometowns are Sinait and San Esteban, Ilocos Sur, but I grew up in Manila; my family decided to stay here for the COVID-19 lockdown due to safety reasons, and we haven't been back in Manila ever since March of 2020. I really enjoy going to beaches and doing water activities like surfing and diving. With this, I spend a lot of my time in beaches, and what I've long noticed was that there was an alarming number of trash by the shore — even the lesser known beaches. 

            </p>
            <div class="welcome-one__our-mission-and-story">
              <div class="welcome-one__mission-and-story-single">
                <h3><i class="fas fa-arrow-circle-right"></i>How it started</h3>
                <p class="welcome-one__our-mission-and-story-text">
                  I founded it on my birthday as a mere cleanup idea that turned into an organization after realizing that cleanups aren’t enough and that we have to be more sustainable. Though for our first project, we did a cleanup on my favorite beach here and we donated three trash bins for the beach and held a post-cleanup talk about sustainability with the barangay officials. I started posting about my birthday plan on my Instagram, and I'm really thankful for the support I got!
                </p>
              </div>
              <br>
              <div class="welcome-one__mission-and-story-single">
                <h3><i class="fas fa-arrow-circle-right"></i>At first glance</h3>
                <p class="welcome-one__our-mission-and-story-text">
                  Taken from my statement during the first days of setting up this organization: **"*I haven't had the guts to start something like this up until now, because I believe that there is no better time than now, and that I couldn't go to the beach anymore and still do nothing about the trash that I see.
                </p>
              </div>
            </div>
            <!-- <div class="welcome-one__progress">
              <div class="welcome-one__progress-single">
                <h4 class="welcome-one__progress-title">Impact</h4>
                <div class="bar">
                  <div
                    :class="`bar-inner count-bar ${startBar ? `counted` : ` `}`"
                    v-observe-visibility="onVisibilityChange"
                    :data-percent="`${83}%`"
                    :style="`${startBar ? `width: ${83}%` : ``}`"
                  >
                    <div
                      class="count-text"
                      v-observe-visibility="onVisibilityCountChange"
                    >
                      <countTo
                        :startVal="0"
                        :endVal="startCounter ? 83 : 0"
                        :duration="3000"
                      ></countTo
                      >%
                    </div>
                  </div>
                </div>
              </div>
              <div class="welcome-one__progress-single">
                <h4 class="welcome-one__progress-title">Progress</h4>
                <div class="bar">
                  <div
                    :class="`bar-inner count-bar ${startBar ? `counted` : ` `}`"
                    v-observe-visibility="onVisibilityChange"
                    :data-percent="`${38}%`"
                    :style="`${startBar ? `width: ${38}%` : ``}`"
                  >
                    <div
                      class="count-text"
                      v-observe-visibility="onVisibilityCountChange"
                    >
                      <countTo
                        :startVal="0"
                        :endVal="startCounter ? 38 : 0"
                        :duration="3000"
                      ></countTo
                      >%
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <!-- <nuxt-link to="/about" class="welcome-one__btn thm-btn">
              <i class="fas fa-arrow-circle-right"></i>Learn More
            </nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Welcome One End-->
</template>

<script>
import countTo from "vue-count-to";
import { ObserveVisibility } from "vue-observe-visibility";
export default {
  components: { countTo },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      startBar: false,
      startCounter: false,
    };
  },
  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startBar = true;
      }
    },
    onVisibilityCountChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    },
  },
};
</script>
