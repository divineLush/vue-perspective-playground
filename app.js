let vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    }
  },

  computed: {
    boxStyles() {
      const perspective = `perspective(${this.perspective}px)`;
      const rotateX = `rotateX(${this.rotateX}deg)`;
      const rotateY = `rotateY(${this.rotateY}deg)`;
      const rotateZ = `rotateZ(${this.rotateZ}deg)`;

      return {
        transform: `${perspective} ${rotateX} ${rotateY} ${rotateZ}`,
      }
    },
  },

  methods: {
    reset() {
      this.perspective = 0;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    copy () {
      const el = document.createElement('textarea');

      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      el.value = `transform: ${this.boxStyles.transform}`;
      document.body.appendChild(el);
      el.select();

      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
})
.mount('#app');
