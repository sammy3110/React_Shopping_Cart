import React from 'react'

export default function CartItem({cart_item, remove, increment, decrement}) {
    return (
        <div className='cart__item'>
            <img src={cart_item.image_url} alt='cart item' />
            <div className='cart_item_details'>
                <h6>{cart_item.title}</h6>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" onClick={() => {decrement(cart_item)}} className="btn btn-sm btn-dark">-</button>
                    <p>{cart_item.quantity}</p>
                    <button type="button" onClick={() => {increment(cart_item)}} className="btn btn-sm btn-dark">+</button>
                    <button type="button" onClick={() => {remove(cart_item)}} className="btn btn-sm btn-danger">remove</button>
                </div>
                <h6>Price: ${cart_item.price}</h6>
                <h6>Subtotal: ${cart_item.quantity * cart_item.price}</h6>
            </div>
        </div>
    )
}
