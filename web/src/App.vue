<template id="app">
  <div class="app">
    <!-- <div class="absolute bg-gray-50 top-0 p-2 z-50 whitespace-pre">{{ navSubClass() }}</div> -->
    <div class="main">
        <header class="header wrapper">
            <g-link to="/" class="flex flex-wrap items-center select-none text-xs uppercase">
                <span class="font-bold">{{ $static.site.title || '' }}</span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.5 20.5" width="24" height="16" class="inline mr-2 order-first sm:mx-2 sm:order-none" fill="none" stroke="#707070" stroke-width=".5" stroke-miterlimit="10">
                    <path d="M10.25,20.25a10,10,0,1,1,10-10v10a10,10,0,1,1,10-10v10"/>
                </svg>

                <span class="hidden sm:inline">{{ $static.site.description || '' }}</span>
            </g-link>
        </header>

        <router-view @change-picture="changePicture" />
    </div>

    <nav class="nav" :class="navClass">
      <!-- <div class="m-4">
        <a class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="1" viewBox="0 0 24 24">
            <line x1="1" y1="1" x2="23" y2="23"/>
            <line x1="1" y1="23" x2="23" y2="1"/>
          </svg>
        </a>
        <a class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="1" viewBox="0 0 24 34">
            <line x1="4" y1="1" x2="20" y2="17"/>
            <line x1="20" y1="17" x2="4" y2="33"/>
          </svg>
        </a>
        <a class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="1" viewBox="0 0 24 34">
            <line x1="20" y1="1" x2="4" y2="17"/>
            <line x1="4" y1="17" x2="20" y2="33"/>
          </svg>
        </a>
      </div> -->
      <g-link class="m-4 nav__link" to="/" :class="{'sub-link': isInPath('project')}">
        <svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" fill="currentColor"><path d="M11.773,7.3a1.753,1.753,0,0,0-1.751,1.752V34.947A1.753,1.753,0,0,0,11.773,36.7H27.41V33.259a2.756,2.756,0,0,1,2.752-2.752h3.816V9.053A1.754,1.754,0,0,0,32.226,7.3Zm17.64,16.041H14.588V22.136H29.41Zm0-4.22H14.588V17.916H29.41Zm0-4.22H14.588V13.7H29.41Z"/><path d="M28.412,33.259V36.04l4.809-4.533H30.164A1.753,1.753,0,0,0,28.412,33.259Z"/></svg>
        <span class="nav__text">Projects</span>
      </g-link>
      <g-link class="m-4 sub-link nav__link" to="/photographs" :class="{'active': isInPath('photo')}">
        <svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" fill="currentColor"><path d="M8.157,5.509V38.491H35.843V5.509ZM32.35,30.8h-20.7V9h20.7v.044h0Z"/><path d="M14.762,12.1A2.042,2.042,0,1,0,16.8,14.143h0A2.042,2.042,0,0,0,14.762,12.1Z"/><path d="M19.956,24.792l-3.912-3.729-3.328,4.616v4.2h18.43V23.793L25.1,17.218Z"/></svg>
        <span class="nav__text">Photographs</span>
      </g-link>
      <g-link class="m-4 sub-link nav__link" to="/multimedia" :class="{'active': isInPath('multimedia')}">
        <svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" fill="currentColor"><path d="M36.208,6.009H7.79A2.68,2.68,0,0,0,5.111,8.688h0V35.312A2.68,2.68,0,0,0,7.79,37.991H36.209a2.681,2.681,0,0,0,2.68-2.679h0V8.686A2.681,2.681,0,0,0,36.208,6.009Zm-5.358,1.9V21.4H13.15V7.909ZM11.515,33.918H6.673V29.076h4.842Zm0-9.656H6.673V19.42h4.842Zm0-9.656H6.673V9.764h4.842Zm1.633,21.488V22.6h17.7v13.49ZM37.31,33.917H32.468V29.075H37.31Zm0-9.656H32.468V19.419H37.31Zm0-9.656H32.468V9.763H37.31Z"/></svg>
        <span class="nav__text">Multimedia</span>
      </g-link>
      <g-link class="m-4 sub-link nav__link" to="/about" :class="{'active': isInPath('about')}">
        <svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" fill="currentColor"><path d="M34.476,38a1.268,1.268,0,0,0,1.3-1.228V24h2.624a1.743,1.743,0,0,0,2.07-1.819A2.07,2.07,0,0,0,39.7,20.56l-3.918-3.508V11.213c-.127-.682-1.363-1.218-1.363-1.218H32.033a1.233,1.233,0,0,0-1.252,1.214h0v1.443L23.466,6.49a2.068,2.068,0,0,0-2.664,0L4.323,20.365A2.022,2.022,0,0,0,5.614,24H8.781V36.766a1.2,1.2,0,0,0,1.158,1.229h6.842V28.3a2.3,2.3,0,0,1,2.3-2.3h5.327a2.369,2.369,0,0,1,2.369,2.369v9.631Z"/></svg>
        <span class="nav__text">About</span>
      </g-link>
    </nav>

    <div class="slider" :class="{'off': !isHome}">
      <g-image
        class="projects__image"
        :class="{'projects__aa': fit != 'cover'}"
        :fit="fit"
        :src="src"
        :style="{'width': isHome ? '100%' : 0}"
      />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    sanityOptions {
      projectId
      dataset
    }
  }
  site: sanitySiteSettings(id: "siteSettings") {
    title, description
  }
}
</static-query>

<script>
import $urlForImage from './utils/urlForImage'
import aa from './assets/images/aa.png'

export default {
  data() {
    return {
      src: aa,
    }
  },
  computed: {
    fit() {
      return this.src === aa ? 'contain' : 'cover'
    },
    isHome() {
      return this.$route.name === 'home'
    },
    navClass() {
      // const classes = [];
      // if (this.isHome) {
      //   classes.push('half');
      // }
      //  classes.join(' ')

      return this.$route.name ?? this.$route.path.split('/')[1];
    },
  },
  methods: {
    isInPath(p) {
      return this.$route.path.indexOf(p) == 1;
    },
    changePicture(src) {
      if (!!src) {
        this.src = $urlForImage(src.mainImage.asset, this.$static.metadata.sanityOptions)
          .size(window.innerWidth, window.innerHeight)
          .auto('format')
          .url();
      } else {
        this.src = aa;
      }
    }
  }
}
</script>
