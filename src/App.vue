<!-- src/App.vue -->
<template>
  <div class="container mx-auto p-4">
    <ProductList :products="products" @add-to-cart="addToCart" />
    <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" @checkout="checkout" />
    <Checkout v-if="isCheckout" :cart="cart" @order-submitted="completeOrder" />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import Checkout from './components/Checkout.vue';

export default {
  components: {
    ProductList,
    ShoppingCart,
    Checkout,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 49.99 },
        { id: 3, name: 'Product 3', price: 19.99 },
      ],
      cart: [],
      isCheckout: false,
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id);
    },
    checkout() {
      this.isCheckout = true;
    },
    completeOrder() {
      alert('Order Completed!');
      this.cart = [];
      this.isCheckout = false;
    },
  },
};
</script>

<style>
/* Tailwind styling is used by default */
</style>
