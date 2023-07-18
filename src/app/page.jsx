import { faAmbulance,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
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
          <div className='mt-16'>Test</div>
      </main>
    </>
    
  )
}
