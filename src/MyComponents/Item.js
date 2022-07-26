import React from 'react'

export default function Item({item, addToCart}) {
  return (
    <div className=' item'>
        <h6>{item.title}</h6>
        <img src={item.image_url} alt='product'/>
        <div className='product__bottom'>
            <div className='price' >Cost: ${item.price}</div>
            <button onClick={() => {addToCart(item)}} className='btn btn-sm btn-primary'>Add to Cart</button>
        </div>
    </div>
  )
}
