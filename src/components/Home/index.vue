<template>
  <div class="home">
    <!--banner area -->
    <div class="banner">
      <img :src="require('@/assets/img/home/viedo.gif')" />
    </div>
    <!-- main area -->
    <div class="main-area">
      <!-- products -->
      <div class="title">
        <span>NEW IN</span>
      </div>
      <div class="product-area">
        <div
          class="product-box"
          v-for="(item, index) in imgArr"
          :key="index"
          :class="[{ 'pic-margin': item.class === 'pic-5' || item.class === 'pic-8' }]"
        >
          <div class="pic" :class="item.class" @click="openProduct(item)">
            <img :src="require(`@/assets/img/home/product-${index + 1}.jpg`)" />
            <div class="viewmore">
              <span>VIEW MORE</span>
            </div>
          </div>
        </div>
      </div>
      <!-- product-info-modal -->
      <!-- :用 props方法傳遞 value -->
      <product-modal v-model="showProductBool" :rowData="rowData" />

      <!-- blog -->
      <div class="title">
        <span>BLOG</span>
      </div>
    </div>

    <div class="blog-area">
      <blog-swiper />
    </div>

    <!-- workshop  -->
    <div class="main-area workshop-area">
      <div class="box-1 ">
        <div class="text">
          <div class="text-area">
            <p>HAVE FUN</p>
            <p>WITH</p>
            <p>SUCCULENTS</p>
          </div>
        </div>
        <div class="box-circle-1"></div>
      </div>
      <div class="content">
        <p class="workshop"><span>WORKSHOP</span></p>
        <p>Our workshop allow all of your guests a chance to create their own succulent masterpieces together.</p>
        <p>
          Our succulent specialist brings everything your group needs to create beautiful, professional looking
          arrangements.
        </p>
        <p class="web">
          We are there to walk your group through the planting process step by step. The host provides a planting area
          for the class and tables, then just leave the rest up to us !
        </p>
      </div>
      <div class="box-2 web">
        <div class="cactus">
          <img :src="require('@/assets/img/home/cactus.png')" />
          <div class="btn">
            <p>GET STARTED</p>
          </div>
        </div>
        <div class="box-circle-2"></div>
      </div>
    </div>

    <div class="main-area workshop-pic">
      <div class="pic-area">
        <img :src="require('@/assets/img/home/workshop-1.jpg')" />
        <img :src="require('@/assets/img/home/workshop-2.jpg')" />
        <img :src="require('@/assets/img/home/workshop-3.jpg')" />
        <img :src="require('@/assets/img/home/workshop-4.jpg')" />
      </div>
    </div>

    <!-- fix button -->
    <div class="fix-btn" @click="scrollToTop()">
      <img :src="require('@/assets/img/arrow-up-btn/Arrow-gray.svg')" />
    </div>
  </div>
</template>

<script>
import ProductModal from '@/components/Home/ProductModal';
import BlogSwiper from '@/components/Home/BlogSwiper';

