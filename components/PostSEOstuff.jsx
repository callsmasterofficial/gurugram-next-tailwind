import React from 'react'

export default function PostSEOstuff() {
  return (
    <div className=" p-2 mt-2">
        {/* Next Article Link */}
        <div className="flex flex-wrap p-2">
            <p>ये भी पढ़े:</p>
            <p><a href="#" className="text-red-500">मात्र 7 हजार रुपये में मिलेगा iPhone 13 Pro जैसा दिखता फोन, मिलेंगे तीन रियर कैमरे</a></p>
        </div>
        {/* Tags for mapping */}
        <div className="">
            {SEOdata.map((data)=>{
                return (
                <p key={data.id} className="inline-block m-2 text-center w-fit bg-gray-300 p-2 text-[12px] font-bold cursor-pointer hover:text-red-500">{data.tag}</p>
            )})}

        </div>
    </div>
  )
}


const SEOdata = [
    {
        id: "1",
        tag: "#Flipkart"
    },
    {
        id: "2",
        tag: "#Flipkart Electronics Sale"
    },
    {
        id: "3",
        tag: "#Flipkart Sale"
    },
    {
        id: "4",
        tag: "#iPhone 12"
    },
    {
        id: "5",
        tag: "#iPhone 12 Battery"
    },
    {
        id: "6",
        tag: "#iPhone 12 Camera"
    },
    {
        id: "7",
        tag: "#iPhone 12 Display"
    },
    {
        id: "8",
        tag: "#iPhone 12 Features"
    },
    {
        id: "9",
        tag: "#iPhone 12 Flipkart Sale"
    },
    {
        id: "10",
        tag: "#iPhone 12 Latest News"
    },
    {
        id: "11",
        tag: "#Flipkart"
    },
    {
        id: "12",
        tag: "#Flipkart Electronics Sale"
    },
    {
        id: "13",
        tag: "#Flipkart Sale"
    },
    {
        id: "14",
        tag: "#iPhone 12"
    },
    {
        id: "15",
        tag: "#iPhone 12 Battery"
    },
    {
        id: "16",
        tag: "#iPhone 12 Camera"
    },
    {
        id: "17",
        tag: "#iPhone 12 Display"
    },
    {
        id: "18",
        tag: "#iPhone 12 Features"
    },
    {
        id: "19",
        tag: "#iPhone 12 Flipkart Sale"
    },
    {
        id: "20",
        tag: "#iPhone 12 Latest News"
    },
    
]
