<template>
<div class="works-page common-page-view">
  <div class="contents-area">
    <h1 class="page-contents-title">Works</h1>
    <section class="contents-body-sec">
      <h2 class="sec-title">Ship faster with endless integrations</h2>
      <div class="sec-contents">
        <p>Integrate with your favorite tools and services. Nuxt is built to be flexible and can be extended with a robust modules ecosystem. Connect your application with popular headless CMS, eCommerce, Database or UI/UX libraries with a single line of code.</p>
      </div>
    </section>
    <section class="contents-body-sec">
      <h2 class="sec-title">Built by developers around the world.</h2>
      <div class="sec-contents">
        <p>The development of Nuxt and its ecosystem is led by an international team. From contributors to developer advocates, the community is made up of members with different horizons and skills. We are happy to see new members every day and encourage anyone to join us and help in many ways: answering questions, giving a talk, creating modules and contributing to the core.</p>
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
  background-color: #545569;
}
</style>