<template>
  <div class="home">
    <section class="home-intro">
      <div class="home-introTitle">
        <h1>{{ t('home.intro.title') }}</h1>
        <p>{{ t('home.intro.description') }}</p>
      </div>
      <div class="home-introProfile">
        <img src="https://placehold.co/250" width="250" alt="Profile Pic" />
      </div>
    </section>

    <section class="home-work">
      <div class="container">
        <h2 class="home-title">Work</h2>

        <div>
          <div class="home-workEntry">
            <img class="home-workEntryImage" src="https://placehold.co/250" width="250" alt="Work Entry" />
            <div class="home-workEntryDescription">
              <h3>ONDA</h3>
              <p>{{ t('home.work.onda.description') }}</p>
            </div>
          </div>

          <div class="home-workEntry">
            <div class="home-workEntryDescription">
              <h3>Heartware Korea</h3>
              <p>{{ t('home.work.heartware-korea.description') }}</p>
            </div>
            <img class="home-workEntryImage" src="https://placehold.co/250" width="250" alt="Work Entry" />
          </div>

          <div class="home-workEntry">
            <img class="home-workEntryImage" src="https://placehold.co/250" width="250" alt="Work Entry" />
            <div class="home-workEntryDescription">
              <h3>Cheritz</h3>
              <p>{{ t('home.work.cheritz.description') }}</p>
            </div>
          </div>

          <div class="home-workEntry">
            <div class="home-workEntryDescription">
              <h3>KPOP United</h3>
              <p>{{ t('home.work.kpop-united.description') }}</p>
            </div>
            <img class="home-workEntryImage" src="https://placehold.co/250" width="250" alt="Work Entry" />
          </div>
        </div>
      </div>
    </section>

    <section class="home-skills">
      <div class="container">
        <h2 class="home-title">Skills</h2>

        <div class="home-skillEntries">
          <div class="home-skillEntry">
            <div class="home-skillEntryTitle">
              <span class="fa-solid fa-code icon-cover"></span>
              <h3>Software Development</h3>
            </div>
            <div>{{ t('home.skills.software-development') }}</div>
          </div>
          <div class="home-skillEntry">
            <div class="home-skillEntryTitle">
              <span class="fa-brands fa-html5 icon-cover icon-cover-small"></span>
              <h3>Web Development</h3>
            </div>
            <div>{{ t('home.skills.web-development') }}</div>
          </div>
          <div class="home-skillEntry">
            <div class="home-skillEntryTitle">
              <span class="fa-solid fa-cloud icon-cover"></span>
              <h3>Server Infrastructure</h3>
            </div>
            <div>{{ t('home.skills.server-infrastructure') }}</div>
          </div>
          <div class="home-skillEntry">
            <div class="home-skillEntryTitle">
              <span class="fa-solid fa-person icon-cover icon-cover-small"></span>
              <h3>Team Leading</h3>
            </div>
            <div>{{ t('home.skills.team-leading') }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
</script>