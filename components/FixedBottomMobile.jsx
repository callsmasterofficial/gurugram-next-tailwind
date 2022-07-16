import React from 'react';
import { Facebook } from './icons';

export default function FixedBottomMobile() {
  return (
    <div className="bg-black text-white w-[100%] fixed sm:hidden left-0 bottom-0 z-50 grid grid-cols-4">
        <div className="col-span-1 mx-auto text-center"><Facebook /></div>
        <div className="col-span-1 mx-auto text-center">two</div>
        <div className="col-span-1 mx-auto text-center">three</div>
        <div className="col-span-1 mx-auto text-center">four</div>
    </div>
  )
}
