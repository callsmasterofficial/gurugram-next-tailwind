import React from 'react'
import { Facebook, Instagram, Twitter, Youtube,Telegram, Whatsapp } from './icons'

export default function NewSocials() {
  return (
    <>
        <div className="">
            {/* Social Heading */}
            <div className="text-white font-bold px-2 py-1 mx-3 mb-3 w-fit titleSkew -skew-x-3">
                <p>Follow us</p>
            </div>

            {/* Social Icons */}
            <div className="grid grid-cols-2 p-2">
                {/* Facebook */}
                <div className="col-span-1 flex flex-col md:flex-row text-center justify-center items-center bg-[#4267B2] border-2 m-1">
                    <div className="mt-2 md:mt-0">
                        <Facebook color="white"/>
                    </div>
                    <div className="text-[12px] font-bold text-white m-1 lg:m-2">
                        <p>52,456</p>
                        <p>Followers</p>
                    </div>
                </div>

                {/* Twitter */}
                <div className="col-span-1 flex flex-col md:flex-row text-center justify-center items-center bg-[#1DA1F2] border-2 m-1">
                    <div className="mt-2 md:mt-0">
                        <Twitter color="white"/>
                    </div>
                    <div className="text-[12px] font-bold text-white m-1 lg:m-2">
                        <p>52,456</p>
                        <p>Followers</p>
                    </div>
                </div>

                {/* Youtube */}
                <div className="col-span-1 flex flex-col md:flex-row text-center justify-center items-center bg-[#FF0000] border-2 m-1">
                    <div className="mt-2 md:mt-0">
                        <Youtube color="white"/>
                    </div>
                    <div className="text-[12px] font-bold text-white m-1 lg:m-2">
                        <p>52,456</p>
                        <p>Followers</p>
                    </div>
                </div>

                {/* Instagram */}
                <div className="col-span-1 instagram flex flex-col md:flex-row text-center justify-center items-center bg-[#4267B2] border-2 m-1">
                    <div className="mt-2 md:mt-0">
                        <Instagram color="white"/>
                    </div>
                    <div className="text-[12px] font-bold text-white m-1 lg:m-2">
                        <p>52,456</p>
                        <p>Followers</p>
                    </div>
                </div>
                {/* Telegram */}
                <div className="col-span-1 flex flex-col md:flex-row text-center justify-center items-center bg-[#31a8e0] border-2 m-1">
                    <div className="mt-2 md:mt-0">
                        <Telegram color="white"/>
                    </div>
                    <div className="text-[12px] font-bold text-white m-1 lg:m-2">
                        <p>52,456</p>
                        <p>Followers</p>
                    </div>
                </div>

                {/* Whatsapp */}
                <div className="col-span-1 flex flex-col md:flex-row text-center justify-center items-center bg-[#1fe783] border-2 m-1">
                    <div className="mt-2 md:mt-0">
                        <Whatsapp color="white"/>
                    </div>
                    <div className="text-[12px] font-bold text-white m-1 lg:m-2">
                        <p>52,456</p>
                        <p>Followers</p>
                    </div>
                </div>

            </div>   
        </div>   
    </>
  )
}
