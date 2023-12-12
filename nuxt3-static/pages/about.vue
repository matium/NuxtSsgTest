<template>
  <div class="about-page common-page-view">
    <div class="contents-area">
      <h1 class="page-contents-title">About</h1>
      <section class="contents-body-sec">
        <h2 class="sec-title">The power of Vue Components</h2>
        <div class="sec-contents">
          <p>We love Vue Single-File Components as much as you do. Simple, intuitive and powerful, Nuxt lets you write Vue components in a way that makes sense. Every repetitive task is automated, so you can focus on writing your full-stack Vue application with confidence.</p>
        </div>
      </section>
      <section class="contents-body-sec">
        <h2 class="sec-title">Static or Dynamic, the choice is yours</h2>
        <div class="sec-contents">
          <p>Decide what rendering strategy you need at the route level. By leveraging the hybrid rendering, you can get the best of both worlds: the performance of a static site and the interactivity of a dynamic one.</p>
        </div>
      </section>
    </div>
    <div class="page-header-area">
      <page-header></page-header>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../components/organisms/PageHeader.vue';
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
.about-page {
  background-color: #526A71;
}
</style>