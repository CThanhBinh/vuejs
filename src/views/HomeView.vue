<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">

      <h2>Recommended</h2>

      <div class="recommended">

        <productsComponent
          v-for="(product,index) in inventory.slice(0, 3)"
          :index="index"
          :key="product.id"
          :product="product"
          :addToCart="addToCart"
        >
        </productsComponent>

      </div>

    </main>
  </div>
</template>

<script>
import productsComponent from '@/components/products.vue'

export default {
  name: 'HomeView',
  props: ['inventory', 'addToCart'],
  components: { productsComponent }
}
</script>
