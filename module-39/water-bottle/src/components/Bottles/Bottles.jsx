import { use, useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart, removeFromCart } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
const Bottles = ({ bottlesPromiss }) => {
  const [cart, setCart] = useState([])

  const bottles = use(bottlesPromiss)
  // console.log(bottles);



  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds, bottles)
    const storedCart = []
    for (const id of storedCartIds) {
      console.log(id)
      const cartBottle = bottles.find(bottle => bottle.id === id)
      if (cartBottle) {
        storedCart.push(cartBottle)
      }
    }
    console.log('Store Cart', storedCart);
    setCart(storedCart);
  }, [bottles])


  const handleAddCart = (bottle) => {
    const newCart = [...cart, bottle]
    setCart(newCart)

    // save the bottle id in  the cart
    addToStoreCart(bottle.id)
    console.log('I clicked card  button', bottle)


  }


  // Remove item from cart
  const handleRemoveCartItem=id=>{
    console.log('Remove item from cart',id)
    const reminingCart= cart.filter(bottle=>bottle.id !==id)
    setCart(reminingCart)
    removeFromCart(id)
  }

  return (
    <div>
      <h2>Bottles : {bottles.length}</h2>
      <h3>Added To Card Item : {cart.length}</h3>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveCartItem}></Cart>
      <div className='container-card'>
        {
          bottles.map(bottle =>
            <Bottle
              bottle={bottle}
              key={bottle.id}
              handleAddCart={handleAddCart}
            ></Bottle>)
        }
      </div>
    </div>
  )
}

export default Bottles