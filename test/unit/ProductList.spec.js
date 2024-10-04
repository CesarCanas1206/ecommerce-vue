import { shallowMount } from '@vue/test-utils';
import ProductList from '@/components/ProductList.vue';

describe('ProductList.vue', () => {
    it('renders product items', () => {
        const wrapper = shallowMount(ProductList, {
            props: { products: [{ name: 'Sample Product' }] }
        });
        expect(wrapper.text()).toContain('Sample Product');
    });
});
