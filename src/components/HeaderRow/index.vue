<template>
  <div class="header">
    <div class="header-box">
      <div class="header-content">
        <div class="header-logo">
          <router-link to="/">
            <img :src="require('@/assets/img/header/logo-white.png')" />
          </router-link>
        </div>
        <div class="header-link">
          <router-link to="/proudct"><div class="pages">PRODUCT</div></router-link>
          <router-link to="/workshop"><div class="pages">WORKSHOP</div></router-link>
          <router-link to="/about"><div class="pages">ABOUT</div></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  // nav-bar
  .header-box {
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 30;
    background: #006737;

    .header-content {
      height: 100%;
      margin: 0 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      // logo
      .header-logo {
        margin-left: 1rem;
        img {
          height: 3.5rem;
          width: 3.5rem;
        }
      }

      // nav-link
      .header-link {
        display: flex;

        .pages {
          margin: 1.25rem;
          color: #fff;
          font-weight: 600;
          border-bottom: 2px solid transparent;
          &:hover {
            border-bottom: 2px solid #b0d8bf;
          }
        }
      }
    }
  }
}
</style>
