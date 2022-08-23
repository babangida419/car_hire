import React from "react";
import Logo from './../../assets/images/logo/logo5.png';
import Img2 from './../../assets/images/logo/2.png';
import Nissan from './../../assets/images/logo/nissan.png';
import BMW from './../../assets/images/logo/bmw.png';
import mercedes from './../../assets/images/logo/mercedes.png';
function Home() {
    return (

      <div className="App">
        
<div ClassName="bg-no-repeat bg-cover bg-center bg-fit w-full" style={{backgroundImage: `url(${Img2})`, padding: "40px 0px 40px 0px"}}>
  <div class="grid lg:grid-cols-2 ml-8 mt-16">

    <div className='md:mt-16 header1' style={{width:"80%"}}>
      <p className="lg:text-4xl font-bold">
        Looking to Save More on
        <br className='hidden lg:inline'/>
        <p className='text-orange-700 mt-2'>Your Rental Car</p>
      </p>
        <p className='mt-5'>
        This text is placeholder text to give you an idea of how this color looks when used 
        as a font color on a black background. The following sentence
        </p>

        <div class="grid lg:grid-cols-4 mt-8">
        <div>
        <button type="button" class="rounded-full text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark: font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Learn More</button>
        </div>
        <div>
        <button type="button" class=" rounded-full text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark: font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Get Started</button>
        </div>
        </div>

  </div>

  <div className='relative hidden sm:block'>
 { /* <img src={Img1} alt="Flowbite Logo" className='absolute'/> */ }
    </div>
  </div>

  <div class="grid grid-cols-6 gap-2 mt-24">

    <div class="col-start-2 col-span-4 ... shadow-xl bg-slate-400	 pt-5 pb-5 pl-5 pr-5">
    <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        Choose a Location
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        Pick up Date
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
        Return Date
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210"/>
    </div>
    <div class="md:w-1/1 px-3">
    <button type="button" class=" tracking-wide rounded-full text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark: font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-7">Search</button>

    </div>
  </div>
  </div>
  

  </div>
</div>

<div class="grid grid-cols-9 gap-4 mt-16">
  <div>
    
  </div>
  
  <div>
  
  </div>

  

  <div>

  <img src={Nissan} width="100"></img>
  </div>

  <div>
  <img src={BMW} width="100"></img>
  </div>

  <div>
  <img src={mercedes} width="100"></img>
  </div>

  <div>
  <img src={Nissan} width="100"></img>
  </div>

  <div>
  <img src={Nissan} width="100"></img>
  </div>

  

</div>
      </div>
    );
  }
  
  export default Home;
  