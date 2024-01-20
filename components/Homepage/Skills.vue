<template>
  <div class="pt-20 md:mb-16 text-center flex flex-col justify-center items-center px-4">
    <h2 class="text-6xl md:text-7xl gradient-text">Skills</h2>

    <div class="max-w-[75rem] mx-auto mt-12 md:mt-20">
      <div class="flex justify-center items-center flex-wrap gap-4">
        <button v-for="(cat, i) in categories" :key="i" @click="onCatClick(cat)">
          <span
            class="flex justify-center items-center rounded-3xl overflow-hidden uppercase text-base md:text-lg font-medium group"
            :style="{
              boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.12)',
              background: 'linear-gradient(80deg, #9c83ff 14.62%, #ff9051 85.38%)',
            }"
          >
            <span
              class="flex justify-center items-center h-full w-full rounded-3xl p-[2px] group-hover:bg-transparent group-active:bg-transparent transition-all duration-150 ease-in-out"
              :class="{
                'bg-transparent': selectedCat === cat,
                'bg-white': selectedCat !== cat,
              }"
            >
              <span
                class="flex justify-center items-center h-full w-full px-4 md:px-6 py-1 md:py-2 rounded-3xl group-active:bg-transparent group-active:text-white transition-all duration-150 ease-in-out"
                :class="{
                  'bg-transparent text-white': selectedCat === cat,
                  'bg-white ': selectedCat !== cat,
                }"
                >{{ cat }}</span
              >
            </span>
          </span>
        </button>
      </div>

      <TransitionGroup name="skills" tag="div" class="flex flex-wrap justify-center items-start gap-10 md:gap-6 mt-16">
        <span
          v-for="(skill, i) in filteredSkills"
          :key="i"
          class="flex flex-col justify-center items-center space-y-4 w-20 md:w-28"
        >
          <span
            class="flex justify-center items-center h-20 w-20 md:h-28 md:w-28 rounded-lg relative"
            :style="{
              backgroundColor: skill.bgColor,
            }"
          >
            <font-awesome-icon v-if="skill.icon" :icon="skill.icon" class="text-4xl md:text-6xl text-white" />
            <SvgCollection v-else :name="(skill.svg as string)"></SvgCollection>

            <!-- Overlay -->
            <span
              v-if="skill.skillLevel === 'Basic'"
              class="absolute inset-0 flex bg-opacity-40 justify-center items-center rounded-lg bg-black"
            >
              <span class="text-white uppercase transform -rotate-45">Basics only</span>
            </span>
          </span>

          <span
            class="text-xl font-medium"
            :style="{
              color: skill.bgColor,
            }"
            >{{ skill.name }}</span
          >
        </span>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgCollection from '@/components/Shared/SvgCollection.vue'
import skills from '@/assets/helpers/skills'

// Add this skills to below array
// Frontend: HTML5, CSS3, React, Vue.js, Svelte, Astro, Alpine.js
// Mobile: React Native
// Full Stack: Next.js, Nuxt.js, SveteKit
// Backend: NestJS, Node.js, Express.js, Laravel, Dotnet,
// Database: MongoDB, MySQL, SQLite
// Cloud: Firebase, AWS Amplify,
// Version Control: Git, GitHub, Bitbucket, GitLab,
// Agile: Jira, Trello, Pivotal Tracker, Azure DevOps,
// Design: Figma
// Language: JavaScript, TypeScript, PHP, C#, Python, Rust
// Desktop: Electron
// CSS Framework: Tailwind CSS, Bootstrap, Material UI, Sass,
// Build Tools: Webpack, Babel
// Package Manager: NPM, Yarn, Pip, Composer,
// DevOps: Docker, Kubernetes, AWS, Azure, Google Cloud, Heroku, Netlify, Vercel, DigitalOcean, Linux, Windows, Raspberry Pi,
// Testing: Jest, React Testing Library, Cypress, Vitest
// Database ORM: Mongoose, TypeORM, Sequelize, Eloquent
// Communications: Slack, Skype, Discord, Google Meet, Zoom, WhatsApp, Signal, MS Teams
// Other: Chrome Extension Development

const categories = [
  'Frontend',
  'Mobile',
  'Full Stack',
  'Backend',
  'Database',
  'Cloud',
  'Version Control',
  'Agile',
  'Design',
  'Language',
  'Desktop',
  'CSS Framework',
  'Build Tools',
  'Package Manager',
  'DevOps',
  'Testing',
  'Database ORM',
  'Communications',
  'Other',
]

const selectedCat = ref('Frontend')

const filteredSkills = ref(skills.filter((skill) => skill.category === selectedCat.value))

const onCatClick = (cat: string) => {
  selectedCat.value = cat
  filteredSkills.value = skills.filter((skill) => skill.category === cat)
}
</script>

<style scoped>
.skills-move,
.skills-enter-active {
  transition: all 0.5s ease-in-out;
}

.skills-leave-active {
  transition: all 0.5s ease-in-out;
  position: absolute;
}

.skills-enter-from,
.skills-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.skills-enter-to,
.skills-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
