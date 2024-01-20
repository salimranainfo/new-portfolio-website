<template>
  <div class="py-24 md:py-24 px-4">
    <div class="flex flex-col justify-center items-center h-full">
      <div class="text-center flex flex-col justify-center items-center">
        <p class="text-xl md:text-3xl text-1F1F21">Hi, we are,</p>

        <h1 class="text-4xl md:text-6xl font-medium mt-4 text-1F1F21">SR Web Studio</h1>

        <p class="text-1F1F21 text-xl md:text-xl font-semibold mt-4">
          We do code and <span class="gradient-text">chill</span>
        </p>

        <p class="max-w-[50rem] text-xl md:text-xl text-4E4E4E mt-4">
          We are a three person small but dedicated team of developers and designers. We are passionate about our work
          and we love to code. We are always ready to take challenges and we are always ready to learn new things.
        </p>

        <div class="mt-12">
          <a href="#contact" class="btn px-12">Let's Talk</a>
        </div>
      </div>

      <div class="mt-16 flex flex-col lg:flex-row justify-around items-stretch w-full max-w-[75rem] lg:space-x-4">
        <div class="flex flex-col w-full order-3 mt-6 lg:mt-0">
          <div class="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] overflow-hidden rounded-full mx-auto">
            <img src="@/assets/images/tutul.jpg" alt="" class="w-full h-full object-cover object-right-top" />
          </div>

          <div class="text-center mt-6 flex flex-col flex-grow">
            <h3 class="font-bold text-3xl">Abdur Rahman</h3>
            <p class="text-lg mt-2 italic font-medium">UI/UX Designer</p>
            <p class="text-lg mb-2 italic font-medium">Team player</p>

            <p class="text-lg text-4E4E4E mt-2 max-w-[25rem] mx-auto">
              He is a UI/UX designer. He has {{ new Date().getFullYear() - 2023 }} years of experience in UI/UX design.
            </p>
          </div>
        </div>

        <div class="flex flex-col w-full order-1 lg:order-2">
          <div class="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] overflow-hidden rounded-full mx-auto">
            <img src="@/assets/images/salim.jpg" alt="" class="w-full h-full object-cover object-center" />
          </div>

          <div class="text-center mt-6 flex flex-col flex-grow">
            <h3 class="font-bold text-3xl">Md Salim Rana</h3>
            <p class="text-lg mt-2 italic font-medium">Full-Stack Developer</p>
            <p class="text-lg mb-2 italic font-medium">Team leader</p>

            <p class="text-lg text-4E4E4E mt-2 max-w-[25rem] mx-auto">
              He is the team leader and he is a full-stack developer. He has
              {{ new Date().getFullYear() - 2019 }} years of experience in full-stack web development.
            </p>
          </div>
        </div>

        <div class="flex flex-col w-full order-2 lg:order-1 mt-6 lg:mt-0">
          <div class="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] overflow-hidden rounded-full mx-auto">
            <img src="@/assets/images/rubel.jpg" alt="" class="w-full h-full object-cover object-right-top" />
          </div>

          <div class="text-center mt-6 flex flex-col flex-grow">
            <h3 class="font-bold text-3xl">Mohammad Robel</h3>
            <p class="text-lg mt-2 italic font-medium">Frontend Developer</p>
            <p class="text-lg mb-2 italic font-medium">Team player</p>

            <p class="text-lg text-4E4E4E mt-2 max-w-[25rem] mx-auto">
              He is a frontend developer. He has {{ new Date().getFullYear() - 2022 }} years of experience in frontend
              web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
