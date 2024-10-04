<!-- src/components/ShoppingCart.vue -->
<template>
    <div>
        <h1 class="text-2xl font-bold">Shopping Cart</h1>
        <div v-if="cart.length === 0" class="mt-4">
            <p>Your cart is empty.</p>
        </div>
        <div v-else class="mt-4">
            <div v-for="item in cart" :key="item.id" class="flex justify-between items-center border-b p-2">
                <p>{{ item.name }} - \${{ item.price.toFixed(2) }}</p>
                <button @click="removeFromCart(item)" class="text-red-500">Remove</button>
            </div>
            <div class="mt-4">
                <p>Total: \${{ cartTotal.toFixed(2) }}</p>
                <button @click="checkout" class="mt-2 bg-green-500 text-white px-4 py-2 rounded">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cart: Array,
    },
    computed: {
        cartTotal() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        },
    },
    methods: {
        removeFromCart(item) {
            this.$emit('remove-from-cart', item);
        },
        checkout() {
            this.$emit('checkout');
        },
    },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>