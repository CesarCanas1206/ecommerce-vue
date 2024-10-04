<!-- src/components/Checkout.vue -->
<template>
    <div>
        <h1 class="text-2xl font-bold">Checkout</h1>
        <form @submit.prevent="submitOrder" class="mt-4">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium">Name</label>
                <input v-model="name" type="text" id="name" class="mt-1 p-2 border rounded w-full" required>
            </div>
            <div class="mb-4">
                <label for="address" class="block text-sm font-medium">Address</label>
                <input v-model="address" type="text" id="address" class="mt-1 p-2 border rounded w-full" required>
            </div>
            <div class="mb-4">
                <p>Cart Summary:</p>
                <ul>
                    <li v-for="item in cart" :key="item.id">
                        {{ item.name }} - \${{ item.price.toFixed(2) }}
                    </li>
                </ul>
                <p>Total: \${{ cartTotal.toFixed(2) }}</p>
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
                Submit Order
            </button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        cart: Array,
    },
    data() {
        return {
            name: '',
            address: '',
        };
    },
    computed: {
        cartTotal() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        },
    },
    methods: {
        submitOrder() {
            alert(`Order placed for ${this.name}!`);
            this.$emit('order-submitted');
        },
    },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>