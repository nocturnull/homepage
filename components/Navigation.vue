<template>
  <nav class="navigation">
    <ul class="navigation-items">
      <li class="navigation-item"><NuxtLink :to="localePath('/')">Home</NuxtLink></li>
      <li class="navigation-item">
        <a href="#">Work</a>
        <ul class="navigation-sub">
          <li class="navigation-item"><NuxtLink :to="localePath('/work/onda')">ONDA</NuxtLink></li>
          <li class="navigation-item"><NuxtLink :to="localePath('/work/heartware-korea')">Heartware Korea</NuxtLink></li>
          <li class="navigation-item"><NuxtLink :to="localePath('/work/cheritz')">Cheritz</NuxtLink></li>
          <li class="navigation-item"><NuxtLink :to="localePath('/work/kpop-united')">KPOP United</NuxtLink></li>
        </ul>
      </li>
      <li class="navigation-item">
        <a href="/">
          <span class="fa-solid fa-globe navigation-icon"></span>
          <span>Language</span>
        </a>
        <ul class="navigation-sub">
          <li class="navigation-item"><NuxtLink :to="switchLocalePath('en')">English</NuxtLink></li>
          <li class="navigation-item"><NuxtLink :to="switchLocalePath('ko')">한국어</NuxtLink></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useLocalePath, useSwitchLocalePath } from '#imports';
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>