export default {
  components: {
    ProductModal,
    BlogSwiper,
  },
  data() {
    return {
      // 預設 modal為關閉
      showProductBool: false,

      // 預設為空物件,將得到的 value賦值給 rowData這個變數
      rowData: {},

      imgArr: [
        { class: 'pic-1', data: { num: 1 }, title: ['succulents001'] },
        { class: 'pic-2', data: { num: 2 } },
        { class: 'pic-3', data: { num: 3 } },
        { class: 'pic-4', data: { num: 4 } },
        { class: 'pic-5', data: { num: 5 } },
        { class: 'pic-6', data: { num: 6 } },
        { class: 'pic-7', data: { num: 7 } },
        { class: 'pic-8', data: { num: 8 } },
        { class: 'pic-9', data: { num: 9 } },
      ],
    };
  },

  mounted() {
    window.addEventListener('scroll', this.yyy, true);
  },

  methods: {
    // modal
    openProduct(item) {
      const vm = this;

      // 把 item 的 data 賦值給 rowData
      vm.rowData = item.data;
      // 如果 true就打開 modal, false就關閉
      vm.showProductBool = true;
    },

    // scrollTop
    yyy() {
      let scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop);

      // workshop-text(HAVE FUN...)

      if (scrollTop > 1830) {
        document.querySelector('.text').classList.add('move-up');
      } else {
        document.querySelector('.text').classList.remove('move-up');
      }

      // workshop-cactus&btn
      if (scrollTop > 2130) {
        document.querySelector('.cactus').classList.add('move-up');
      } else {
        document.querySelector('.cactus').classList.remove('move-up');
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
.home {
  padding-top: 70px;
}
// banner-area
.banner {
  img {
    width: 100%;
  }
}
// main-area
.main-area {
  max-width: 1200px;
  margin: 0 auto;
}
// product-area
.title {
  width: 100%;
  height: 4.375rem;
  font-weight: 600;
  text-align: center;
  margin-top: 3.125rem;
  margin-bottom: 1rem;
  span {
    font-size: 2rem;
    font-weight: 600;
    color: #006737;
    border-bottom: 4px solid #b0d8bf;
  }
}

.product-area {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .product-box {
    display: flex;

    .pic {
      display: flex;
      position: relative;
      font-size: 0px;
      &:hover {
        font-size: 20px;
      }

      img {
        width: 100%;
        &:hover {
          transition: 0.5s;
          box-shadow: 2px 2px 8px rgb(148, 148, 148);
          filter: brightness(80%);
        }
      }
      .viewmore {
        position: absolute;
        top: 48%;
        left: 35%;
        opacity: 1;
        text-decoration: none;
        color: #fff;
      }
    }
  }
}

// blog-area
.blog-area {
  width: 100%;
  background: #b0d8bf;
  cursor: grab;
}

// workshop-area
.workshop-area {
  display: flex;

  .box-1 {
    position: relative;
    width: 17.5rem;
    height: 17.5rem;
    border-radius: 50%;
    background: #b0d8bf;
    top: 3.75rem;

    .text {
      position: absolute;

      .text-area {
        font-size: 1.5rem;
        font-weight: 600;
        color: #006737;
        margin-top: 4.375rem;
        transform: translate(5rem, 6.25rem);
        text-align: center;
      }
    }
    // scroll-event
    .text.move-up {
      transition: 0.8s ease-out;
      transform: translateY(-6.25rem);
    }

    .box-circle-1 {
      position: absolute;
      width: 16.875rem;
      height: 16.875rem;
      border-radius: 50%;
      border: 0.187rem solid #006737;
      transform: translate(2.5rem, 0.312rem);
    }
  }

  .content {
    font-size: 1.1rem;
    width: 32%;
    margin-top: 15rem;
    margin-left: 5rem;

    .workshop span {
      font-size: 1.875rem;
      font-weight: 600;
      color: #006737;
      border-bottom: 4px solid #b0d8bf;
    }
  }

  .box-2 {
    position: relative;
    width: 10.62rem;
    height: 10.62rem;
    border-radius: 50%;
    background: #b0d8bf;
    top: 10rem;
    transform: translateX(2rem);

    .cactus {
      position: absolute;
      transition: 0.8s ease-out;
      z-index: 2;
      img {
        width: 14.37rem;
        margin-top: 9rem;
        margin-left: 4rem;
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
        margin-left: 6.5rem;
        margin-top: 1.6rem;
        p {
          margin-top: 1.25rem;
        }
        &:hover {
          color: #006737;
          background: #fff;
        }
      }
    }
    // scroll-event
    .cactus.move-up {
      transition: 0.8s ease-out;
      transform: translateY(-6.25rem);
    }
  }

  .box-circle-2 {
    position: absolute;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 0.187rem solid #006737;
    transform: translate(8.5rem, -3rem);
  }
}

.workshop-pic {
  margin: 3rem auto;
  display: flex;
  justify-content: center;

  .pic-area {
    display: flex;
    justify-content: center;

    img {
      width: 23%;
      margin: 0.5rem;
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

//product-pics
.pic-1,
.pic-4,
.pic-7 {
  width: 27.125rem;
  margin: 0 1.125rem 1.125rem 0;
  img {
    object-fit: cover;
  }
}

.pic-2,
.pic-5,
.pic-8 {
  width: 19.625rem;
  height: 100%;
  margin-bottom: 1.125rem;
}

.pic-3,
.pic-6,
.pic-9 {
  width: 20.25rem;
  margin: 0 0 1.125rem 1.125rem;
}

.pic-margin {
  margin-top: 1.125rem;
}
</style>
