<template>
  <div class="work">
    <div class="work-intro">
      <h1 class="work-title">ONDA</h1>
      <p class="work-description">{{ t('work.onda.description') }}</p>
      <img class="work-poster" src="https://placehold.co/600x400" width="600" alt="Title Image" />
    </div>

    <div class="work-contents">
      <section class="container">
        <h2>Project A</h2>
        <p>{{ t('work.onda.contents1') }}</p>
        <p>{{ t('work.onda.contents2') }}</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>