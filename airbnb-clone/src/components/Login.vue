<template>
    <div class="flex items-start justify-center h-screen mt-40">
      <div class="text-center">
        <div class="p-4 flex items-center px-24">
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
      <h1 class="text-2xl px-2 mb-6">Login</h1>
      <form @submit.prevent="loginUser">
        <div class="mb-4">
          <input v-model="formData.email" type="text" placeholder="Enter Email" class="p-2 border border-gray-300 rounded-md w-64" />
        </div>
        <div class="mb-4">
          <input v-model="formData.password" type="password" placeholder="Enter Password" class="p-2 border border-gray-300 rounded-md w-64" />
        </div>
        <button type="submit" class="bg-red-500 text-white py-2 px-4 rounded-md">Login</button>
      </form>
    </div>
  </div>
</template>
  
<script>
import axios from '@/axios.js'; // Adjust the path based on your project structure

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async loginUser() {
  try {
    const response = await axios.post('/login', this.formData);
    console.log('Full response:', response); // Log the entire response object

    // Check if response is defined and response.data is an object
    if (response && typeof response.data === 'object') {
      console.log('Login response:', response.data); // Log the response data to the console

      // Save the token to local storage or handle as needed
      localStorage.setItem('token', response.data.token);

      // Handle success, e.g., redirect to the home page
      this.$router.push('/home'); // Assuming you're using Vue Router
    } else {
      console.error('Invalid response:', response); // Log an error if response or response.data is invalid
    }
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data.message : error.message);
  }
},
  },
};
</script>
  
  <style scoped>
  /* Add any additional styles for your component here */
  </style>
  