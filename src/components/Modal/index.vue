<template>
  <b-modal v-model="show" id="modal-center" centered title="Product Introduction">
    <!-- 這邊的 v-if為除錯用 都有值的時候才會渲染畫面 -->
    <div class="img" v-if="rowData && rowData.num">
      <img :src="require(`@/assets/img/home/product-${rowData.num}.jpg`)" />
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    rowData: {
      type: Object,

      // 告訴程式它的型別是object
      default: () => {},
    },
  },
  data() {
    return {
      show: false,
    };
  },

  // 監聽 show的 value是否有改變 true <--> false
  // 如果改變了 就重新渲染畫面 (重新跑一次生命週期)
  watch: {
    value: {
      handler(val) {
        const vm = this;

        vm.show = val;
      },
    },
    show(val) {
      const vm = this;

      // $emit =>子層將得到的值回傳給父層
      // 'input' => oninput事件
      // 點擊關閉時會回傳 false給show 執行關閉 modal的動作
      vm.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 20rem;

  img {
    width: 100%;
  }
}
</style>
