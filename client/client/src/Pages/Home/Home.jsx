import  React , {useEffect} from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import OneSignal from "react-onesignal"


const Home = () => {
  useEffect(() => {
    OneSignal?.init({
      appId: "7b10ac73-e577-4754-ada9-8f30ae0cd0f1"
   });
}, []);
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
      </div>
      
    </div>
  )
}

export default Home
