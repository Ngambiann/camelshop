<template>
    <h1>Cart</h1>
    <v-card 
      class="mx-auto"
      width="800">
      <v-card-text class="bg-surface-light pt-4"> </v-card-text>
        <v-card-title>Cart 
          {{ total }}
          <v-btn color="deep-orange-lighten-1"
          text="Checkout"
          ></v-btn>
       
        <v-row>
        <v-col cols="12" md="5"  v-for="product in cartItems" :key=product>
           <v-card
         class="mx-auto my-12" 
        max-width="374"
        >
    <v-img 
    height="250" 
    :src="product.itemImage"
     cover
     ></v-img>

    <v-card-item>
      <v-card-title>{{product.itemName}}</v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1"> {{product.itemPrice}} </div>
      <div> {{ product.description }} </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Remove"
        block
        border
        @click="RemovefromCart(product)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
      </v-card-title>
      </v-card>
    </template>
    
    <script>
    import { mapActions,mapGetters } from 'vuex'

    export default {
        data(){
            return{

            }
        },
        methods:{

        },

        computed: {
            ...mapGetters({
               cartItems: 'cart'
            })
           },
    
    }
   
    </script>