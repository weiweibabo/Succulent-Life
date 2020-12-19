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
      <!-- blog -->
      <div class="title">
        <span>BLOG</span>
      </div>
      <div class="blog-area"></div>
    </div>
    <!-- :用 props方法傳遞 value -->
    <modal v-model="showProductBool" :rowData="rowData" />
  </div>
</template>

<script>
import Modal from '@/components/Modal';
export default {
  components: {
    Modal,
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
  methods: {
    openProduct(item) {
      const vm = this;

      // 把 item 的 data 賦值給 rowData
      vm.rowData = item.data;
      // 如果 true就打開 modal, false就關閉
      vm.showProductBool = true;
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
