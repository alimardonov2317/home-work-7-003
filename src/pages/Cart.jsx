import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosRemoveCircle } from "react-icons/io";
import {
  amountDecrement,
  amountIncrement,
  removeFromCart,
} from '../redux/features/cart.slice'
const Cart = () => {
  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  return (
    <div className='py-20'>
      <div className='container px-10 mx-auto  bg-white rounded-lg shadow-[0px_4px_31px_0px_rgba(0,_0,_0,_0.1)] flex flex-col lg:flex-row gap-10 '>
        <div className='lg:w-2/3 w-full p-6'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
            Shopping Cart
          </h2>

          {cart?.length > 0 ? (
            <div className='space-y-6'>
              {cart?.map(product => (
                <div key={product.id} className='flex items-center border-b border-gray-300 pb-4 gap-6'>
                  <div className='max-w-[300px] w-full'>
                    <img src={product.thumbnail} className='w-24 h-24 rounded-md object-cover' alt={product.title} />
                    <h3 className='text-lg font-medium text-gray-900'>
                      {product.title}
                    </h3>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <p className='text-md font-semibold text-black'>
                      ${product.price}
                    </p>
                    <div className='flex items-center mt-2'>
                      <button disabled={product.amount <= 1} onClick={() => dispatch(amountDecrement(product))} className='w-8 h-8 bg-gray-200 text-lg flex items-center justify-center rounded-md hover: active:bg-gray-400'> -
                      </button>
                      <span className='px-4 text-lg'>{product.amount}</span>
                      <button onClick={() => dispatch(amountIncrement(product))} className='w-8 h-8 bg-gray-200 text-lg flex items-center justify-center rounded-md hover: active:bg-gray-400'> +
                      </button>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(product.id))} className=' cursor-pointer text-white text-sm font-medium rounded-md transition'>
                    <IoIosRemoveCircle  className='text-[35px] text-red-400 active:text-red-800'/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-center text-gray-600 text-lg'>
              Your cart is empty.
            </p>
          )}
        </div>


        <div className='lg:w-1/3 w-full h-auto bg-[#ddd] p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-bold mb-4'>
            Summary
          </h3>
          <div className='flex justify-between text-lg font-medium  mb-6'>
            <span>Total Price:</span>
            <span>
              $
              {cart?.reduce(
                (total, product) => total + product.price * product.amount,
                0
              )}
            </span>
          </div>
          <button className='w-full py-3 bg-black text-white text-lg font-medium rounded-md cursor-pointer transition'>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
