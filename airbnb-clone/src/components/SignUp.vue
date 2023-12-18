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
      <h1 class="text-2xl px-2 mb-6">Sign Up</h1>
      <form @submit.prevent="registerUser">
        <div class="mb-4">
          <input v-model="formData.name" type="text" placeholder="Enter Name" class="p-2 border border-gray-300 rounded-md w-64" />
        </div>
        <div class="mb-4">
          <input v-model="formData.email" type="text" placeholder="Enter Email" class="p-2 border border-gray-300 rounded-md w-64" />
        </div>
        <div class="mb-4">
          <input v-model="formData.password" type="password" placeholder="Enter Password" class="p-2 border border-gray-300 rounded-md w-64" />
        </div>
        <div class="mb-4">
          <input v-model="formData.confirmPassword" type="password" placeholder="Confirm Password" class="p-2 border border-gray-300 rounded-md w-64" />
        </div>
        <button type="submit" class="bg-red-500 text-white py-2 px-4 rounded-md">Sign Up</button>
      </form>
    </div>
  </div>
</template>
  
<script>
import axios from '@/axios.js'; // Adjust the path based on your project structure

export default {
  name: 'SignUp',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('/register', this.formData);
        // Handle success, e.g., redirect to the login page
        this.$router.push('/login'); // Assuming you're using Vue Router
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error('Registration error:', error.response.data.message);
      }
    },
  },
};
</script>
  
  <style scoped>
  /* Add any additional styles for your component here */
  </style>
  