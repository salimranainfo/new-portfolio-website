<template>
  <div class="pt-20 mb-16 text-center flex flex-col justify-center items-center">
    <h2 class="text-7xl gradient-text">My Works</h2>

    <div class="max-w-[75rem] mx-auto mt-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="p-6 rounded-lg bg-white relative overflow-hidden group"
          style="box-shadow: 0px 6px 30px 1px rgba(0, 0, 0, 0.25)"
        >
          <div
            :style="{
              color: colors[Math.floor(Math.random() * colors.length)],
            }"
          >
            <h3 class="text-2xl text-left">{{ project.title }}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="183"
              height="183"
              class="-mt-10 -ml-2"
              viewBox="0 0 183 183"
              fill="none"
            >
              <ellipse opacity="0.25" cx="91.0813" cy="91.0613" rx="91.0813" ry="91.0613" fill="currentColor" />
            </svg>
          </div>

          <div class="-mt-32">
            <img :src="project.image" alt="" />
          </div>

          <!-- Overlay -->
          <div
            class="absolute top-0 left-0 h-full w-full transform translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 flex flex-col justify-center items-center p-5"
            style="background: linear-gradient(80deg, rgba(156, 131, 255, 0.5) 14.62%, rgba(255, 144, 81, 0.5) 85.38%)"
          >
            <div class="flex-grow flex justify-center items-center px-6">
              <div class="flex flex-wrap justify-center items-center gap-6">
                <span
                  v-for="(skill, i) in project.skills"
                  :key="i"
                  class="flex flex-col justify-center items-center space-y-1 w-16"
                >
                  <span
                    class="flex justify-center items-center h-16 w-16 rounded-lg relative"
                    :style="{
                      backgroundColor: skill.bgColor,
                    }"
                  >
                    <font-awesome-icon :icon="skill.icon" class="text-4xl text-white" />
                  </span>
                </span>
              </div>
            </div>

            <div class="flex justify-between items-center w-full">
              <a :href="project.link" target="_blank" class="btn">Demo</a>
              <a :href="project.github" target="_blank" class="btn">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import projectOneImage from '@/assets/images/project-1.png'

const colors = ['#6C63FF', '#FF63DD', '#FEB967', '#1AE4FF']

const projects = [
  {
    title: 'Sendpay',
    description: 'Sendpay is a payment gateway that allows you to send money to anyone, anywhere, anytime.',
    image: projectOneImage,
    link: 'https://sendpay.vercel.app',
    github: '#!',
    skills: [
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
        name: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        bgColor: '#41B883',
      },
      {
        category: 'Frontend',
        name: 'Nuxt.js',
        icon: 'fa-brands fa-nuxt',
        bgColor: '#00C58E',
      },
    ],
  },
  {
    title: 'Sendpay',
    description: 'Sendpay is a payment gateway that allows you to send money to anyone, anywhere, anytime.',
    image: projectOneImage,
    link: 'https://sendpay.vercel.app',
    github: '#!',
    skills: [
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
        name: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        bgColor: '#41B883',
      },
      {
        category: 'Frontend',
        name: 'Nuxt.js',
        icon: 'fa-brands fa-nuxt',
        bgColor: '#00C58E',
      },
    ],
  },
  {
    title: 'Sendpay',
    description: 'Sendpay is a payment gateway that allows you to send money to anyone, anywhere, anytime.',
    image: projectOneImage,
    link: 'https://sendpay.vercel.app',
    github: '#!',
    skills: [
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
        name: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        bgColor: '#41B883',
      },
      {
        category: 'Frontend',
        name: 'Nuxt.js',
        icon: 'fa-brands fa-nuxt',
        bgColor: '#00C58E',
      },
    ],
  },
  {
    title: 'Sendpay',
    description: 'Sendpay is a payment gateway that allows you to send money to anyone, anywhere, anytime.',
    image: projectOneImage,
    link: 'https://sendpay.vercel.app',
    github: '#!',
    skills: [
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
        name: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        bgColor: '#41B883',
      },
      {
        category: 'Frontend',
        name: 'Nuxt.js',
        icon: 'fa-brands fa-nuxt',
        bgColor: '#00C58E',
      },
    ],
  },
  {
    title: 'Sendpay',
    description: 'Sendpay is a payment gateway that allows you to send money to anyone, anywhere, anytime.',
    image: projectOneImage,
    link: 'https://sendpay.vercel.app',
    github: '#!',
    skills: [
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
        name: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        bgColor: '#41B883',
      },
      {
        category: 'Frontend',
        name: 'Nuxt.js',
        icon: 'fa-brands fa-nuxt',
        bgColor: '#00C58E',
      },
    ],
  },
  {
    title: 'Sendpay',
    description: 'Sendpay is a payment gateway that allows you to send money to anyone, anywhere, anytime.',
    image: projectOneImage,
    link: 'https://sendpay.vercel.app',
    github: '#!',
    skills: [
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
        name: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        bgColor: '#41B883',
      },
      {
        category: 'Frontend',
        name: 'Nuxt.js',
        icon: 'fa-brands fa-nuxt',
        bgColor: '#00C58E',
      },
    ],
  },
]
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
