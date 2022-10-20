
import React from 'react'

const bgImg = {
  backgroundPosition: `50%`,
  backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')`,
  height: `350px`
}

const Home = () => {
  return (
    <div className='h-full px-2 sm:px-4 py-2 bg-white dark:bg-gray-800'>
      <div class="relative overflow-hidden bg-no-repeat bg-cover" style={bgImg}>
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/[.75]">
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h3 class="text-3xl font-bold mb-8 uppercase">Welcome To</h3>
              <h1 class="text-5xl font-bold mt-0 mb-6 uppercase">সপোন-বাস্তৱায়িত কৰাৰ প্ৰয়াস</h1>
              <h3 class="text-3xl font-bold mb-8 uppercase">ESTD: 2018</h3>
              <blockquote class="text-3xl italic font-semibold text-gray-900 dark:text-white">
                  <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path></svg>
                  <p >সপোনৰ বাট বুলি,মানুহৰ মাজত,মানুহৰ বাবে <br />
on the road to Dreams,with people, for people</p>
              </blockquote>

            </div>
          </div>
        </div>
      </div>
      <div className='h-72 bg-white dark:bg-black'> 
      </div>
    </div>
  )
}

export default Home