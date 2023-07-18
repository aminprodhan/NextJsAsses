import { faAmbulance,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react';

import CustomModal from '@/components/share/Modal';

export default function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <header className='w-full py-5 sticky top-0'>
          <div className='container mx-auto'>
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
                    <div className='ml-1'>Cart <span>(6)</span></div>
                </div>
            </div> 
          </div>
      </header>
      <main className="container mx-auto min-h-screen">
          <div className='mt-16'>
              <div class="flex flex-wrap -mx-4">
                <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="example1.jpg" alt="Example Image" />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">Card Title 1</div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptatibus, alias minima quaerat sed natus, illum rem temporibus inventore tempore doloribus dignissimos error maxime, rerum adipisci. Molestias, aperiam aliquam quae voluptate?
                      </p>
                    </div>
                    <div class="px-6 py-4">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
                    </div>
                  </div>
                </div>
                
                <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="example1.jpg" alt="Example Image" />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">Card Title 1</div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptatibus, alias minima quaerat sed natus, illum rem temporibus inventore tempore doloribus dignissimos error maxime, rerum adipisci. Molestias, aperiam aliquam quae voluptate?
                      </p>
                    </div>
                    <div class="px-6 py-4">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
                    </div>
                  </div>
                </div>
                
                <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8">
                </div>
                
                <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-4 mb-8">
                    <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Open Modal
                    </button>
                </div>
              </div>
          </div>
      </main>
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Modal Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Close Modal
        </button>
      </CustomModal>
    </>
    
  )
}
