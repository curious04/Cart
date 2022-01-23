import { PhoneIphone } from '@material-ui/icons';
import React from 'react';

class CartItem extends React.Component{

    constructor () {
        super();
        this.state={
            price: 999,
            title: 'iPhone',
            qty:  1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('this', this.state);
    }

    render(){
        const{ price, title, qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ color: '#777'}}>{price}</div>
                    <div style={{ color: '#777'}}>{qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        onClick = {this.increaseQuantity}  />
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />
                        <img alt='delete' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1642937394~hmac=3689669884ce247dbe3c504a938f95e1' />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110, 
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;