<template>
  <div class="header">
    <div class="header-box">
      <div class="header-content">
        <div class="header-logo">
          <img :src="require('@/assets/img/header/logo-green.png')" />
        </div>
        <div class="header-link">
          <router-link to="/proudct"><div class="pages">PRODUCT</div></router-link>
          <router-link to="/blog"><div class="pages">BLOG</div></router-link>
          <router-link to="/workshop"><div class="pages">WORKSHOP</div></router-link>
          <router-link to="/event"><div class="pages">EVENT</div></router-link>
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
// nav-bar
.header-box {
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 30;
  background: rgba(255, 254, 177, 0.986);
}
.header-content {
  height: 100%;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// logo
.header-logo {
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
    color: #006737;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid #b0d8bf;
    }
  }
}
</style>
