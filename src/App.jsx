import React from 'react'
import Navbar from './All.jsx/Navbar'
import Slides from './All.jsx/Slides'
import Vidsection from './All.jsx/Vidsection'
import Services from './All.jsx/Services'
import Imagesection from './All.jsx/Imagesection'
import Gallery1 from './All.jsx/Allgallery/Gallery1'
import Maincompo from './All.jsx/MainCompo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery2 from './All.jsx/Allgallery/Gallery2'
import Gallery3 from './All.jsx/Allgallery/Gallery3'
import Gallery4 from './All.jsx/Allgallery/Gallery4'
import Gallery5 from './All.jsx/Allgallery/Gallery5'




const App = () => {
  return (




    <div>
     
<BrowserRouter>

<Routes>
  
<Route  path="/" element={<Maincompo/>}>
<Route index element={<Gallery1/>}/>
<Route  path="/all" element={<Gallery1/>}/>
<Route  path="/Brand" element={<Gallery2/>}/>
<Route path="/Packaging" element={<Gallery3/>}/>
<Route path="/Uiux" element={<Gallery4/>}/>
<Route path="/Social" element={<Gallery5/>}/>




</Route>

 

</Routes>



</BrowserRouter>    
   

    </div>
  )
}

export default App