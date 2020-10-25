<template>
  <main class="flex m-auto">
    <div class="layout flex-auto">
      <transition name="fade" appear>
        <div class="wrapper">
          <slot />
        </div>
      </transition>
    </div>
  </main>
</template>

<style>
.fade-enter-active {
  transition: filter 0.25s, opacity 0.25s;
}

.fade-enter {
  filter: blur(0.5rem);
  opacity: 0;
}
</style>
