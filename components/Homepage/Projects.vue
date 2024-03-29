<template>
  <div class="pt-20 md:mb-16 text-center flex flex-col justify-center items-center px-4">
    <h2 class="text-6xl md:text-7xl gradient-text">Some of Our Works</h2>

    <div class="max-w-[75rem] mx-auto mt-12 md:mt-20">
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

          <div class="-mt-32 rounded-lg overflow-hidden" style="box-shadow: 0px 1px 7px 2px rgba(0, 0, 0, 0.25)">
            <img :src="project.image" alt="" class="w-full h-full object-contain" />
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
                  class="flex flex-col justify-center items-center space-y-1 w-12 xl:w-16"
                >
                  <span
                    class="flex justify-center items-center h-12 xl:h-16 w-12 xl:w-16 rounded-lg relative"
                    :style="{
                      backgroundColor: skill.bgColor,
                    }"
                  >
                    <font-awesome-icon v-if="skill.icon" :icon="skill.icon" class="text-3xl xl:text-4xl text-white" />
                    <SvgCollection v-else :name="(skill.svg as string)" size="medium"></SvgCollection>
                  </span>
                </span>
              </div>
            </div>

            <div class="flex items-center w-full" :class="project.github ? 'justify-between' : 'justify-center'">
              <a v-if="project.link" :href="project.link" target="_blank" class="btn">Demo</a>
              <a v-if="project.github" :href="project.github" target="_blank" class="btn">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgCollection from '../Shared/SvgCollection.vue'
import skills from '@/assets/helpers/skills'

import serverpointImage from '@/assets/images/projects/serverpoint.jpg'
import srwImage from '@/assets/images/projects/srw.jpg'
import colossuscloudImage from '@/assets/images/projects/colossuscloud.jpg'
import zephyrEventsImage from '@/assets/images/projects/zephyr-events.jpg'
import visitpatagoniaImage from '@/assets/images/projects/visitpatagonia.jpg'

const colors = ['#6C63FF', '#FF63DD', '#FEB967', '#1AE4FF']

const projects = [
  {
    title: 'SR Web Studio',
    description: '',
    image: srwImage,
    link: 'https://srwebstudio.com',
    github: 'https://github.com/salimranainfo/new-portfolio-website',
    skills: skills.filter((skill) => skill.name === 'Nuxt.js' || skill.name === 'Tailwind CSS'),
  },
  {
    title: 'Serverpoint',
    description: '',
    image: serverpointImage,
    link: 'https://serverpoint.com',
    github: '',
    skills: skills.filter(
      (skill) => skill.name === 'Nuxt.js' || skill.name === 'Tailwind CSS' || skill.name === 'Strapi'
    ),
  },
  {
    title: 'Colossuscloud',
    description: '',
    image: colossuscloudImage,
    link: 'https://colossuscloud.com',
    github: '',
    skills: skills.filter(
      (skill) => skill.name === 'Nuxt.js' || skill.name === 'Tailwind CSS' || skill.name === 'Strapi'
    ),
  },
  {
    title: 'Zephyr Events',
    description: '',
    image: zephyrEventsImage,
    link: 'https://zephyr.events',
    github: '',
    skills: skills.filter(
      (skill) => skill.name === 'Nuxt.js' || skill.name === 'Tailwind CSS' || skill.name === 'Strapi'
    ),
  },
  {
    title: 'Visit Patagonia',
    description: '',
    image: visitpatagoniaImage,
    link: 'https://visitpatagonia.com.ar',
    github: '',
    skills: skills.filter(
      (skill) =>
        skill.name === 'Nuxt.js' || skill.name === 'Tailwind CSS' || skill.name === 'Strapi' || skill.name === 'Node.js'
    ),
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
