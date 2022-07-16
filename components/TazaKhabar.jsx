import React from 'react'

function TazaKhabar() {
    return (
        <>


<div className='p-2 bg-black text-white'>
    <p>Taza Khabar</p>
</div>
            <div className='grid grid-cols-2'>
                {TazaKhabarData.map((data) => {

                    return (
                        <>
                            <div className='col-span-1 p-2'>
                                <img src={data.image} />
                                <h2> {data.description} </h2>

                            </div>
                        </>

                    )

                })}
            </div>


        </>
    )
}

export default TazaKhabar


const TazaKhabarData = [
    {
        id: "1",
        image: "https://www.teztarrar.com/wp-content/uploads/2022/07/oppo-reno-series-390x220.jpg",
        description:
            "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    },
    {
        id: "2",
        image: "https://www.teztarrar.com/wp-content/uploads/2022/07/oppo-reno-series-390x220.jpg",
        description:
            "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    },
    {
        id: "3",
        image: "https://www.teztarrar.com/wp-content/uploads/2022/07/oppo-reno-series-390x220.jpg",
        description:
            "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    },
    {
        id: "4",
        image: "https://www.teztarrar.com/wp-content/uploads/2022/07/oppo-reno-series-390x220.jpg",
        description:
            "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
    },
];
