<template>
    <div class="container mx-auto  mt-8 mb-40">
      <div class="container mx-auto mt-8 flex items-center">
        <img src="/org.jpeg" alt="Featured Image" class="w-auto h-auto mb-8 ml-60">
    </div>
      <h2 class="text-2xl font-semibold mb-4">Featured Listings</h2>
  
      <!-- Listing Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Listing 1 -->
        <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
            <a>
              <img src="/photo1.jpeg" alt="Listing 1" class="mb-4 w-full h-48 object-cover rounded-md">
              <h3 class="text-lg font-semibold mb-2">Luxury Home</h3>
              <p class="text-gray-500 text-sm mb-4">Full luxury home | 2-bed 3-bath</p>
              <p class="text-green-600 font-semibold">$120/night</p>
            </a>
          </div>
  
        <!-- Listing 2 -->
        <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
          <img src="/photo2.jpeg" alt="Listing 2" class="mb-4 w-full h-48 object-cover rounded-md">
          <h3 class="text-lg font-semibold mb-2">Cozy Apartment</h3>
          <p class="text-gray-500 text-sm mb-4">Cozy apartment | 1-bed 1-bath</p>
          <p class="text-green-600 font-semibold">$80/night</p>
        </div>
  
        <!-- Listing 3 -->
        <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
          <img src="/photo3.jpeg" alt="Listing 3" class="mb-4 w-full h-48 object-cover rounded-md">
          <h3 class="text-lg font-semibold mb-2">Modern Villa</h3>
          <p class="text-gray-500 text-sm mb-4">Modern villa | 3-bed 2-bath</p>
          <p class="text-green-600 font-semibold">$150/night</p>
        </div>
  
        <!-- Listing 4 -->
        <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
          <img src="/photo4.jpeg" alt="Listing 4" class="mb-4 w-full h-48 object-cover rounded-md">
          <h3 class="text-lg font-semibold mb-2">Luxury Home</h3>
          <p class="text-gray-500 text-sm mb-4">Full luxury home | 2-bed 3-bath</p>
          <p class="text-green-600 font-semibold">$120/night</p>
        </div>
  
        <!-- Listing 5 -->
        <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
          <img src="/photo6.jpeg" alt="Listing 5" class="mb-4 w-full h-48 object-cover rounded-md">
          <h3 class="text-lg font-semibold mb-2">Cozy Apartment</h3>
          <p class="text-gray-500 text-sm mb-4">Cozy apartment | 1-bed 1-bath</p>
          <p class="text-green-600 font-semibold">$80/night</p>
        </div>
  
        <!-- Listing 6 -->
        <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
          <img src="/photo5.jpeg" alt="Listing 6" class="mb-4 w-full h-48 object-cover rounded-md">
          <h3 class="text-lg font-semibold mb-2">Modern Villa</h3>
          <p class="text-gray-500 text-sm mb-4">Modern villa | 3-bed 2-bath</p>
          <p class="text-green-600 font-semibold">$150/night</p>
        </div>
         
        <!-- Listing 7 -->
        <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
            <img src="/photo7.jpeg" alt="Listing 4" class="mb-4 w-full h-48 object-cover rounded-md">
            <h3 class="text-lg font-semibold mb-2">Luxury Home</h3>
            <p class="text-gray-500 text-sm mb-4">Full luxury home | 2-bed 3-bath</p>
            <p class="text-green-600 font-semibold">$120/night</p>
          </div>
    
          <!-- Listing 8 -->
          <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
            <img src="/photo8.jpeg" alt="Listing 5" class="mb-4 w-full h-48 object-cover rounded-md">
            <h3 class="text-lg font-semibold mb-2">Cozy Apartment</h3>
            <p class="text-gray-500 text-sm mb-4">Cozy apartment | 1-bed 1-bath</p>
            <p class="text-green-600 font-semibold">$80/night</p>
          </div>
    
          <!-- Listing 9 -->
          <div class="bg-white p-4 rounded-lg shadow-md transition transform hover:shadow-lg cursor-pointer">
            <img src="/photo9.jpeg" alt="Listing 6" class="mb-4 w-full h-48 object-cover rounded-md">
            <h3 class="text-lg font-semibold mb-2">Modern Home</h3>
            <p class="text-gray-500 text-sm mb-4">Modern villa | 3-bed 2-bath</p>
            <p class="text-green-600 font-semibold">$150/night</p>
          </div>
  
        <!-- Add more listings as needed -->
      </div>
      <!-- End of Listing Cards -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    // Add any other necessary options or logic
  }
  </script>
  
  <style scoped>
  /* Add any additional styles for your component here */
  </style>
  