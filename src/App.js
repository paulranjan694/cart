import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {

  constructor () {
    super ();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Camera',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1560367918-bed51f9dff43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=811&q=80',
          id: 1,
        },
        {
          price: 500,
          title: 'Mobile',
          qty: 5,
          img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
          id: 2,
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 3,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
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

  getCartCount = ()=>{
    const {products} =this.state;
    let count=0;

    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }

  getTotalPrice = ()=>{
    const {products} = this.state;

    let cartTotal=0;

    products.forEach(product=>{
      cartTotal+=(product.qty*product.price);
    })

    return cartTotal;
  }

  render(){
    const {products} =this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <h1>Cart</h1>
        <Cart 
          products={products} 
          onIncrementQty={this.incrementQtyHandler}
          onDecrementQty={this.decrementQtyHandler}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div>Total : {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
