<template>
  <main class="flex m-auto w-full">
    <div class="layout flex-auto">
      <transition name="fade" appear>
        <div class="wrapper">
          <slot />
        </div>
      </transition>
    </div>
  </main>
</template>
