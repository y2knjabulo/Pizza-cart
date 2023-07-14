function pizzaPamphlet() {
    return {
        cart: [],
        totals: {
            small: 0,
            medium: 0,
            large: 0,
            total: 0
        },
        addToCart(size) {
            let pizza = this.cart.find(item => item.size === size);
           
            if (pizza) {
                if (pizza.quantity < 5) {
                    pizza.quantity++; 
                }
            } else {
                this.cart.push({ size: size, quantity: 1 });
            }
           
            this.updateTotals();
        },
        removeFromCart(pizza) {
            if (pizza.quantity > 1) {
                pizza.quantity--;
            } else {
                let index = this.cart.indexOf(pizza);
                this.cart.splice(index, 1);
            }

            this.updateTotals();
        },
        
        updateTotals() {
            this.totals = {
                small: 0,
                medium: 0,
                large: 0,
                total: 0
            };
           
            for (let pizza of this.cart) {
                switch (pizza.size) {
                    case 'small':
                        this.totals.small += pizza.quantity;
                        break;
                    case 'medium':
                        this.totals.medium += pizza.quantity;
                        break;
                    case 'large':
                        this.totals.large += pizza.quantity;
                        break;
                }
            }
           
            this.totals.total = this.totals.small * 29 + this.totals.medium * 79 + this.totals.large * 134;
        },
        checkout() {
            let paymentAmount = prompt("Enter the payment amount:");
           
            if (paymentAmount >= this.totals.total) {
                alert("Enjoy your pizzas!");
                this.cart = [];
                this.updateTotals();
            } else {
                alert("Sorry, that is not enough money!");
            }
        }
    };
}

