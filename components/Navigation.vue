<template>
  <nav class="navigation">
    <ul class="navigation-items">
      <li class="navigation-item"><a href="/">Home</a></li>
      <li class="navigation-item">
        <a href="#">Work</a>
        <ul class="navigation-sub">
          <li class="navigation-item"><NuxtLink to="/work/onda">ONDA</NuxtLink></li>
          <li class="navigation-item"><NuxtLink to="/work/heartware-korea">Heartware Korea</NuxtLink></li>
          <li class="navigation-item"><NuxtLink to="/work/cheritz">Cheritz</NuxtLink></li>
          <li class="navigation-item"><NuxtLink to="/work/kpop-united">KPOP United</NuxtLink></li>
        </ul>
      </li>
      <li class="navigation-item">
        <a href="/">Language</a>
        <ul class="navigation-sub">
          <li class="navigation-item"><a href="#">English</a></li>
          <li class="navigation-item"><a href="#">한국어</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>