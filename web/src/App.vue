<template id="app">
    <div class="flex">
        <div class="flex tw" :class="{isHome: 'w-1/2'}">
            <div>
                <header class="header">
                    <g-link to="/" class="flex flex-wrap items-center select-none text-xs uppercase">
                        <span class="font-bold">{{ $static.metadata.siteName }}</span>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" class="inline" fill="none" stroke="#707070" stroke-width="0.25" stroke-miterlimit="10">
                            <path d="M12.2,23.7c-4.2,0-7.7-3.4-7.7-7.7s3.4-7.7,7.7-7.7s7.7,3.4,7.7,7.7v7.7c-4.2,0-7.7-3.4-7.7-7.7c0-4.2,3.4-7.7,7.7-7.7c4.2,0,7.7,3.4,7.7,7.7v7.7"/>
                        </svg>

                        <span>Photographer + Motion graphic designer</span>
                    </g-link>
                </header>

                <router-view @changePicture="changePicture" />
            </div>

            <nav class="nav" :style="{'right': isHome ? '50%' : 0}">
                <g-link class="m-4 nav__link" to="/">Projects</g-link>
                <g-link class="m-4 sub-link nav__link" to="/photographs/">Photographs</g-link>
                <g-link class="m-4 sub-link nav__link" to="/multimedia/">Multimedia</g-link>
                <g-link class="m-4 sub-link nav__link" to="/about/">About</g-link>
            </nav>
        </div>

        <!-- <div class="flex"> -->
        <g-image
            class="fixed flex-1 h-screen inset-y-0 object-center object-cover right-0 tw w-1/2"
            :src="src" 
            :style="{'width': isHome ? '50%' : 0}"
        />
        <!-- </div> -->
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    data() {
        return {
            src: 'https://picsum.photos/900',
        }
    },
    computed: {
        isHome () {
            return this.$route.name === 'home';
        }
    },
    methods: {
        changePicture(src) {
            this.src = src.cover;
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        @apply px-16 py-4 sticky top-0;
        background: linear-gradient(#dfdfdf, #dfdfdf 75%, hsla(0, 0%, 87%, .85) 87%, hsla(0, 0%, 87%, .75) 99%, #dfdfdf);
    }
    .nav {
        @apply bottom-0 fixed flex flex-wrap font-light justify-around select-none top-0 tracking-wider uppercase;

        .active--exact, .sub-link.active {
            @apply font-bold tracking-wide;
        }
    }
    .nav {
        right: 50%;
        writing-mode: vertical-rl;
        transition: right .4s ease-in-out;
    }
    .tw {
        transition: width .4s ease-in-out;
    }
</style>