<template>
  <main class="flex m-auto pb-8 w-full">
    <transition name="fade" appear>
      <div class="wrapper flex-auto">
        <slot />
      </div>
    </transition>
  </main>
</template>
