<template>
    <aside class="cart-container">
        <div class="cart">
            <h1 class="cart-title spread">
                <span>
                    Cart
                    <i class="icofont-cart-alt icofont-1x"></i>
                </span>
                <button @click="toggle" class="cart-close">&times;</button>
            </h1>

            <div class="cart-body">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th><span class="sr-only">Product Image</span></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th><span class="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key, i) in cart" :key="i">
                            <td><i class="icofont-raddish icofont-3x"></i></td>
                            <td>{{ key }}</td>
                            <td>${{ value.price }} </td>
                            <td class="center">{{ value.quantity }}</td>
                            <td>${{ value.total }}</td>
                            <td class="center">
                                <button @click="deleteCart(key)" class="btn btn-light cart-remove">
                                    &times;
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="center" v-if="Object.keys(cart).length === 0"><em>No items in cart</em></p>
                <div class="spread">
                    <span><strong>Total:</strong> ${{ totalAll() }}</span>
                    <button @click="checkOut()" class="btn btn-light">Checkout</button>
                </div>
            </div>
        </div>
    </aside>
</template>
<script>

export default {
  name: 'sideBar',
  props: ['cart', 'toggle'],
  methods: {
    totalAll () {
      let totalAll = 0
      for (const item in this.cart) {
        totalAll += this.cart[item].total
      }
      return totalAll.toFixed(2)
    },
    deleteCart (product) {
      delete this.cart[product]
    },
    checkOut () {
      for (const item in this.cart) {
        delete this.cart[item]
      }
    }
  }
}
</script>
