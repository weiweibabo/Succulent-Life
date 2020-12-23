<template>
  <div class="about">
    <div class="about-box">
      <!-- our story -->
      <div class="title">
        <span>OUR STORY</span>
      </div>

      <div class="story-area">
        <div>
          <div class="flower">
            <img class="flower-fadein" :src="require('@/assets/img/about/flower circle.png')" />
            <div class="story">
              <p>
                SUCCUENTS & LIFE <br />IS A PLACE<br />
                WHERE ART AND NATURE<br />
                COME TOGETHER
              </p>
            </div>
          </div>
        </div>
        <div class="text-area">
          <p>
            It all started when Martha Mendoza, a curious creative, figured out how to propagate the only succulent that
            survived after her first attempt at these little creatures. Let's admit it, we have all killed our first
            succulent!
          </p>
          <p>
            Martha's determination to learn how to care for her new succulent babies became a bit of an obsession, and
            this, mixed with her creative spirit, became Succulents & Life.
          </p>
          <p>
            Every succulent arrangement is carefully planted in curated and repurposed containers to bring the joy of A
            Succulent Day to everyone in the Boise, Idaho area.
          </p>
        </div>
      </div>

      <!-- infomation web-->
      <div class="info-area">
        <div class="info">
          <div>
            <span class="green">INFORMATION</span>
          </div>

          <div class="text-area-2">
            <div class="text-s">
              <img :src="require('@/assets/img/about/phone.png')" />
              <span>&nbsp; +12064523400</span>
            </div>
            <div class="text-s">
              <img :src="require('@/assets/img/about/time.png')" />
              <span
                >&nbsp; MONDAY－FRIDAY：9AM－9PM<br />
                &nbsp; SATURDAY－SUNDAY：10AM－10PM</span
              >
            </div>
            <div class="text-s">
              <img :src="require('@/assets/img/about/location.png')" />
              <span>&nbsp; 130TH AVE NE #100, BELLEVUE, WA 98005, UNITED STATES</span>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.7407466045406!2d-122.17102268500884!3d47.63117057918629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906cfcde5769a7%3A0x16f4007e4439ae10!2sSucculent%20Life%20LLC.!5e0!3m2!1sen!2stw!4v1603172085344!5m2!1sen!2stw"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>

      <!-- contact us -->
      <div class="contact-area">
        <div class="pic web">
          <img :src="require('@/assets/img/about/contact-img.jpg')" />
        </div>

        <div class="contact">
          <div class="title">
            <span>CONTACT US</span>
          </div>
          <div class="form-area">
            <div class="web">
              <p>Send us a note to let us know how we can help you.</p>
            </div>
            <form>
              <fieldset>
                <legend>NAME</legend>
                <p>
                  <input type="text" name="firstname" id="firstname" placeholder="First Name" />
                  <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                </p>
              </fieldset>
              <fieldset>
                <legend>EMAIL</legend>
                <p>
                  <input type="text" name="email" id="email" size="44" />
                </p>
              </fieldset>
              <fieldset>
                <legend>PHONE</legend>
                <p>
                  <input type="text" name="phone" id="phone" size="30" />
                </p>
              </fieldset>
              <fieldset>
                <legend>SUBJECT</legend>
                <p>
                  <input type="text" name="subject" id="subject" size="30" />
                </p>
              </fieldset>
              <fieldset>
                <legend>MESSAGE</legend>
                <p>
                  <textarea
                    name="comment"
                    form="usrform"
                    style="width:21.5rem;height:7rem;"
                    placeholder="Enter text here..."
                  ></textarea>
                </p>
              </fieldset>
              <button class="btn">
                <p>SUBMIT</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- fix button -->
    <div class="fix-btn" @click="scrollToTop()">
      <img :src="require('@/assets/img/arrow-up-btn/Arrow-gray.svg')" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.yyy, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.yyy);
  },
  methods: {
    // scrollTop
    yyy() {
      let scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop);

      // story move-up
      if (scrollTop > 0) {
        document.querySelector('.story').classList.add('move-up');
      } else {
        document.querySelector('.story').classList.remove('move-up');
      }

      // map move-up
      if (scrollTop > 190) {
        document.querySelector('.map').classList.add('move-up');
      } else {
        document.querySelector('.map').classList.remove('move-up');
      }

      // pic move-up
      if (scrollTop > 590) {
        document.querySelector('.pic').classList.add('move-up');
      } else {
        document.querySelector('.pic').classList.remove('move-up');
      }

      // fixed-btn arrow up
      if (scrollTop > 160) {
        document.querySelector('.fix-btn').classList.add('show');
      } else {
        document.querySelector('.fix-btn').classList.remove('show');
      }
    },

    // 返回最上面
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  background: #b0d8bf;
  display: flex;
  justify-content: center;
  height: 100%;

  .about-box {
    margin-top: 70px;
    max-width: 1200px;
    margin: 0 auto;

    // story-area
    .title {
      width: 100%;
      height: 4.375rem;
      text-align: center;
      margin-top: 9.5rem;

      span {
        font-size: 2rem;
        font-weight: 600;
        color: #006737;
        border-bottom: 4px solid #006737;
        margin-left: 14rem;
      }
    }

    .story-area {
      display: flex;
      justify-content: space-evenly;

      .flower {
        position: relative;
        width: 28rem;

        .flower-fadein {
          animation-delay: 3s;
          animation: fadein 4s;
          animation-iteration-count: 1;
        }
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        img {
          width: 100%;
        }

        .story {
          position: absolute;
          width: 205px;
          top: 7rem;
          left: 16.4rem;
          color: #fff;
          font-size: 1.3rem;
          font-weight: 700;
          text-align: center;
          opacity: 0;
          transform: translateY(7.25rem);
        }

        .story.move-up {
          transition: 0.8s ease-out;
          transform: translateY(-0.7rem);
          opacity: 1;
        }
      }

      .text-area {
        margin-top: 1.5rem;
        width: 50%;
        padding-right: 5rem;
        padding-left: 3rem;
      }
    }

    // information-area

    .info-area {
      margin: 3rem 2rem;
      display: flex;
      justify-content: center;

      .info {
        .green {
          font-size: 2rem;
          color: #006737;
          border-bottom: 4px solid #006737;
          font-weight: 600;
        }

        .text-area-2 {
          margin-top: 3rem;
          margin-left: 0;
          margin-right: 5rem;

          .text-s {
            margin: 1rem 0;
            display: flex;
            align-items: center;
            img {
              width: 1.5rem;
            }
          }
        }
      }

      .map {
        opacity: 0;
        transform: translateY(6rem);

        iframe {
          width: 25rem;
          height: 15rem;
        }
      }

      .map.move-up {
        transition: 0.8s ease-out;
        transform: translateY(-0.2rem);
        opacity: 1;
      }
    }
  }

  // contact us
  .contact-area {
    transform: translateY(-5rem);
    display: flex;

    .contact {
      .title {
        margin-top: 5.5rem;
        span {
          margin-left: 0;
        }
      }
    }

    .pic {
      width: 40%;
      margin: 10rem 3rem;
      opacity: 0;
      transform: translateY(14rem);

      img {
        width: 100%;
      }
    }

    .pic.move-up {
      transition: 0.8s ease-out;
      transform: translateY(4rem);
      opacity: 1;
    }

    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 3rem;

      legend {
        color: #006737;
        font-size: 1rem;
        font-weight: 600;
      }
      input,
      textarea {
        background: rgba(255, 255, 255, 0.8);
        border: 1.5px solid #006737;
        border-radius: 0.2rem;
        margin: 0 0.3rem;
      }

      .btn {
        width: 8.75rem;
        height: 3.125rem;
        border: 0.125rem solid #006737;
        color: #fff;
        background: #006737;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 12rem;
        margin-top: 1.6rem;
        margin-bottom: 2rem;
        &:hover {
          border: 0.125rem solid #006737;
          color: #006737;
          background: #fff;
        }

        p {
          margin-top: 1.2rem;
        }
      }
    }
  }
}

