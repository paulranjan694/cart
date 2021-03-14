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

  getCartCount = ()=>{
    const {products} =this.state;
    let count=0;

    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
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
      </div>
    );
  }
}

export default App;
