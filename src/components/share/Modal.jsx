import React from 'react';
import Modal from 'react-modal';

const CustomModal = (props) => {
  return (
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
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                          </span>
                      </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                      <div>
                          <form className="mt-1 space-y-6" action="#" method="POST">
                              <div class="border-b border-gray-900/10 pb-12 p-5">
                                  <h2 class="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
                                  <div class="grid grid-cols-1  sm:grid-cols-6">
                                      <div class="sm:col-span-6">
                                          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                                          <div class="mt-2">
                                              <input id="product_name" name="product_name" 
                                                  autocomplete="Product Name" 
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
                                                  <input class="appearance-none w-full text-gray-700 mr-3 py-1 
                                                  px-2 leading-tight rounded-md border-0 focus:outline-none" 
                                                  type="text" placeholder="Jane Doe" aria-label="Full name" />
                                                  <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 
                                                  border-teal-500 hover:border-teal-700 text-xs border-4 
                                                  text-white rounded" type="button">
                                                      Generate
                                                  </button>
                                              </div>
                                              {/* <input type="text" 
                                                  name="slug" id="slug" 
                                                  autocomplete="Slug" 
                                                  class="block w-full rounded-md border-0 py-1.5 
                                                  text-gray-900 shadow-sm ring-1 ring-inset 
                                                  ring-gray-300 placeholder:text-gray-400 
                                                  focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                                  sm:text-sm sm:leading-6" /> */}
                                          </div>
                                      </div>
                                      <div class="sm:col-span-3">
                                          <label for="price" 
                                          class="block text-sm font-medium leading-6 
                                          text-gray-900">Price</label>
                                          <div class="mt-2">
                                              <input 
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
                                                  type="date" name="dis_start" 
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
                                                  type="date" name="dis_end" 
                                                  id="dis_end" autocomplete="Discount Start" 
                                                  class="block w-full rounded-md border-0 py-1.5 
                                                      text-gray-900 shadow-sm ring-1 ring-inset 
                                                      ring-gray-300 placeholder:text-gray-400 
                                                      focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                                      sm:text-sm sm:leading-6" />
                                          </div>
                                      </div>
                                      <div class="sm:col-span-3 mt-2">
                                          <button class="flex-shrink-0 px-1 py-1 bg-teal-500 hover:bg-teal-700 
                                              border-teal-500 hover:border-teal-700 text-xs border-4 
                                              text-white rounded" type="button">
                                              Submit
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
                      <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => openModal(false)}>
                          Save Changes
                      </button>
                  </div>
              </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CustomModal;
