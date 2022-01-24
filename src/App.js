
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor () {
    super();
    this.state={

    products: [
        {
            price:  999,
            title: 'iPhone',
            qty:  0,
            img: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            id: 1
        },
        {
            price:  99,
            title: 'Watch',
            qty:  0,
            img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
            id: 2
        },
        {
            price:  9999,
            title: 'Laptop',
            qty:  0,
            img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
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

getCartCount = () => {
    const {products} =this.state;

    let count =0;
    products.forEach((product) => {
        count +=product.qty;
    });

    return count;
}

getCartTotal = () => {
    const{products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
        cartTotal = cartTotal + product.qty * product.price;
    })

    return cartTotal
}

  render(){
    const { products } = this.state;
  return (
    <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
        products={products}
        
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteQuantity = {this.handleDeleteQuantity}
        />
        <div style={ {padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}
export default App;
