<template>
  <div class="h-screen">
    <div class="flex flex-col justify-center items-center h-full">
      <div class="w-[20rem] h-[20rem] overflow-hidden rounded-full mx-auto">
        <img src="@/assets/images/me.jpg" alt="" class="w-full h-full object-cover object-center" />
      </div>

      <div class="mt-16 text-center flex flex-col justify-center items-center">
        <p class="text-3xl text-1F1F21">Hi, I am</p>

        <h1 class="text-7xl font-medium mt-2 text-1F1F21">Md Salim Rana</h1>

        <p class="text-1F1F21 text-2xl font-semibold mt-2">I do code and <span class="gradient-text">chill</span></p>

        <p class="max-w-[50rem] text-2xl text-4E4E4E my-8">
          Passionate Software Engineer with a focus on React Native development, dedicated to crafting elegant and
          user-friendly mobile applications.
        </p>

        <div>
          <a href="#contact" class="btn px-12">Let's Talk</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
