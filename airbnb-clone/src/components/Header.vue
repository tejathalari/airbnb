<template>
    <div>
      <div class="flex justify-end items-center bg-gray-200 p-1">
        <button class="border-r border-gray-400 px-3 py-2">USA, Dollar(USD/$)</button>
        <button class="border-r border-gray-400 px-4 py-2">English</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <router-link v-if="!isLoggedIn" to="/login">
            <button class="mr-4 px-4 py-2">Login</button>
          </router-link>
          <router-link v-if="!isLoggedIn" to="/signup">
            <button class="px-4 py-2">Signup</button>
          </router-link>
          <button v-if="isLoggedIn" @click="logoutUser" class="px-4 py-2">Logout</button>
        </div>
  
      <header class="sticky top-0 left-0 w-full z-50">
        <nav class="bg-gray border-b"></nav>
        <nav class="bg-white border-b">
          <div class="container mx-auto flex items-center justify-between">
            <!-- Logo or App Name (Left Side) -->
            <div class="p-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
              <a href="/" class="text-sm font-medium">Placely</a>
            </div>
            <!-- Search Bar -->
    <div class="mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by city..."
          class="p-1 border border-gray-300 rounded w-75% ml-40 mt-4"
        />
      </div>
            <!-- Navigation Buttons (Right Side) -->
            <div class="flex space-x-4">
              <router-link to="/">
                <button class="p-3 hover:bg-gray-100 text-sm font-medium">HOME</button>
              </router-link>
              <button class="p-3 hover:bg-gray-100 text-sm font-medium">ABOUT US</button>
              <button class="p-3 hover:bg-gray-100 text-sm font-medium">BLOG</button>
              <button class="p-3 hover:bg-gray-100 text-sm font-medium">CONTACT US</button>
              <button class="p-3 hover:bg-gray-100 text-sm font-medium">HELP</button>
              <button class="bg-green-400 p-3 text-sm font-medium">LIST YOUR ROOM</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </template>
  
  <script>
export default {
  name: 'Header',
  computed: {
    isLoggedIn() {
      // Implement a mechanism to check if the user is logged in, e.g., using Vuex
      // For simplicity, you can store a token in localStorage upon login and check its presence
      return localStorage.getItem('token') !== null;
    },
  },
  methods: {
    logoutUser() {
      // Implement logout functionality, e.g., clear localStorage
      localStorage.removeItem('token');
      // Redirect to the home page or another appropriate page
      this.$router.push('/');
    },
  },
};
</script>