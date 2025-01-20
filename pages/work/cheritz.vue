<template>
  <div class="work">
    <div class="work-intro">
      <h1 class="work-title">Cheritz</h1>
      <p class="work-description">{{ t('work.cheritz.description') }}</p>
      <img class="work-poster" src="/images/home/cheritz-logo.jpg" alt="Title Image" />
    </div>

    <div class="work-contents">
      <section class="container">
        <h2>{{ t('work.cheritz.project.1') }}</h2>
        <p>{{ t('work.cheritz.project.1.contents.1') }}</p>
        <img class="work-projectImage" src="/images/work/cheritz/the-ssum.jpg" alt="The Ssum"/>
      </section>
      <section class="container">
        <h2>{{ t('work.cheritz.project.2') }}</h2>
        <p>{{ t('work.cheritz.project.2.contents.1') }}</p>
        <p>{{ t('work.cheritz.project.2.contents.2') }}</p>
        <img class="work-projectImage" src="/images/work/cheritz/mystic-messenger.png" alt="Mystic Messenger"/>
      </section>
      <section class="container">
        <h2>{{ t('work.cheritz.project.3') }}</h2>
        <p>{{ t('work.cheritz.project.3.contents.1') }}</p>
        <p>
          <a href="https://ssum.cheritz.com/kr" target="_blank">The Ssum Homepage</a>
        </p>
        <p>
          <a href="http://cheritz.com" target="_blank">Cheritz Homepage</a>
        </p>
        <p>
          <a href="http://msg.cheritz.com" target="_blank">Mystic Messenger Homepage</a>
        </p>
        <img class="work-projectImage" src="/images/work/cheritz/the-ssum-website.png" alt="The Ssum Website"/>
        <img class="work-projectImage" src="/images/work/cheritz/cheritz-company-site.png" alt="Cheritz Company Website"/>
        <img class="work-projectImage" src="/images/work/cheritz/mystic-messenger-website.png" alt="Mystic Messenger Website"/>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>