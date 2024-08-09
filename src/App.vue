<script setup>
import RandomAdvice from './components/RandomAdvice.vue'
</script>

<template>
  <RandomAdvice />

  <!-- Footer -->
  <footer class="footer">
    <div class="flex justify-end">
      &copy;2024 Dhoni
      <a href="https://github.com/doniarifin"
          class="
            hover:scale-105
            transition
            duration-300
            ease-in-out
            font-medium 
            rounded-xl
            inline-flex
            items-center
            justify-center
          "
        >
        <mdicon name="github" width="20" class="ml-2" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.footer {
  text-align: center;
  font-weight: 300;
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
