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

const skills = [
  {
    category: 'Frontend',
    name: 'HTML',
    icon: 'fa-brands fa-html5',
    bgColor: '#E54F26',
  },
  {
    category: 'Frontend',
    name: 'CSS',
    icon: 'fa-brands fa-css3-alt',
    bgColor: '#2965F1',
  },
  {
    category: 'Frontend',
    name: 'JavaScript',
    icon: 'fa-brands fa-js-square',
    bgColor: '#F0DB4F',
  },
  {
    category: 'Frontend',
    name: 'TypeScript',
    icon: '',
    svg: 'typescript',
    bgColor: '#3178C6',
  },
  {
    category: 'Frontend',
    name: 'React',
    icon: 'fa-brands fa-react',
    bgColor: '#61DAFB',
  },
  {
    category: 'Frontend',
    name: 'Vue.js',
    icon: 'fa-brands fa-vuejs',
    bgColor: '#4FC08D',
  },
  {
    category: 'Frontend',
    name: 'Svelte',
    icon: '',
    svg: 'svelte',
    bgColor: '#FF3E00',
  },
  {
    category: 'Frontend',
    name: 'Astro',
    icon: '',
    svg: 'astro',
    bgColor: '#FF5D01',
  },
  {
    category: 'Frontend',
    name: 'Alpine.js',
    icon: '',
    svg: 'alpine',
    bgColor: '#777777',
  },
  {
    category: 'Mobile',
    name: 'React Native',
    icon: 'fa-brands fa-react',
    bgColor: '#61DAFB',
  },
  {
    category: 'Full Stack',
    name: 'Next.js',
    icon: '',
    svg: 'next',
    bgColor: '#000000',
  },
  {
    category: 'Full Stack',
    name: 'Nuxt.js',
    icon: '',
    svg: 'nuxt',
    bgColor: '#00DC82',
  },
  {
    category: 'Full Stack',
    name: 'SvelteKit',
    icon: '',
    svg: 'svelte',
    bgColor: '#FF3E00',
  },
  {
    category: 'Backend',
    name: 'NestJS',
    icon: '',
    svg: 'nest',
    bgColor: '#000000',
  },
  {
    category: 'Backend',
    name: 'Node.js',
    icon: '',
    svg: 'node',
    bgColor: '#339933',
  },
  {
    category: 'Backend',
    name: 'Express.js',
    icon: '',
    svg: 'express',
    bgColor: '#000000',
  },
  {
    category: 'Backend',
    name: 'Laravel',
    icon: 'fa-brands fa-laravel',
    bgColor: '#FF2D20',
  },
  {
    category: 'Backend',
    name: 'Dotnet',
    icon: '',
    svg: 'dotnet',
    bgColor: '#5027d5',
    skillLevel: 'Basic',
  },
  {
    category: 'Database',
    name: 'MongoDB',
    icon: '',
    svg: 'mongodb',
    bgColor: '#47A248',
  },
  {
    category: 'Database',
    name: 'MySQL',
    icon: '',
    svg: 'mysql',
    bgColor: '#4479A1',
  },
  {
    category: 'Database',
    name: 'SQLite',
    icon: '',
    svg: 'sqlite',
    bgColor: '#003B57',
  },
  {
    category: 'Cloud',
    name: 'Firebase',
    icon: '',
    svg: 'firebase',
    bgColor: '#1B3A57',
  },
  {
    category: 'Cloud',
    name: 'AWS Amplify',
    icon: '',
    svg: 'amplify',
    bgColor: '#BD0816',
  },
  {
    category: 'Version Control',
    name: 'Git',
    icon: 'fa-brands fa-git-alt',
    bgColor: '#F05032',
  },
  {
    category: 'Version Control',
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    bgColor: '#181717',
  },
  {
    category: 'Version Control',
    name: 'Bitbucket',
    icon: 'fa-brands fa-bitbucket',
    bgColor: '#0052CC',
  },
  {
    category: 'Version Control',
    name: 'GitLab',
    icon: 'fa-brands fa-gitlab',
    bgColor: '#FCA121',
  },
  {
    category: 'Agile',
    name: 'Jira',
    icon: 'fa-brands fa-jira',
    bgColor: '#0052CC',
  },
  {
    category: 'Agile',
    name: 'Trello',
    icon: 'fa-brands fa-trello',
    bgColor: '#0079BF',
  },
  {
    category: 'Agile',
    name: 'Pivotal Tracker',
    icon: '',
    svg: 'pivotal',
    bgColor: '#5282B0',
  },
  {
    category: 'Agile',
    name: 'Azure DevOps',
    icon: '',
    svg: 'azuredev',
    bgColor: '#1380DA',
  },
  {
    category: 'Design',
    name: 'Figma',
    icon: 'fa-brands fa-figma',
    bgColor: '#F24E1E',
  },
  {
    category: 'Language',
    name: 'JavaScript',
    icon: 'fa-brands fa-js-square',
    bgColor: '#F0DB4F',
  },
  {
    category: 'Language',
    name: 'TypeScript',
    icon: '',
    svg: 'typescript',
    bgColor: '#3178C6',
  },
  {
    category: 'Language',
    name: 'PHP',
    icon: 'fa-brands fa-php',
    bgColor: '#777BB4',
  },
  {
    category: 'Language',
    name: 'C#',
    icon: '',
    svg: 'csharp',
    bgColor: '#5A329A',
    skillLevel: 'Basic',
  },
  {
    category: 'Language',
    name: 'Python',
    icon: 'fa-brands fa-python',
    bgColor: '#3776AB',
    skillLevel: 'Basic',
  },
  {
    category: 'Language',
    name: 'Rust',
    icon: 'fa-brands fa-rust',
    bgColor: '#000000',
    skillLevel: 'Basic',
  },
  {
    category: 'Desktop',
    name: 'Electron',
    icon: '',
    svg: 'electron',
    bgColor: '#000000',
  },
  {
    category: 'CSS Framework',
    name: 'Tailwind CSS',
    icon: '',
    svg: 'tailwind',
    bgColor: '#000000',
  },
  {
    category: 'CSS Framework',
    name: 'Bootstrap',
    icon: 'fa-brands fa-bootstrap',
    bgColor: '#7952B3',
  },
  {
    category: 'CSS Framework',
    name: 'Material UI',
    icon: '',
    svg: 'material-ui',
    bgColor: '#000000',
  },
  {
    category: 'CSS Framework',
    name: 'Sass',
    icon: 'fa-brands fa-sass',
    bgColor: '#CC6699',
  },
  {
    category: 'Build Tools',
    name: 'Webpack',
    icon: '',
    svg: 'webpack',
    bgColor: '#000000',
  },
  {
    category: 'Build Tools',
    name: 'Babel',
    icon: '',
    svg: 'babel',
    bgColor: '#000000',
  },
  {
    category: 'Package Manager',
    name: 'NPM',
    icon: 'fa-brands fa-npm',
    bgColor: '#CB3837',
  },
  {
    category: 'Package Manager',
    name: 'Yarn',
    icon: '',
    svg: 'yarn',
    bgColor: '#2C8EBB',
  },
  {
    category: 'Package Manager',
    name: 'Pip',
    icon: 'fa-brands fa-python',
    bgColor: '#3776AB',
  },
  {
    category: 'Package Manager',
    name: 'Composer',
    icon: '',
    svg: 'composer',
    bgColor: '#C09553',
  },
  {
    category: 'DevOps',
    name: 'Docker',
    icon: 'fa-brands fa-docker',
    bgColor: '#2496ED',
  },
  {
    category: 'DevOps',
    name: 'Kubernetes',
    icon: '',
    svg: 'k8s',
    bgColor: '#326CE5',
  },
  {
    category: 'DevOps',
    name: 'AWS',
    icon: 'fa-brands fa-aws',
    bgColor: '#FF9900',
  },
  {
    category: 'DevOps',
    name: 'Azure',
    icon: '',
    svg: 'azure',
    bgColor: '#000000',
  },
  {
    category: 'DevOps',
    name: 'Google Cloud',
    icon: 'fa-brands fa-google',
    bgColor: '#4285F4',
  },
  {
    category: 'DevOps',
    name: 'Heroku',
    icon: '',
    svg: 'heroku',
    bgColor: '#000000',
  },
  {
    category: 'DevOps',
    name: 'Netlify',
    icon: '',
    svg: 'netlify',
    bgColor: '#42A4BD',
  },
  {
    category: 'DevOps',
    name: 'Vercel',
    icon: '',
    svg: 'vercel',
    bgColor: '#000000',
  },
  {
    category: 'DevOps',
    name: 'DigitalOcean',
    icon: 'fa-brands fa-digital-ocean',
    bgColor: '#0080FF',
  },
  {
    category: 'DevOps',
    name: 'Linux',
    icon: 'fa-brands fa-linux',
    bgColor: '#FCC624',
  },
  {
    category: 'DevOps',
    name: 'Windows',
    icon: 'fa-brands fa-windows',
    bgColor: '#0078D6',
  },
  {
    category: 'DevOps',
    name: 'Raspberry Pi',
    icon: 'fa-brands fa-raspberry-pi',
    bgColor: '#C51A4A',
  },
  {
    category: 'Testing',
    name: 'React Testing Library',
    icon: 'fa-brands fa-react',
    bgColor: '#61DAFB',
  },
  {
    category: 'Testing',
    name: 'Cypress',
    icon: '',
    svg: 'cypress',
    bgColor: '#000000',
  },
  {
    category: 'Testing',
    name: 'Vitest',
    icon: '',
    svg: 'vitest',
    bgColor: '#000000',
  },
  {
    category: 'Database ORM',
    name: 'Mongoose',
    icon: '',
    svg: 'mongoose',
    bgColor: '#850000',
  },
  {
    category: 'Database ORM',
    name: 'TypeORM',
    icon: '',
    svg: 'typeorm',
    bgColor: '#000000',
  },
  {
    category: 'Database ORM',
    name: 'Sequelize',
    icon: '',
    svg: 'sequelize',
    bgColor: '#000000',
  },
  {
    category: 'Database ORM',
    name: 'Eloquent',
    icon: 'fa-brands fa-laravel',
    bgColor: '#FF2D20',
  },
  {
    category: 'Communications',
    name: 'Slack',
    icon: 'fa-brands fa-slack',
    bgColor: '#4A154B',
  },
  {
    category: 'Communications',
    name: 'Skype',
    icon: 'fa-brands fa-skype',
    bgColor: '#00AFF0',
  },
  {
    category: 'Communications',
    name: 'Discord',
    icon: 'fa-brands fa-discord',
    bgColor: '#7289DA',
  },
  {
    category: 'Communications',
    name: 'Google Meet',
    icon: 'fa-brands fa-google',
    bgColor: '#4285F4',
  },
  {
    category: 'Communications',
    name: 'Zoom',
    icon: '',
    svg: 'zoom',
    bgColor: '#0B5CFF',
  },
  {
    category: 'Communications',
    name: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp',
    bgColor: '#25D366',
  },
  {
    category: 'Communications',
    name: 'Signal',
    icon: '',
    svg: 'signal',
    bgColor: '#3A76F0',
  },
  {
    category: 'Communications',
    name: 'MS Teams',
    icon: 'fa-brands fa-microsoft',
    bgColor: '#0078D7',
  },
  {
    category: 'Other',
    name: 'Chrome Extension Development',
    icon: 'fa-brands fa-chrome',
    bgColor: '#4285F4',
  },
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
