import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super ();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: '',
      number:1
    };

    // binding incrementQuantity method when not using arrow function
    // this.incrementQuantity=this.incrementQuantity.bind(this);
  }

    // if not using arrow function, then need to find the method
    // incrementQuantity() {
    //     console.log("this.state",this.state); 
    // }

    incrementQuantity = ()=>{
        // console.log("this.state",this.state); 

        // setState will do shallow copy(means only update the particular date to the state)
        // setstate form 1
        // this.setState({
        //     qty:this.state.qty+1,
        // })

        // setState form 2
        this.setState((prevState)=>{
            return {
                qty:prevState.qty + 1,
            }
        });

        this.setState({ number: 2 }, () => console.log(this.state.number));
        this.setState({ number: 3 }, () => console.log(this.state.number));
    }

    decrementQuantity = ()=>{
        const {qty}=this.state;

        if(qty===0){
            return;
        }

        this.setState((prevState)=>{
            return {
                qty : prevState.qty -1,
            }
        })
    }


  render () {
    const {price, title, qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{fontSize: 25}}>{title}</div>
          <div style={{color: '#777'}}>Rs {price}</div>
          <div style={{color: '#777'}}>Qty {qty}</div>
          <div className="cart-item-actions">
            {/* {buttons} */}

            <img
              alt="increment"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1615585284~hmac=27f5fb46d53d500ce8db3463d82dbaf1"
              onClick={this.incrementQuantity}
            />
            <img
              alt="decrement"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1615585268~hmac=f63b3f56f9d3bb4b826bd5c625e54f69"
              onClick={this.decrementQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1615585344~hmac=7144d46622b8e1c74d2bdc62c06602d9"
            />
          </div>
        </div>
      </div>
    );
  }
}

// styling as an object
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 5,
    background: '#ccc',
  },
};

export default CartItem;
