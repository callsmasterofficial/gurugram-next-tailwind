import React from 'react'

function BusinessCategoriesArea() {
  return (
    <>
    <div>
    <div className=" w-[80%] md:w-[80%] m-auto text-xl font-semibold mt-4">
        <h1>Categories</h1>
      </div>   
      {BusinessData.map((data) =>{
        return(

            <div class="mb-4 relative ">
             <div className="">
            <img
              src={data.image}
              alt="categories"
              className='rounded-md ' 
            />
            </div>
            <div className="Categories-content absolute w-[80%] m-auto text-white top-5">
              <div  className="flex justify-between ">
               <span className='ml-5 font-semibold hover:text-blue-500'>{data.category}</span>
               <img src="https://quomodosoft.com/html/newsprk/assets/images/arrow.svg" alt="" />
              </div>
              
            </div>
          </div>
        )
      } )}
  </div>
</>
  )
}

export default BusinessCategoriesArea

const BusinessData = [
    {
        id: "1",
        image: "https://quomodosoft.com/html/newsprk/assets/images/categories-1.jpg",
        category: "Resturant",
    },
    {
        id: "2",
        image: "https://quomodosoft.com/html/newsprk/assets/images/categories-2.jpg",
        category: "Entertainment",
    },
    {
        id: "3",
        image: "https://quomodosoft.com/html/newsprk/assets/images/categories-3.jpg",
        category: "Financial",
    },
    {
        id: "4",
        image: "https://quomodosoft.com/html/newsprk/assets/images/categories-4.jpg",
        category: "Business",
    },
    {
        id: "5",
        image: "https://quomodosoft.com/html/newsprk/assets/images/categories-5.jpg",
        category: "Scientists",
    },
    {
        id: "6",
        image: "https://quomodosoft.com/html/newsprk/assets/images/categories-6.jpg",
        category: "International's",
    },
]
