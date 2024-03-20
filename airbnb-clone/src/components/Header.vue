<template>
    <div>
        <div class="flex justify-end items-center bg-gray-200 p-1 space-x-6">
            <button class="border-r border-gray-400 px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">USA, Dollar(USD/$)</button>
            <button class="border-r border-gray-400 px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">English</button>
            <router-link v-if="!isLoggedIn" to="/login">
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition duration-300">Login</button>
            </router-link>
            <router-link v-if="!isLoggedIn" to="/signup">
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition duration-300">SignUp</button>
            </router-link>
            <button v-if="isLoggedIn" @click="logoutUser" class="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">Logout</button>
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


            <div class="flex items-center border border-gray-200 bg-white rounded-full shadow-md">
                <button class="px-1 rounded-l-full border-r border-gray-300">
                    Anywhere
                </button>
                <button class="px-3 border-r border-gray-300">
                    Any week
                </button>
                <button class="px-3 border-r border-gray-300">
                    Add guests
                </button>
                <div v-if="showSearchInput" class="flex-grow">
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search by city..."
                    class="p-1 w-full border-none focus:outline-none"
                  />
                </div>
                <button @click="toggleSearchInput" class="px-4 py-1 rounded-r-full bg-red-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </div>
            
            
            <!-- Navigation Buttons (Right Side) -->
            <div class="flex space-x-4 mt-3">
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <router-link to="/">
                <li>
                    <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                  </li>
              </router-link>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About US</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact US</a>
              </li>
              </ul>
              </div>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">List Your Room</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </template>
  
  <script>
export default {
  name: 'Header',
  data() {
    return {
        searchQuery: '',
        showSearchInput: false,
    };
  },
  computed: {
    isLoggedIn() {
      // Implement a mechanism to check if the user is logged in, e.g., using Vuex
      // For simplicity, you can store a token in localStorage upon login and check its presence
      return localStorage.getItem('token') !== null;
    },
  },
  methods: {
    toggleSearchInput() {
        this.showSearchInput = !this.showSearchInput;
    },
    logoutUser() {
      // Implement logout functionality, e.g., clear localStorage
      localStorage.removeItem('token');
      // Redirect to the home page or another appropriate page
      this.$router.push('/');
    },
  },
};
</script>
