<template>
  <div id="contact" class="pt-20 md:mb-16 text-center flex flex-col justify-center items-center px-4">
    <h2 class="text-6xl md:text-7xl gradient-text">Contact Us</h2>

    <div class="max-w-[75rem] mx-auto flex justify-around items-center w-full mt-12 md:mt-20 space-x-2">
      <div v-for="(contactMethod, i) in contactMethods" :key="i">
        <a :href="contactMethod.link" target="_blank">
          <div class="flex flex-col justify-center items-center space-y-6">
            <img class="" :src="contactMethod.image" :alt="contactMethod.name" />
            <h3 class="text-lg md:text-2xl 2xl:text-3xl">{{ contactMethod.name }}</h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import githubImage from '@/assets/images/github.svg'
import linkedinImage from '@/assets/images/linkedin.svg'
import whatsappImage from '@/assets/images/whatsapp.svg'
import emailImage from '@/assets/images/email.svg'

const contactMethods = [
  {
    name: 'Github',
    image: githubImage,
    link: 'https://github.com/salimranainfo',
  },
  {
    name: 'LinkedIn',
    image: linkedinImage,
    link: 'https://www.linkedin.com/in/salimranahere',
  },
  {
    name: 'WhatsApp',
    image: whatsappImage,
    link: 'https://wa.me/88001777364887',
  },
  {
    name: 'Email',
    image: emailImage,
    link: 'mailto:rana@srwebstudio.com',
  },
]
</script>

<style scoped></style>
