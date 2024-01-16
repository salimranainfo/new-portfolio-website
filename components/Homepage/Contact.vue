<template>
  <div class="pt-20 mb-16 text-center flex flex-col justify-center items-center">
    <h2 class="text-7xl gradient-text">Contact Me</h2>

    <div class="max-w-[75rem] mx-auto flex justify-around items-center w-full mt-20">
      <div v-for="(contactMethod, i) in contactMethods" :key="i">
        <div class="flex flex-col justify-center items-center space-y-6">
          <img class="" :src="contactMethod.image" :alt="contactMethod.name" />
          <h3 class="text-3xl">{{ contactMethod.name }}</h3>
        </div>
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
    link: '',
  },
  {
    name: 'LinkedIn',
    image: linkedinImage,
    link: '',
  },
  {
    name: 'WhatsApp',
    image: whatsappImage,
    link: '',
  },
  {
    name: 'Email',
    image: emailImage,
    link: '',
  },
]
</script>

<style scoped></style>
