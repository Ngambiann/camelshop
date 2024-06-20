<script>

 export default {
  data() {
    return {
        image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash copy.jpg',
        url:'https://www.vuejs.org',
        stockDetails : [
            {
                itemNumber:1,
                itemName:"sweets",
                itemPrice:10,
                itemQuantity:100,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash copy.jpg'
            },
            {
                itemNumber:2,
                itemName:"lolipops",
                itemPrice:25,
                itemQuantity:50,
                itemImage:'../images/jamie-albright-AHF_ZktTL6Q-unsplash copy.jpg'
            },
            {
                itemNumber:3,
                itemName:"cake",
                itemPrice:110,
                itemQuantity:3,
                itemImage:'../images/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg'

            },
            {
                itemNumber:4,
                itemName:"soda",
                itemPrice:70,
                itemQuantity:12,
                itemImage:'../images/alexandra-nosova-lpv--JSLa58-unsplash.jpg'
            },
            {
                itemNumber:5,
                itemName:"cookies",
                itemPrice:30,
                itemQuantity:40,
                itemImage:'../images/julissa-capdevilla-tDoHiqXl9b8-unsplash.jpg'
            }
        ],
      }
  },

  methods() {
    //we shall add our functions here
  },

  computed(){
    //we use this when working with forms
  }
}
</script>

<template>
    <v-card
    class="mx-auto"
    width="1300"
    height="500"
  >
    <v-carousel>
  <v-carousel-item
    src="./images/customerbox-aXq1oCCjlVM-unsplash copy.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="./images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash copy.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="./images/jamie-albright-AHF_ZktTL6Q-unsplash copy.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="./images/julissa-capdevilla-tDoHiqXl9b8-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="./images/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="./images/alexandra-nosova-lpv--JSLa58-unsplash.jpg"
    cover
  ></v-carousel-item>

</v-carousel>
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>Welcome to Camel Shop</v-card-title>
          <v-card-subtitle>The no.1 candy store </v-card-subtitle>
       </v-card-item>
        <v-card-text>
            Experience the perfect blend of flavors and satisfy your sweet tooth with us today!
            Welcome to our delightful candy store app, where the art of confectionery meets the magic of imagination!
             Step into a world of wonder and delight as you explore our enchanting assortment of handcrafted candies, delectable treats, and other irresistible sweets.
              Whether you’re a candy connoisseur, a sweet tooth enthusiast, or simply someone who appreciates the beauty of the little things, our app has something for everyone.
               Come visit us today and indulge in a world of pure delight!
        </v-card-text>
      </v-card>


      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say</h3>
      <v-divider></v-divider>

      <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="@Taylor Kendi"
        text="Very patient and kind attendant!Loved the experience"
        title="Good customer service"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Loved them!
        </template>

        <template v-slot:subtitle>
          @Ngambi58
        </template>

        <template v-slot:text>
         A lot variety for sweet tooths like me would definitely recommend.
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Fast delivery</v-card-title>

          <v-card-subtitle>@Playgirl254</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Very fast and efficient delivery!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>

</template>