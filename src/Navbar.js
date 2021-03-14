import React from 'react';

const Navbar = (props) => {
    return (
    <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1615748072~hmac=c67f208a3676a8207f75a16b3be1d59d" alt="cart-icon" />
            <span style={styles.cartCount}>{props.count}</span>
        </div>
    </div>
    );

}

// styling as an object
const styles = {
  cartIcon:{
    height:32,
    marginRight:20
  },
  nav:{
    height:70,
    background: '#4267b2',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  cartIconContainer:{
    position:'relative'
  },
  cartCount:{
    background:'yellow',
    borderRadius:'50%',
    padding:'4px 8px',
    position:'absolute',
    right:0,
    top:-9
  }
};

export default Navbar;
