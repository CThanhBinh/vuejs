<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div  @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ Object.keys(cart).length }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" :addToCart="addToCart" ></router-view>
  <sideBar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
  >
  </sideBar>
</template>

<script>
import sideBar from './components/sideBar.vue'
import food from './food.json'

export default {
  components: {
    sideBar
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {}
    }
  },
  methods: {
    addToCart (icon, name, quantity, price, i) {
      this.cart[name] = { icon: icon, quantity: quantity, price: price, total: quantity * price }
      this.inventory[i].quantity = 0
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>
