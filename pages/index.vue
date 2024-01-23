<template>
  <div>
    <HomepageHero />
    <HomepageAbout />
    <HomepageSkills />
    <HomepageProjects />
    <HomepageContact />
  </div>
</template>

<script setup lang="ts">
// Add title and meta tags
useHead({
  title: 'SR Web Studio',
  meta: [
    {
      name: 'description',
      content:
        'SR Web Studio is a small agency of web developers and designers who work together to build websites for their clients. They use agile, devops, and other best practices to create websites that are beautiful, functional, and user-friendly.',
    },
    {
      name: 'keywords',
      content:
        'web development, web design, web agency, agile, devops, website creation, website maintenance, website optimization, SR Web Studio',
    },
  ],
})
</script>

<style scoped></style>
