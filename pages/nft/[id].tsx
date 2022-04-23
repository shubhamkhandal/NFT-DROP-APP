import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {

   // Meta auth functionality
   const connectWithMetamask  = useMetamask()
   const address = useAddress()
   const disconnect = useDisconnect()

   return (
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
         {/* left side */}
         <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
            <div className="flex flex-col items-center justify-center lg:min-h-screen">
               <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
                  <img 
                     src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png" 
                     alt="img" 
                     className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" 
                  />
               </div>
               <div className="text-center p-5">
                  <h1 className="text-4xl font-bold text-white">NFT Challenge</h1>
                  <h2 className="text-xl text-gray-300">A collection of NFT who live & breathe React!</h2>
               </div>
            </div>
         </div>
         {/* right side */}
         <div className="p-12 lg:p-4 lg:col-span-6">
            {/* header */}
            <header className="flex justify-between items-center">
               <h1>The <span className="font-bold text-rose-400 text-xl">NFT</span> Market Place</h1>
               <button 
                  onClick={() => address ? disconnect() : connectWithMetamask()}
                  className="
                     rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-1 lg:text-base
                  "
               >
                  {
                     address ? "Disconnect" : "Connect"
                  }
                  
               </button>
            </header>
            <hr className="border my-2"/>
            {
               address && (
                  <p className="text-center text-xs text-rose-400">
                     You're logged in with wallet {address.substring(0,5)}...{address.substring(address.length - 5)}
                  </p>
               )
            }

            {/* content */}
            <div className="flex flex-col flex-1 items-center mt-10 space-y-5 text-center lg:space-y-0">
               <img 
                  src="https://cdn.sanity.io/images/9ep8u6nk/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp" 
                  alt="img"
                  className="
                     w-80
                     object-cover
                     lg:h-40
                     pb-10
                  " 
               />
               <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
                  The NFT Ape codeing club | NFT Drop
               </h1>
               <p className="text-green-500 pt-2 text-xl">
                  13/21 NFT's claimed
               </p>
            </div>

            {/* mint button */}
            <button className="mt-10 h-16 w-full bg-red-600 text-white font-bold rounded-full">
               Mint NFT (0.01 ETH)
            </button>
         </div>
      </div>
   )
}

export default NFTDropPage
