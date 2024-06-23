<template>
    <h1>Confectionery</h1>
    <p>{{ total }}</p>
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
 
    <div>
     <v-row>
        <v-col cols="12" md="5"  v-for="product in stockDetails" :key=product>
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
        text="Add to Cart"
        block
        border
        @click="addtoCart(product)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
    </div>
    </template>

    <script>
    export default {
    data(){
        return{
            products:[1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
              
            {
                itemNumber:1,
                itemName:"sweets",
                itemPrice:10,
                itemQuantity:100,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash copy.jpg',
                description:"Nice and sweet ",
            },
            {
                itemNumber:2,
                itemName:"lolipops",
                itemPrice:25,
                itemQuantity:50,
                itemImage:'../images/jamie-albright-AHF_ZktTL6Q-unsplash copy.jpg',
                description:'variety of fruit flavours'
            },
            {
                itemNumber:3,
                itemName:"cake",
                itemPrice:110,
                itemQuantity:3,
                itemImage:'../images/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg',
                description:'Delicious oreo cream cake'
            },
            {
                itemNumber:4,
                itemName:"soda",
                itemPrice:70,
                itemQuantity:12,
                itemImage:'../images/alexandra-nosova-lpv--JSLa58-unsplash.jpg',
                description:'from local to exotic carbonated drinks'
            },
            {
                itemNumber:5,
                itemName:"cookies",
                itemPrice:30,
                itemQuantity:40,
                itemImage:'../images/julissa-capdevilla-tDoHiqXl9b8-unsplash.jpg',
                description:'a variety of flavours for every craving'
            },
            {
              itemNumber:6,
                itemName:"Gummy worms",
                itemPrice:110,
                itemQuantity:43,
                itemImage:'public/images/alexander-grey-SGI0i5sHCL8-unsplash.jpg',
                description:'tangy flavoured goodness'
            },            
            {
              itemNumber:7,
                itemName:"Gummy bears",
                itemPrice:110,
                itemQuantity:56,
                itemImage:'public/images/amit-lahav-LU_fCezP9-o-unsplash.jpg',
                description:'mixed fruit asortment'
            },
            {
              itemNumber:8,
                itemName:"Jelly Beans",
                itemPrice:90,
                itemQuantity:68,
                itemImage:'public/images/billow926-dSpN8Zi5BIg-unsplash.jpg',
                description:'nice and chewy'
            },
            {
              itemNumber:9,
                itemName:"Cupcakes",
                itemPrice:65,
                itemQuantity:36,
                itemImage:'public/images/lore-schodts-FIxdY7jOBus-unsplash.jpg',
                description:'very spongy and well iced greatness'
            },
            {
              itemNumber:10,
                itemName:"Fruit candy",
                itemPrice:75,
                itemQuantity:78,
                itemImage:'public/images/towfiqu-barbhuiya-33taMhUiF0I-unsplash.jpg',
                description:'different fruit flavours'
            } 
        ],
        total:0,

        cartItems:[],
        }
     },
    methods:{
          calculatetotal(itemPrice){
           this.total+=itemPrice
           },
           addtoCart(product){
            this.cartItems.push(product)
            this.calculatetotal(product.itemPrice)
           },
           RemovefromCart(product){
            this.cartItems.pop(product)
            this.total -= product.itemPrice
           }
    }
  }
    </script>