
import React from 'react';
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor () {
        super();
        this.state={

        products: [
            {
                price:  999,
                title: 'iPhone',
                qty:  0,
                img: '',
                id: 1
            },
            {
                price:  99,
                title: 'Watch',
                qty:  0,
                img: '',
                id: 2
            },
            {
                price:  9999,
                title: 'Laptop',
                qty:  0,
                img: '',
                id: 3
            }
        
        //this.increaseQuantity = this.increaseQuantity.bind(this);
        ]
    } 
    }   
    handleIncreaseQuantity = (product) => {
        const{ products } = this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;

        this.setState({
            products: products  // or just writr products
        })
    
    }

    handleDecreaseQuantity = (product) => {
        const{ products } = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -=1;

        this.setState({
            products: products  // or just writr products
        })
    
    }

    handleDeleteQuantity = (id) => {
        const{ products } = this.state;

        const items = products.filter((item) => item.id !== id); // [{}]

        this.setState({
            products: items
        })
    }
    render () {
        const {products} = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                    return ( <CartItem 
                        product={product} 
                        key={product.id} 
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteQuantity = {this.handleDeleteQuantity}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;