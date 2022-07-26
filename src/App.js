import './App.css';
import CartItem from './MyComponents/CartItem';
import Item from './MyComponents/Item';
import { useState, useEffect } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState([])
  const [items, setItems] = useState([
    {
      sno: 1,
      title: "Headphone",
      image_url: "images/headphones.png",
      price: 21,
      quantity: 1
    },
    {
      sno: 2,
      title: "Red Earpods",
      image_url: "images/earpods.png",
      price: 22,
      quantity: 1
    },
    {
      sno: 3,
      title: "Black Earpods",
      image_url: "images/earpods 2.png",
      price: 23,
      quantity: 1
    },
    {
      sno: 4,
      title: "Vivo Earpods",
      image_url: "images/long_earpods.png",
      price: 24,
      quantity: 1
    },
    {
      sno: 5,
      title: "Bluetooth Hansfree",
      image_url: "images/bluetooth_earphone.png",
      price: 25,
      quantity: 1
    },
    {
      sno: 6,
      title: "Hansfree",
      image_url: "images/hansfree.png",
      price: 26,
      quantity: 1
    },
  ])

  useEffect(() => {
    let t = 0
    cart.forEach(cart_item => {
      t += cart_item.price * cart_item.quantity
    })
    setTotal(t)
  }, [cart])
  

  // .............................................................
  const checkCartDuplicate = (item) => {
    return cart.find(cart_item => {
      return cart_item.title === item.title
    })
  }

  // .............................................................
  const addToCart = (item, flag="+") => {
    if (checkCartDuplicate(item)) {
      let index = -1;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].sno === item.sno) {
          index = i;
          break;
        }
      }
      const a = cart.slice(0, index)
      const b = cart.slice(index + 1, cart.length)
      const new_cart_item = {
        sno: cart[index].sno,
        title: cart[index].title,
        image_url: cart[index].image_url,
        price: cart[index].price,
        quantity: cart[index].quantity,
      }

      if(flag === '+')
        new_cart_item.quantity = new_cart_item.quantity + 1
        else
        new_cart_item.quantity = new_cart_item.quantity - 1
      let c = a.concat([new_cart_item], b)
      setCart(c)
    }
    else setCart(pre => [...pre, item])
  }

  // .............................................................

  const removeFromCart = (item) => {
    const new_cart = cart.filter(cart_item => {
      return cart_item.sno !== item.sno
    })
    setCart(new_cart)
    console.log(cart);
    console.log(items);
  }
  // .............................................................

  const increment = (item) => {
    addToCart(item)
  }
  const decrement = (item) => {
    if(item.quantity > 1)
      addToCart(item, '-')
  }

  return (
    <div className="main__container row App">
      <div className='main col-12 col-lg-9'>
        <h3>Shopping Items</h3>
        <div className="row row-cols-3 item__list">
          {items.map(item => {
            return <Item addToCart={addToCart} key={item.sno} item={item} />
          })}
        </div>
      </div>
      <div className='cart col-12 col-lg-3'>
        <h3>Cart</h3>
        <div className="cart__list">
          {cart.map(cart_item => {
            return <CartItem key={cart_item.sno} cart_item={cart_item} remove={removeFromCart} increment={increment} decrement={decrement}/>
          })}
        </div>
        <div>
          <h5 className='total' >TOTAL: ${total}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
