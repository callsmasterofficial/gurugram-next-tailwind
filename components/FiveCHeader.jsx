import React from 'react'

export default function FiveCHeader() {
  return (
    <div className="testingComponent bg-red-400">
        <div className="grid md:grid-cols-4 mx-auto" >
      {/* 1st grid */}
            <div className="col-span-1   grid grid-rows-2">
                <div className="relative m-1">
                    <img src="https://images.unsplash.com/photo-1658258338048-c7f6c9d9330d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80" alt="onetwo" className="w-[100%] h-[100%]" />
                    <p className="absolute bottom-1 left-2 right-2 text-white">this is something...</p>
                </div>
                <div className="relative m-1">
                    <img src="https://images.unsplash.com/photo-1658258338048-c7f6c9d9330d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80" alt="" className="w-[100%] h-[100%]" />
                    <p className="absolute bottom-1 left-2 right-2 text-white">this is something...</p>
                </div>
            </div>
      {/* 2nd grid */}
            <div className="col-span-2   grid">
                <div className="relative m-1">
                    <img src="https://www.teztarrar.com/wp-content/uploads/2022/07/oppo-reno-series.jpg" alt="" className='w-[100%] h-[100%]' />
                    <p className="absolute bottom-1 left-2 right-2 text-white">this is something...</p>
                </div>
            </div>
      {/* 3rd grid */}
            <div className="col-span-1   grid grid-rows-2">
                <div className="relative m-1">
                    <img src="https://images.unsplash.com/photo-1658258337810-47c923110511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" className="w-[100%] h-[100%]" />
                    <p className="absolute bottom-1 left-2 right-2 text-white">this is something...</p>
                </div>
                <div className="relative m-1">
                    <img src="https://images.unsplash.com/photo-1658258337810-47c923110511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" className="w-[100%] h-[100%]" />
                    <p className="absolute bottom-1 left-2 right-2 text-white">this is something...</p>
                </div>
            </div>
        </div>
    </div>
  )
}
