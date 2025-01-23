<template>
  <div class="home">
    <section class="home-intro">
      <div class="home-introTitle">
        <h1>{{ t('home.intro.title') }}</h1>
        <p>{{ t('home.intro.description') }}</p>
      </div>
      <img class="home-introProfile" src="/images/home/profile-pic.png" alt="Profile Pic" />
    </section>

    <section class="home-work">
      <div class="container">
        <h2 class="home-workTitle">Work</h2>

        <div>
          <div class="home-workEntry-alpha">
            <NuxtLink class="home-workEntryImage" :to="localePath('/work/onda')">
              <img src="/images/home/onda-logo.jpeg" alt="Work Entry" />
            </NuxtLink>
            <div class="home-workEntryDescription">
              <h3>ONDA</h3>
              <p>{{ t('home.work.onda.description') }}</p>
              <p class="home-workEntryRole">{{ t('home.work.onda.role') }}</p>
            </div>
          </div>

          <div class="home-workEntry-beta">
            <div class="home-workEntryDescription">
              <h3>Heartware Korea</h3>
              <p>{{ t('home.work.heartware-korea.description') }}</p>
              <p class="home-workEntryRole">{{ t('home.work.heartware-korea.role') }}</p>
            </div>
            <NuxtLink class="home-workEntryImage" :to="localePath('/work/heartware-korea')">
              <img src="/images/home/heartware-korea-logo.png" alt="Work Entry" />
            </NuxtLink>
          </div>

          <div class="home-workEntry-alpha">
            <NuxtLink class="home-workEntryImage" :to="localePath('/work/cheritz')">
              <img src="/images/home/cheritz-logo.jpg" alt="Work Entry" />
            </NuxtLink>
            <div class="home-workEntryDescription">
              <h3>Cheritz</h3>
              <p>{{ t('home.work.cheritz.description') }}</p>
              <p class="home-workEntryRole">{{ t('home.work.cheritz.role') }}</p>
            </div>
          </div>

          <div class="home-workEntry-beta">
            <div class="home-workEntryDescription">
              <h3>KPOP United</h3>
              <p>{{ t('home.work.kpop-united.description') }}</p>
              <p class="home-workEntryRole">{{ t('home.work.kpop-united.role') }}</p>
            </div>
            <NuxtLink class="home-workEntryImage" :to="localePath('/work/kpop-united')">
              <img src="/images/home/kpop-united-logo.jpg" alt="Work Entry" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="home-skills">
      <div class="container">
        <h2 class="home-workTitle">Skills</h2>

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
import { useLocalePath } from '#imports';
const localePath = useLocalePath();
</script>