<template>
<div class="works-page common-page-view">
  <div class="contents-area">
    <h1 class="page-contents-title">Contact</h1>
    <section class="contents-body-sec">
      <h2 class="sec-title">Nuxt Modules</h2>
      <div class="sec-contents">
        <p>Discover our list of modules to supercharge your Nuxt project. Created by the Nuxt team and community.</p>
      </div>
    </section>
    <section class="contents-body-sec">
      <h2 class="sec-title">Automation and Conventions</h2>
      <div class="sec-contents">
        <p>Nuxt uses conventions and an opinionated directory structure to automate repetitive tasks and allow developers to focus on pushing features. The configuration file can still customize and override its default behaviors.</p>
      </div>
    </section>
  </div>
  <div class="page-header-area">
    <page-header></page-header>
  </div>
</div>
</template>

<script setup lang="ts">
import PageHeader from "~/components/organisms/PageHeader.vue";
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

<style scoped lang="scss">
.works-page {
  background-color: #707B59;
}
</style>