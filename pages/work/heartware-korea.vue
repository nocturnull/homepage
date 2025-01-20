<template>
  <div class="work">
    <div class="work-intro">
      <h1 class="work-title">Heartware Korea</h1>
      <p class="work-description">{{ t('work.heartware-korea.description') }}</p>
      <img class="work-poster" src="/images/home/heartware-korea-logo.png" alt="Title Image" />
    </div>

    <div class="work-contents">
      <section class="container">
        <div class="work-project">
          <h2>{{ t('work.heartware-korea.project.1') }}</h2>
          <p>{{ t('work.heartware-korea.project.1.contents.1') }}</p>
          <p>{{ t('work.heartware-korea.project.1.contents.2') }}</p>
          <img class="work-projectImage" src="/images/work/heartware-korea/mgscc-dashboard.png" alt="Coach Dashboard"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>