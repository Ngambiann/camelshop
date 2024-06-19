<script>

 export default {
  data() {
    return {
        image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash copy.jpg',
        url:'https://www.vuejs.org',
        stockDetails : [
            {
                itemNumber:8296,
                itemName:"sweets",
                itemPrice:10,
                itemQuantity:100,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash copy.jpg'
            },
            {
                itemNumber:8454,
                itemName:"lolipops",
                itemPrice:25,
                itemQuantity:50,
                itemImage:'../images/jamie-albright-AHF_ZktTL6Q-unsplash copy.jpg'
            },
            {
                itemNumber:8143,
                itemName:"cake",
                itemPrice:110,
                itemQuantity:3,
                itemImage:'../images/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg'

            },
            {
                itemNumber:8373,
                itemName:"soda",
                itemPrice:70,
                itemQuantity:12,
                itemImage:'../images/alexandra-nosova-lpv--JSLa58-unsplash.jpg'
            },
            {
                itemNumber:8099,
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
    <h1>My Candy Shop</h1>
    <div class="center">
        <img v-bind:src="image" width="500" height="300">
    </div>
    <div class="center">
        <a :href="url">Vue JS Practice</a>
        <h3>Milk,white,dark</h3>
        <h5>a wide variety of fine snacks,sweets and chocolate perfect for all ocassions</h5>
    </div>
    <div class="center">
        <ul>
            <li :key="item" v-for="item in stockDetails">
                <div>
                    <img v-bind:src="item.itemImage" width="200" height="150">
                </div>
                <div>
                    <span>{{ item.itemName }}</span> &nbsp;&nbsp;
                    <span> <button style="background-color: blueviolet; color:white; border: blueviolet;">+</button></span>
                </div>
                <br>
            </li>
        </ul> 
    </div> 
</template>