<template>
  <div class="footer">
    <div class="footer-box">
      <div class="logo-big web">
        <img :src="require('@/assets/img/footer/logo-white.png')" />
      </div>

      <div class="footer-info">
        <div class="info-area">
          <div class="footer-text">
            <span><router-link to="">CONTACT US</router-link></span>
            <span><router-link to="">SPECIAL EVENTS</router-link></span>
            <span><router-link to="">PRIVACY POLICY</router-link></span>
          </div>
          <div class="footer-text">
            <span><router-link to="">ABOUT</router-link></span>
            <span><router-link to="">FAQ</router-link></span>
            <span><router-link to="">JOIN US</router-link></span>
          </div>
        </div>
        <div class="social-icons">
          <router-link to=""><img :src="require('@/assets/img/footer/facebook.svg')"/></router-link>
          <router-link to=""><img :src="require('@/assets/img/footer/Instagram.svg')"/></router-link>
          <router-link to=""><img :src="require('@/assets/img/footer/twitter.svg')"/></router-link>
          <router-link to=""><img :src="require('@/assets/img/footer/email.svg')"/></router-link>
        </div>
      </div>

      <div class="location web">
        <div>
          <p class="title-s">• LOCATION：</p>
          <p class="gray">2375 130TH AVE NE #100, BELLEVUE, WA 98005, UNITED STATES</p>
          <P class="title-s">• OPENING HOURS：</P>
          <p class="gray">MONDAY－FRIDAY：9AM－9PM</p>
          <p class="gray">SATURDAY－SUNDAY：10AM－10PM</p>
        </div>
      </div>
    </div>

    <div class="c-area web">
      <p>© COPYRIGHTS 2020 SUCCUCENTS & LIFE. All RIGHTS RESERVED.</p>
    </div>
    <div class="c-area phone">
      <p>© COPYRIGHTS 2020 SUCCUCENTS & LIFE.</p>
    </div>
  </div>

  <!-- c -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: #006737;
  color: #fff;

  .footer-box {
    display: flex;
    justify-content: space-around;
    padding: 0 5rem;

    .logo-big {
      padding: 2rem 0 2rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 11rem;

      img {
        width: 100%;
      }
    }

    .footer-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .info-area {
        display: flex;
        .footer-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin: 1.5rem 0.8rem 0 1.07rem;

          span {
            text-decoration: none;
            color: #fff;
            font-size: 0.9rem;
            margin: 0.3rem 0;
          }
        }
      }

      .social-icons {
        display: flex;
        justify-content: start;

        img {
          width: 2.2rem;
          margin: 1rem;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }

    .location {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title-s {
        font-size: 1.2rem;
        font-weight: 600;
      }

      .gray {
        color: #b0d8bf;
        line-height: 0.5rem;
        font-size: 0.9rem;
      }
    }
  }

  .c-area p {
    color: #b0d8bf;
    border-top: 1px solid#b0d8bf;
    margin: 0 auto;
    padding: 0.6rem;
    text-align: center;
    font-size: 0.9rem;
  }
}

@media (min-width: 768px) {
  .phone {
    display: none !important;
  }
}

@media screen and(max-width:767px) {
  .web {
    display: none !important;
  }
  .info-area {
    justify-content: center;
  }
}
</style>
