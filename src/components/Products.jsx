import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '../redux/features/wishlist.slice'
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from '../redux/features/cart.slice'


const Products = ({ data }) => {
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlist.value)
    return (
        <>
            <div className='py-10'>
                <div className='grid container mx-auto lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5'>
                    {
                        data?.map((product) => (
                            <div className='bg-[#f7f4f3] px-4 py-2 rounded-md cursor-pointer' key={product.id}>
                                <div className='relative h-[250px] group overflow-hidden'>
                                    <img src={product.thumbnail} className='w-full' alt="" />
                                    <button onClick={() => dispatch(toggleWishlist(product))} className='duration-200  group-hover:right-1 absolute top-2  md:right-[-30px] text-xl cursor-pointer rounded-full'>
                                        {
                                            wishlist?.some(item => item.id === product.id) ?
                                                <FaHeart className='text-red-500' />
                                                :
                                                <FaRegHeart />
                                        }
                                    </button>
                                    <button onClick={() => dispatch(addToCart(product))} className='bg-white duration-200 delay-75  group-hover:right-1 absolute top-11 md:right-[-30px] text-xl cursor-pointer  rounded-full '>
                                        <FiShoppingCart />
                                    </button>
                                </div>
                                <div className='text-center'>
                                    <h3 title={product.title} className='text-xl font-medium line-clamp-1'>{product.title}</h3>
                                    <p className='font-medium'>{product.price} $</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Products


