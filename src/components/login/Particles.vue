<template>
  <vue-particles
      :options="particleOptions"
      class="particles-container"
  ></vue-particles>
</template>

<script>
import VueParticles from 'vue-particles';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"Particles",
  components: {
    VueParticles,
  },
  data() {
    return {
      particleOptions: {
        color: '#fff',
        particleOpacity: 0.7,
        particlesNumber: 60,
        shapeType: 'circle',
        particleSize: 4,
        linesColor: '#fff',
        linesWidth: 1,
        lineLinked: true,
        lineOpacity: 0.4,
        linesDistance: 150,
        moveSpeed: 2,
        hoverEffect: true,
        hoverMode: 'grab',
        clickEffect: true,
        clickMode: 'push',
      },
    };
  },
};
</script>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
