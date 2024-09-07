import React from 'react'
import Navbar from './Navbar'
import Slides from './Slides'
import Vidsection from './Vidsection'
import Services from './Services'
import Imagesection from './Imagesection'
import Gallery1 from './Allgallery/Gallery1'
import Rebranding from './Rebranding'
import { Outlet } from 'react-router-dom'
import ContactForm from './ContactForm'
import Footer from './Footer'
const MainCompo = () => {
  return (
    <div>
 <Navbar/>
    <Slides/>
    <Vidsection/>
    <Services/>
    <Imagesection/>
    <Outlet />
    <Rebranding/>
    <ContactForm/>
<Footer/>

    

    </div>
  )
}

export default MainCompo