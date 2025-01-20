<template>
  <div class="work">
    <div class="work-intro">
      <h1 class="work-title">ONDA</h1>
      <p class="work-description">{{ t('work.onda.description') }}</p>
      <img class="work-poster" src="/images/home/onda-logo.jpeg" alt="Title Image" />
    </div>

    <div class="work-contents">
      <section class="container">
        <div class="work-project">
          <h2>{{ t('work.onda.project.1') }}</h2>
          <p>{{ t('work.onda.project.1.contents.1') }}</p>
          <img src="/images/work/onda/onda-admin.png" alt="ONDA Back Office"/>
        </div>
        <div class="work-project">
          <h2>{{ t('work.onda.project.2') }}</h2>
          <p>{{ t('work.onda.project.2.contents.1') }}</p>
          <img src="/images/work/onda/notification-api.png" alt="Notification API" />
        </div>
        <div class="work-project">
          <h2>{{ t('work.onda.project.3') }}</h2>
          <p>{{ t('work.onda.project.3.contents.1') }}</p>
          <img src="/images/work/onda/booking-engine.png" alt="Booking Engine" />
        </div>
        <div class="work-project">
          <h2>{{ t('work.onda.project.4') }}</h2>
          <p>{{ t('work.onda.project.4.contents.1') }}</p>
          <img src="/images/work/onda/wave-cms.jpeg" alt="Wave CMS" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>