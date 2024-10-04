<!-- src/components/ProductList.vue -->
<template>
    <div>
        <h1 class="text-2xl font-bold">Products</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div v-for="product in products" :key="product.id" class="border p-4 rounded">
                <h2 class="font-semibold">{{ product.name }}</h2>
                <p>\${{ product.price.toFixed(2) }}</p>
                <button @click="addToCart(product)" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: Array,
    },
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product);
        },
    },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>