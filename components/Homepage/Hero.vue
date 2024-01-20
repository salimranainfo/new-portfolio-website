<template>
  <div class="py-24 md:py-36 px-4">
    <div class="flex flex-col justify-center items-center h-full">
      <div class="text-center flex flex-col justify-center items-center">
        <p class="text-2xl md:text-3xl text-1F1F21">Hi, I am</p>

        <h1 class="text-5xl md:text-7xl font-medium mt-4 text-1F1F21">Md Salim Rana</h1>

        <p class="text-1F1F21 text-xl md:text-2xl font-semibold mt-4">
          I do code and <span class="gradient-text">chill</span>
        </p>

        <p class="max-w-[50rem] text-xl md:text-2xl text-4E4E4E my-8">
          Passionate Software Engineer with a focus on React Native development, dedicated to crafting elegant and
          user-friendly mobile applications.
        </p>

        <div>
          <a href="#contact" class="btn px-12">Let's Talk</a>
        </div>
      </div>

      <div class="flex justify-around items-start w-full max-w-[70rem]">
        <div>
          <div class="mt-24 w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] overflow-hidden rounded-full mx-auto">
            <img src="@/assets/images/tutul.jpg" alt="" class="w-full h-full object-cover object-right-top" />
          </div>

          <div class="text-center mt-6">
            <h3 class="font-bold text-3xl">Abdur Rahman</h3>
            <p class="text-xl mt-2">UI/UX Designer</p>
          </div>
        </div>
        <div>
          <div class="mt-24 w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] overflow-hidden rounded-full mx-auto">
            <img src="@/assets/images/salim.jpg" alt="" class="w-full h-full object-cover object-center" />
          </div>

          <div class="text-center mt-6">
            <h3 class="font-bold text-3xl">Md Salim Rana</h3>
            <p class="text-xl mt-2">Full-Stack Developer</p>
            <p class="text-xl mt-2">Team leader</p>
          </div>
        </div>
        <div>
          <div class="mt-24 w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] overflow-hidden rounded-full mx-auto">
            <img src="@/assets/images/rubel.jpg" alt="" class="w-full h-full object-cover object-right-top" />
          </div>

          <div class="text-center mt-6">
            <h3 class="font-bold text-3xl">Mohammad Robel</h3>
            <p class="text-xl mt-2">Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
