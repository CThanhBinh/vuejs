<template>
  <div class="card">
    <div class="card-title">
    {{ product.name }}
    </div>
    <div class="card-body">
    <i class="icofont-10x icofont-"></i>
    <form>
        <div class="row">
        <div class="cell">
            <label>Type:</label>
        </div>
        <div class="cell">
            <em>{{ product.type }}</em>
        </div>
        </div>
        <div class="row">
        <div class="cell">
            <label>Price:</label>
        </div>
        <div class="cell">
            ${{ product.price.USD }}
        </div>
        </div>
        <div class="row">
        <div class="cell">
            <label>Quantity:</label>
        </div>
        <div class="cell">
            <input type="number" placeholder="0" :value="product.quantity" @input="$emit('input', $event.target.value)">
        </div>
        </div>
    </form>
    </div>
    <div class="card-footer">
    <button @click="addToCart(product.icon, product.name, product.quantity, product.price.USD,index)"
        class="btn btn-light">
        Add to cart
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productsComponent',
  props: ['product', 'addToCart', 'index']
}
</script>
