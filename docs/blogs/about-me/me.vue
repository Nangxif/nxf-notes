<template>
  <div class="container">
    <div class="container-left">
      <div class="avatar-box">
        <div class="avatar">
          <Image :src="'/about-me/me.jpg'" />
        </div>
      </div>
    </div>
    <div class="container-right">
      <h1>Nangxif</h1>
      <hr />
      <h3>一名前端开发工程师，目前在广州工作。</h3>
      <ul>
        <li v-for="(link, index) of links" :key="link.text">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    text: 'github',
    href: 'https://github.com/Nangxif',
  },
  {
    text: '掘金',
    href: 'https://juejin.cn/user/1821245353761704/posts',
  },
  {
    text: 'CSDN',
    href: 'https://blog.csdn.net/qq_34551390?spm=1000.2115.3001.5343',
  },
];
</script>

<style lang="scss" scoped>
@function vw($x, $vpw: 750) {
  @return ($x / $vpw * 100) * 1vw;
}
.container {
  display: flex;
  .container-left {
    .avatar-box {
      position: relative;
      width: 250px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 60px solid #42d392;
        border-radius: 50%;
        animation: antStatusProcessing 1.5s ease-in-out infinite;
        content: '';
        @keyframes antStatusProcessing {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          to {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      }
      .avatar {
        position: relative;
        width: 180px;
        height: 180px;
        overflow: hidden;
        border-radius: 50%;
        img {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -30px;
          z-index: 1;
        }
      }
    }
  }
  .container-right {
    flex: 1;
    margin-left: 50px;
  }
}
@media (max-width: 767px) {
  .container {
    display: block;
    .container-left {
      display: flex;
      justify-content: center;
      .avatar-box {
        width: vw(250);
        height: vw(250);
        &::after {
          border: vw(60) solid #42d392;
        }
        .avatar {
          width: vw(180);
          height: vw(180);
          img {
            bottom: vw(-30);
          }
        }
      }
    }
    .container-right {
      flex: unset;
      margin-left: 0px;
      margin-top: vw(50);
    }
  }
}
</style>
