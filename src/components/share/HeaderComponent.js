"use client";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartBulk, removeItem } from '@/store/cartReducer';
import RestRepository from "@/repositories/RestRepository";

const HeaderComponent=()=>{
    const [openRight, setOpenRight] = useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
    const cartState = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        get();
    },[]);

    const get=async()=>{
        const api=await RestRepository.get('/cart',{});
        if(api.error == undefined)
            {
                dispatch(addToCartBulk(api));
            }
    }

    const cartContent=cartState.cart.map(item => {
        return(
            <li key={item.product_id} class="flex py-6">
                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src={item.image} alt="" class="h-full w-full object-cover object-center"/>
                </div>
                <div class="ml-4 flex flex-1 flex-col">
                    <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                            <a href="#">{item.name}</a>
                            </h3>
                            <p class="ml-4">{item.price}</p>
                        </div>
                    </div>
                    <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty {item.qty}</p>
                        <div class="flex">
                            <button type="button" onClick={()=>dispatch(removeItem(item))}
                            class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                    </div>
                </div>
            </li>
        )
    });

    return(
        <>
            <header className='w-full py-5'>
                <div className='container mx-auto'>
                    <span onClick={openDrawerRight}>
                        <div className="flex justify-between">
                            <div>
                                <h2 className='text-[#50d71e] text-lg'>E-Bazaar</h2>
                            </div>
                            <div className="flex justify-center border-2 p-1" >
                                <div>
                                    <FontAwesomeIcon
                                    icon={faShoppingCart} 
                                    />
                                </div>
                                <div className='ml-1'>Cart <span>({cartState.cart.length})</span></div>
                            </div>
                        </div>
                    </span> 
                </div>
            </header>
            <div>
                <Drawer
                    placement="right"
                    open={openRight}
                    onClose={closeDrawerRight}
                    className="p-4">
                    <div className="mb-6 flex items-center justify-between">
                        {/* <Typography variant="h5" color="blue-gray">
                            My Cart
                        </Typography> */}
                        <div class="mt-8">
                            <div class="flow-root">
                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                    {cartContent}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
        
    )
}
export default HeaderComponent;