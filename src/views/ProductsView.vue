<template>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
            <div class="card" >
                <div class="card-title">
                    Carrots
                </div>
                <div class="card-body">
                    <i class="icofont-10x icofont-carrot"></i>
                    <form>
                        <div class="row">
                            <div class="cell">
                                <label>Type:</label>
                            </div>
                            <div class="cell">
                                <em>Vegetable</em>
                            </div>
                        </div>
                        <div class="row">
                            <div class="cell">
                                <label>Price:</label>
                            </div>
                            <div class="cell">
                                $4.82
                            </div>
                        </div>
                        <div class="row">
                            <div class="cell">
                                <label>Quantity:</label>
                            </div>
                            <div class="cell">
                                <input type="number" value="0">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button class="btn btn-light">Add to cart</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import food from '../food.json'

export default {
  name: 'ProductsView',
  data () {
    return {
      inventory: food
    }
  },
  components: {
  }
}
</script>
