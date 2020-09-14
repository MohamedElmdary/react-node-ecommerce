class CartController {
    static get() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    static set(cart) {
        const data = JSON.stringify(cart);
        localStorage.setItem('cart', data);
        return cart;
    }

    static merge(product, increase = true) {
        const { id } = product;
        const cart = CartController.get();
        const idx = cart.findIndex(({ product }) => {
            return product.id === id;
        });
        if (idx > -1) {
            cart[idx].count += increase ? 1 : -1;
            if (!cart[idx].count) {
                cart.splice(idx, 1);
            }
        } else {
            cart.push({
                count: 1,
                product,
            });
        }
        return CartController.set(cart);
    }
}

export default CartController;
