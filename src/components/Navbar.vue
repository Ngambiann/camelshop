<template>
    <v-app-bar  color="orange">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>CamelShop</v-app-bar-title>
  <v-btn variant ="tonal" to="/">Home page</v-btn>
  <v-btn variant="tonal" to="/Products" >Products</v-btn>
  <v-btn variant="tonal" to="/Cart">Cart</v-btn>
  <v-btn variant="tonal" to="/ServicesOffered">Services Offered</v-btn>
  <v-btn variant="tonal" to="/ContactUs">Contact Us</v-btn>
  <v-btn variant="tonal" to="/AboutUs">About Us</v-btn>
</v-app-bar>
</template>