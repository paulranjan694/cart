import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor () {
    super ();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Camera',
          qty: 10,
          img: '',
          id: 1,
        },
        {
          price: 500,
          title: 'Mobile',
          qty: 15,
          img: '',
          id: 2,
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 5,
          img: '',
          id: 3,
        },
      ],
    };
  }

  incrementQtyHandler = (product)=>{
    //   console.log("increment -",product);
      const {products} = this.state;
      const index= products.indexOf(product);

      products[index].qty+=1;

      this.setState({
          products
      });
  }

  decrementQtyHandler = (product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      products[index].qty-=1;
      this.setState({
          products 
          //products:products -- when key and value is same, we can write in short form 
      })
  }

  handleDeleteProduct = (id)=>{
      const {products} =this.state;

      const items = products.filter(item=>item.id !== id);

      this.setState({
          products:items,
      })
  }

  render () {
    const {products} = this.state;
    return (
      <div className="cart">
        {products.map (product => {
          return <CartItem 
                product={product} 
                key={product.id} 
                incrementQty={this.incrementQtyHandler}
                decrementQty={this.decrementQtyHandler}
                onDeleteProduct={this.handleDeleteProduct}
            />;
        })}

      </div>
    );
  }
}

export default Cart;