// fix-btn arrow-up
.fix-btn {
  width: 2.2rem;
  position: fixed;
  top: 90%;
  right: 0.8rem;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
}
.fix-btn.show {
  transition: 0.8s;
  opacity: 1;
}

@media (min-width: 768px) {
  .phone {
    display: none;
  }
}

@media screen and(max-width:767px) {
  .web {
    display: none !important;
  }

  .about {
    .about-box {
      width: 100%;

      .title {
        span {
          margin-left: 0;
        }
      }
      .story-area {
        flex-direction: column;
        align-items: center;

        .flower {
          width: 25rem;
          .story {
            left: 10rem;
          }
        }

        .text-area {
          display: flex;
          flex-direction: column;
          width: 70%;
          padding-right: 0;
          padding-left: 0;
        }
      }

      .info-area {
        flex-direction: column;
        align-items: center;

        .info {
          justify-content: center;
          width: 75%;

          .text-area-2 {
            margin-right: 0;
          }
        }

        .map {
          iframe {
            margin-top: 1rem;
            width: 20rem;
            height: 15rem;
          }
        }
      }

      .contact-area {
        justify-content: center;

        .contact {
          margin: 0 0;
        }
      }
    }
  }
}

@media screen and(max-width:414px) {
  .web {
    display: none !important;
  }
  .about {
    .about-box {
      .story-area {
        .flower {
          width: 22rem;
          .story {
            left: 9rem;
            p {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
