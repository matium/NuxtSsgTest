<template>
<div class="index-page common-page-view">
  <div class="index-contents-area">
    <h1 class="index-site-title">NUXT SSG TEST</h1>
  </div>
  <div class="page-header-area">
    <page-header :is-home="true"></page-header>
  </div>
</div>
</template>

<script setup lang="ts">
import PageHeader from "../components/organisms/PageHeader.vue";
import gsap from "gsap";

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    onBeforeEnter: (el) => {
      console.log('Before enter...');
      // @ts-ignore
      el.style.opacity = '0';
      // @ts-ignore
      el.style.transform = 'translateY(50px)';
    },
    onEnter: (el, done) => {
      gsap.to(el, {
        opacity: 1.0,
        duration: 0.6,
        ease: 'none'
      });
      gsap.to(el, {
        y: 0,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          done();
        }
      });
    },
    onAfterEnter: (el) => {
      console.log('After enter...');
    },
    onBeforeLeave: (el) => {
      console.log('Before leave...');
    },
    onLeave: (el, done) => {
      gsap.to(el, {
        opacity: 0,
        duration: 0.3,
        ease: 'none',
        onComplete: () => {
          done();
        }
      });
    },
    onAfterLeave: (el) => {
      console.log('After Leave');
    }
  }
});
</script>

<style lang="scss">
.index-page {
  background-color: #626262;

  .index-contents-area {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .index-site-title {
      position: relative;
      text-align: center;
      font-size: 52px;
      font-size: 700;
      letter-spacing: 0.05em;
    }
  }
}
</style>