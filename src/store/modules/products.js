import axios from "axios";

const state = {
  stockDetails: [
    {
      itemNumber: 1,
      itemName: "sweets",
      itemPrice: 10,
      itemQuantity: 100,
      itemImage: "../images/customerbox-aXq1oCCjlVM-unsplash copy.jpg",
      description: "Nice and sweet ",
    },
    {
      itemNumber: 2,
      itemName: "lolipops",
      itemPrice: 25,
      itemQuantity: 50,
      itemImage: "../images/jamie-albright-AHF_ZktTL6Q-unsplash copy.jpg",
      description: "variety of fruit flavours",
    },
    {
      itemNumber: 3,
      itemName: "cake",
      itemPrice: 110,
      itemQuantity: 3,
      itemImage:
        "../images/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg",
      description: "Delicious oreo cream cake",
    },
    {
      itemNumber: 4,
      itemName: "soda",
      itemPrice: 70,
      itemQuantity: 12,
      itemImage: "../images/alexandra-nosova-lpv--JSLa58-unsplash.jpg",
      description: "from local to exotic carbonated drinks",
    },
    {
      itemNumber: 5,
      itemName: "cookies",
      itemPrice: 30,
      itemQuantity: 40,
      itemImage: "../images/julissa-capdevilla-tDoHiqXl9b8-unsplash.jpg",
      description: "a variety of flavours for every craving",
    },
    {
      itemNumber: 6,
      itemName: "Gummy worms",
      itemPrice: 110,
      itemQuantity: 43,
      itemImage: "public/images/alexander-grey-SGI0i5sHCL8-unsplash.jpg",
      description: "tangy flavoured goodness",
    },
    {
      itemNumber: 7,
      itemName: "Gummy bears",
      itemPrice: 110,
      itemQuantity: 56,
      itemImage: "/images/amit-lahav-LU_fCezP9-o-unsplash.jpg",
      description: "mixed fruit asortment",
    },
    {
      itemNumber: 8,
      itemName: "Jelly Beans",
      itemPrice: 90,
      itemQuantity: 68,
      itemImage: "/images/billow926-dSpN8Zi5BIg-unsplash.jpg",
      description: "nice and chewy",
    },
    {
      itemNumber: 9,
      itemName: "Cupcakes",
      itemPrice: 65,
      itemQuantity: 36,
      itemImage: "/images/lore-schodts-FIxdY7jOBus-unsplash.jpg",
      description: "very spongy and well iced greatness",
    },
    {
      itemNumber: 10,
      itemName: "Fruit candy",
      itemPrice: 75,
      itemQuantity: 78,
      itemImage: "/images/towfiqu-barbhuiya-33taMhUiF0I-unsplash.jpg",
      description: "different fruit flavours",
    },
  ],
  allproducts: [],
};
const getters = {
  stock: (state) => state.stockDetails,
};
const actions = {
  async fetchProducts({commit}) {
    try{
        const data=await axios.get(
            "http://127.0.0.1:8000/api/products"
        );
        commit("SET_PROCUCTS", data.data);
        } catch(error) {
         alert(error);
         console.log(error);
        }
  },
}
const mutations = {
  SET_PRODUCTS(state, allProducts) {
    state.allproducts = allProducts;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
