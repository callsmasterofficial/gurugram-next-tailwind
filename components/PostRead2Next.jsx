import React from 'react'

export default function PostRead2Next() {
  return (
    <div className="m-auto grid md:grid-cols-2 border-2 p-3 mt-3">
        <div className="mx-1 cursor-pointer col-span-1 pt-1">
            <div className="">
                <img src="https://teztarrar.com/wp-content/uploads/2022/07/2022-07-14.jpg" alt="read next article i-1" />
            </div>
            <div className="m-2 hover:text-red-500">
                <p><a href="https://www.teztarrar.com/religion/chanting-this-mantra-while-offering-water-in-tulsi-will-benefit-1000-times/">तुलसी में जल अर्पित करते समय ये मंत्र बोलने से होगा 1000 गुना फायदा</a></p>
            </div>
        </div>
        <div className="mx-1 cursor-pointer col-span-1 pt-1">
            <div>
                <img src="https://teztarrar.com/wp-content/uploads/2022/07/14-july-6.jpg" alt="read next article i-2" />
            </div>
            <div className="m-2 hover:text-red-500">
                <p><a href="https://www.teztarrar.com/auto/now-you-can-drive-these-luxurious-cars-on-the-road-for-the-cost-of-the-bike/">अब बाइक के खर्च में आप सड़क पर दौड़ा सकते हैं ये आलीशान कारें</a></p>
            </div>
        </div>

    </div>
  )
}
