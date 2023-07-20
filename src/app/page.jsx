import { faAmbulance,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import HomeComponent from '@/components/home/HomeComponent';
import HeaderComponent from '@/components/share/HeaderComponent';
export default function Home() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HomeComponent></HomeComponent>
    </>
    
  )
}
