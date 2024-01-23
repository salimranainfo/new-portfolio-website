<template>
  <footer class="text-center mb-0">
    <div class="flex justify-center items-end w-full relative -mt-[1px]">
      <img src="@/assets/images/footer.svg" class="w-full" />

      <p
        class="text-sm lg:text-xl 2xl:text-xl text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0.5 md:mb-3 xl:mb-5 whitespace-nowrap"
      >
        &copy; {{ new Date().getFullYear() }} - All Rights Reserved by
        <span class="text-1F1F21 font-medium">SR Web Studio</span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
