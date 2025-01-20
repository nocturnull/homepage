<template>
  <div class="work">
    <div class="work-intro">
      <h1 class="work-title">KPOP United</h1>
      <p class="work-description">{{ t('work.kpop-united.description') }}</p>
      <img class="work-poster" src="/images/home/kpop-united-logo.jpg" alt="Title Image" />
    </div>

    <div class="work-contents">
      <section class="container">
        <h2>{{ t('work.kpop-united.project.1') }}</h2>
        <p>{{ t('work.kpop-united.project.1.contents.1') }}</p>
        <p>{{ t('work.kpop-united.project.1.contents.2') }}</p>
        <p>{{ t('work.kpop-united.project.1.contents.3') }}</p>
        <img class="work-projectImage" src="/images/work/kpop-united/krowdpop.png" alt="Krowdpop"/>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>