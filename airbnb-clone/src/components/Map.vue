<template>
  <div>
    <div>
      <router-link to="/map" class="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <button @click="toggleMap" class="bg-black text-white rounded-full py-2 px-4 text-sm font-semibold">
          Show Lists
        </button>
      </router-link>

      <!-- Include the Map component when showMap is true -->
      <router-view></router-view>
    </div>

    <div v-if="showMap" class="flex items-center justify-center">
      <img src="/map.webp" alt="Static Map" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      showMap: false,
    };
  },
  methods: {
    toggleMap() {
      this.showMap = !this.showMap;
      console.log("Toggle Map Event Emitted");
      this.$emit("updateButtonText", this.showMap ? "Show Lists" : "Show Map");
    },
  },
  computed: {
    buttonText() {
      return this.showMap ? "Show Lists" : "Show Map";
    },
  },
};
</script>
