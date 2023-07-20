"use client";
import { useEffect, useState } from "react";
import CustomModal from '@/components/share/Modal';
import ProductCard from "../share/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement,addToCart } from '@/store/cartReducer';
import slugify from "react-slugify";
import RestRepository from '@/repositories/RestRepository';

import Pagination from '@/components/share/Pagination';

const HomeComponent=()=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const cartState = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [loading,setLoading]=useState(false);
    const [products,setProducts]=useState([]);
    const [totalPage,setTotalPage]=useState(1);

    let isLoaded=0;
    useEffect(() => {
        if(!isLoaded)
            {
                isLoaded=1;
                get();
            }
    },[]);
    const initForm={
        name:'',
        slug_raw:'',
        slug:'',
        price:0,
        dis_start_date:null,
        dis_end_date:null
    };
    const [formData,setFormData]=useState(initForm);
    const openModal = (status) => {
        setModalIsOpen(status);
    };
    const get=async(pageId)=>{
        let endPoint='/product/index';
        if(pageId != undefined)
            endPoint=endPoint+"?pageId="+pageId;
        const api=await RestRepository.get(endPoint,{});
        if(api.error == undefined){
            setProducts(api.results);
            setTotalPage(api.total);
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData);
        if(formData.name == '')
            alert('Name is required');
        else if(formData.slug == '')
            alert('slug is required');
        else if(formData.price == '')
            alert('Price is required');
        else{
            setLoading(true);
            const api=await RestRepository.post('/product/store',formData);
            console.log('api=',api);
            alert('Success');
            get();
            setFormData(Object.assign(initForm,{}));
            setModalIsOpen(false);
            // if(api.error == undefined){
            //     alert('Success');
            //     setFormData(Object.assign(initForm,{}));
            //     setProducts(api.results);
            //     setTotalPage(api.total);
            //     setModalIsOpen(false);
            // }
            setLoading(false);
        }
    }
    const handleGenerate=()=>setFormData({...formData,slug:slugify(formData.slug)});
    const handleOnChange=e=>setFormData({...formData,[e.target.name]:e.target.value});
    const handleAddToCart=async(item,type)=>{
        item.product_id=item.id;
        item.qty=1;
        if(type == 1)
            {
                const api=await RestRepository.post('/cart/store',item);
                if(api.erro == undefined)
                    dispatch(addToCart(item));

            }
        else if(type == 2)
            {
                item.type=1;
                const api=await RestRepository.post('/cart/inc_decr',item);
                if(api.erro == undefined)
                    dispatch(increment(item));
            }
        else if(type == 3){
            item.type=2;
                const api=await RestRepository.post('/cart/inc_decr',item);
                if(api.erro == undefined)
                    dispatch(decrement(item));
        }
            
    }
    const handleSearch=async(e)=>{
        const api=await RestRepository.get(`/product/index?name=${e.target.value}`,{});
        console.log('api=',api);
        if(api.error == undefined){
            setProducts(api.results);
            setTotalPage(api.total);
        }
    }
    const items=products.map(item => {
        const isExist=cartState.cart.find(cart => cart.product_id == item.id);
        return(
            <ProductCard handleAddToCart={handleAddToCart} key={item.id} item={item} isExist={isExist}/>
        )
    })
    const handlePageClick=(page)=>{
        get(page);
    }

    return(
        <>
            <main className="container mx-auto min-h-screen">
                <div className='mt-16'>
                    <div class="flex">
                        <div class="flex-auto w-64">
                            <input
                                onChange={handleSearch}
                                name="psearch" 
                                className="border-2" 
                                style={{width:'100%',height:'40px',borderRadius:'5px'}} 
                                placeholder="Search Product" />
                        </div>
                        <div class="flex-none">
                            <button
                                className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => openModal(true)}>
                                Add Product
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-wrap mt-4">
                        <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-4">
                            {items}
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <Pagination handlePageClick={handlePageClick} totalPage={totalPage}></Pagination>
                </div>
            </main>
            
            {
                modalIsOpen ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Product
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => openModal(false)}>
                                        <span className="text-black text-2xl">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <div>
                                        <form className="mt-1 space-y-6" onSubmit={handleSubmit}>
                                            <div class="border-b border-gray-900/10 pb-12 p-5">
                                                <h2 class="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
                                                <div class="grid grid-cols-1  sm:grid-cols-6">
                                                    <div class="sm:col-span-6">
                                                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                                                        <div class="mt-2">
                                                            <input id="product_name" name="name" 
                                                                autocomplete="Product Name"
                                                                value={formData.name}
                                                                onChange={handleOnChange} 
                                                                class="block w-full rounded-md border-0 py-1.5 
                                                                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                                                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                                                focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="slug" 
                                                            class="block text-sm font-medium leading-6 
                                                            text-gray-900">Slug</label>
                                                        <div class="mt-2">
                                                            <div class="flex items-center rounded-md border-2 px-1 py-1">
                                                                <input 
                                                                    onChange={handleOnChange} 
                                                                    class="appearance-none w-full text-gray-700 mr-3 py-1 
                                                                        px-2 leading-tight rounded-md border-0 focus:outline-none" 
                                                                    type="text"
                                                                    name="slug"
                                                                    value={formData.slug} 
                                                                    placeholder="Slug" 
                                                                />

                                                                <button onClick={()=>handleGenerate()} class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 
                                                                    border-teal-500 hover:border-teal-700 text-xs border-4 
                                                                    text-white rounded" type="button">
                                                                        Generate
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="price" 
                                                        class="block text-sm font-medium leading-6 
                                                        text-gray-900">Price</label>
                                                        <div class="mt-2">
                                                            <input
                                                                onChange={handleOnChange}
                                                                value={formData.price} 
                                                                type="text" name="price" 
                                                                id="price" autocomplete="Price" 
                                                                class="block w-full rounded-md border-0 py-1.5 
                                                                    text-gray-900 shadow-sm ring-1 ring-inset 
                                                                    ring-gray-300 placeholder:text-gray-400 
                                                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                                                    sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3">
                                                        <label for="dis_start" 
                                                        class="block text-sm font-medium 
                                                        leading-6 text-gray-900">Discount Start</label>
                                                        <div class="mt-2">
                                                            <input
                                                                onChange={handleOnChange}
                                                                value={formData.dis_start_date} 
                                                                type="date" name="dis_start_date" 
                                                                id="dis_start" autocomplete="Discount Start" 
                                                                class="block w-full rounded-md border-0 py-1.5 
                                                                    text-gray-900 shadow-sm ring-1 ring-inset 
                                                                    ring-gray-300 placeholder:text-gray-400 
                                                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                                                    sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="sm:col-span-3">
                                                        <label for="dis_end" 
                                                        class="block text-sm font-medium 
                                                        leading-6 text-gray-900">Discount End</label>
                                                        <div class="mt-2">
                                                            <input
                                                                onChange={handleOnChange}
                                                                value={formData.dis_end_date} 
                                                                type="date" name="dis_end_date" 
                                                                id="dis_end" autocomplete="Discount Start" 
                                                                class="block w-full rounded-md border-0 py-1.5 
                                                                    text-gray-900 shadow-sm ring-1 ring-inset 
                                                                    ring-gray-300 placeholder:text-gray-400 
                                                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                                                    sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                    <div class="sm:col-span-3 mt-2">
                                                        <button disabled={loading?true:null} class="flex-shrink-0 px-1 py-1 bg-teal-500 hover:bg-teal-700 
                                                            border-teal-500 hover:border-teal-700 text-xs border-4 
                                                            text-white rounded" type="submit">
                                                            {loading ? 'Loading..':'Submit'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => openModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ): null
            }
            
        </>
    )
}
export default HomeComponent;