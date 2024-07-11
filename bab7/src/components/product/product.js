import './Product.css';
import React, { Component } from "react";

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

export default class Product extends Component {
  state = {
    cart: [],
    
  };

  // Mengatur options formatter pada currency
  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  getTotal = () => {

    // artinya menjumlah kan semua yang ada di statecard , yang di jumlah kan adalam item.price 
    // totalcost yang menampung itu semua , dan di set nilai awl total =0 
    const total = this.state.cart.reduce( (totalCost, item) => totalCost + item.price , 0)
    // artinya undefined == bydefault launguage yg di gunakan dan , options nya sesuai dengan perngaturan yang di tentukan 
    return total.toLocaleString(undefined, this.currencyOptions);
  };

  remove =(product)=> { 

    this.setState( (state)=> { 
      // menyalin semua isi dari cart 
      const cart = [...state.cart]
      // memastikan p.name === product.name 
      const productIndex = cart.findIndex(p =>p.name === product.name) 
      // kalau productnaame < 0 tidka ada yang di return 
      if (productIndex<0){ 
        return ; 
      }
      //splice artinya menghapus elemen berdasrkan index nya 
      cart.splice(productIndex , 1 )

      return ( {
        cart,
        
    })
    })

    

  }

  add = (product) => {
    this.setState((state) => ({
      // kita menyalin semua isi dari array dan menambahkan product.name
      cart: [...state.cart, product],
      
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.cart.length} total items</div>
        <div>Total: {this.getTotal()}</div>

        <div>
          {products.map((product) => (
            <div key={product.name}>
              <span>{product.name}</span>
              <button onClick={() => this.add(product)}>Add</button>  <button onClick={()=>this.remove(product)}>Remove All</button>
            </div>
          ))}
        </div>

       
      </div>
    );
  }
}
