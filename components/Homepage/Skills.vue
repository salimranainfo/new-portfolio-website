<template>
  <div class="pt-16 mb-16 text-center flex flex-col justify-center items-center">
    <h2 class="text-7xl gradient-text">Skills</h2>

    <div class="flex flex-wrap justify-center items-start max-w-[75rem] mx-auto gap-6 mt-10">
      <span v-for="(skill, i) in skills" :key="i" class="flex flex-col justify-center items-center space-y-4 w-28">
        <span
          class="flex justify-center items-center h-28 w-28 rounded-lg"
          :style="{
            backgroundColor: skill.bgColor,
          }"
        >
          <font-awesome-icon :icon="skill.icon" class="text-6xl text-white" />
        </span>

        <span
          class="text-xl font-medium"
          :style="{
            color: skill.bgColor,
          }"
          >{{ skill.name }}</span
        >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    icon: 'fa-brands fa-js-square',
    bgColor: '#007ACC',
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
    icon: 'fa-brands fa-svelte',
    bgColor: '#FF3E00',
  },
  {
    category: 'Frontend',
    name: 'Astro',
    icon: 'fa-brands fa-astro',
    bgColor: '#FF0080',
  },
  {
    category: 'Frontend',
    name: 'Alpine.js',
    icon: 'fa-brands fa-alipay',
    bgColor: '#8BC0D0',
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
    icon: 'fa-brands fa-react',
    bgColor: '#61DAFB',
  },
  {
    category: 'Full Stack',
    name: 'Nuxt.js',
    icon: 'fa-brands fa-vuejs',
    bgColor: '#4FC08D',
  },
  {
    category: 'Full Stack',
    name: 'SvelteKit',
    icon: 'fa-brands fa-svelte',
    bgColor: '#FF3E00',
  },
  {
    category: 'Backend',
    name: 'NestJS',
    icon: 'fa-brands fa-node-js',
    bgColor: '#E0234E',
  },
  {
    category: 'Backend',
    name: 'Node.js',
    icon: 'fa-brands fa-node-js',
    bgColor: '#339933',
  },
  {
    category: 'Backend',
    name: 'Express.js',
    icon: 'fa-brands fa-node-js',
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
    icon: 'fa-brands fa-microsoft',
    bgColor: '#5C2D91',
  },
  {
    category: 'Database',
    name: 'MongoDB',
    icon: 'fa-brands fa-mongodb',
    bgColor: '#47A248',
  },
  {
    category: 'Database',
    name: 'MySQL',
    icon: 'fa-brands fa-mysql',
    bgColor: '#4479A1',
  },
  {
    category: 'Database',
    name: 'SQLite',
    icon: 'fa-brands fa-database',
    bgColor: '#003B57',
  },
  {
    category: 'Cloud',
    name: 'Firebase',
    icon: 'fa-brands fa-google',
    bgColor: '#FFCA28',
  },
  {
    category: 'Cloud',
    name: 'AWS Amplify',
    icon: 'fa-brands fa-aws',
    bgColor: '#FF9900',
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
    icon: 'fa-brands fa-pivotal-tracker',
    bgColor: '#517A9E',
  },
  {
    category: 'Agile',
    name: 'Azure DevOps',
    icon: 'fa-brands fa-microsoft',
    bgColor: '#0078D7',
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
    icon: 'fa-brands fa-js-square',
    bgColor: '#007ACC',
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
    icon: 'fa-brands fa-microsoft',
    bgColor: '#5C2D91',
  },
  {
    category: 'Language',
    name: 'Python',
    icon: 'fa-brands fa-python',
    bgColor: '#3776AB',
  },
  {
    category: 'Language',
    name: 'Rust',
    icon: 'fa-brands fa-rust',
    bgColor: '#000000',
  },
  {
    category: 'Desktop',
    name: 'Electron',
    icon: 'fa-brands fa-electron',
    bgColor: '#47848F',
  },
  {
    category: 'CSS Framework',
    name: 'Tailwind CSS',
    icon: 'fa-brands fa-tailwind',
    bgColor: '#38B2AC',
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
    icon: 'fa-brands fa-react',
    bgColor: '#61DAFB',
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
    icon: 'fa-brands fa-webpack',
    bgColor: '#8DD6F9',
  },
  {
    category: 'Build Tools',
    name: 'Babel',
    icon: 'fa-brands fa-babel',
    bgColor: '#F9DC3E',
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
    icon: 'fa-brands fa-yarn',
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
    icon: 'fa-brands fa-php',
    bgColor: '#777BB4',
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
    icon: 'fa-brands fa-kubernetes',
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
    icon: 'fa-brands fa-microsoft',
    bgColor: '#0078D7',
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
    icon: 'fa-brands fa-heroku',
    bgColor: '#430098',
  },
  {
    category: 'DevOps',
    name: 'Netlify',
    icon: 'fa-brands fa-netlify',
    bgColor: '#00C7B7',
  },
  {
    category: 'DevOps',
    name: 'Vercel',
    icon: 'fa-brands fa-vercel',
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
    icon: 'fa-brands fa-cypress',
    bgColor: '#17202C',
  },
  {
    category: 'Testing',
    name: 'Vitest',
    icon: 'fa-brands fa-vuejs',
    bgColor: '#4FC08D',
  },
]
</script>

<style scoped></style>
