import React from 'react'

const About = () => {
  return (
    <div className=' px-2 sm:px-4 py-2 bg-white dark:bg-gray-800'>

    <section className='text-3xl text-white text-center mb-8 capitalize' >
      <h2> What do we do</h2>
    </section>
      {/* <!-- Section: Design Block --> */}
  <section className="mb-32">
    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
        <div className="flex lg:py-12">
          <img src="https://mdbootstrap.com/img/new/standard/people/058.jpg" className="lg:ml-[50px] z-10 w-full rounded-lg shadow-lg"
            alt="" />
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
        <div
          className="bg-yellow-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
          <div className="lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">Our Objective</h2>
            <p className="mb-6 pb-2 lg:pb-0">
            To stand by people who are in need of help.
            To enhance youth involvement for creating a better society.
            To encourage the students from backward places in personal development and manifest their talents.
            Work for women enpowerment to provide them with a life of dignity.To improve assist and empower women and children of their rights and opportunities to live better, safer and fuller lives
            </p>

            <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best team
              </p>

              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best quality
              </p>

              <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best experience
              </p>
            </div>

            <p>
            To mobilize resources and establish educational opportunities for vulnerable children. Also we raise awareness and inspire understanding of problems related to gender based violence,he impact of domestic violence on children’s emotional and psychological wellbeing and to empower women in actively participating in development and social change that would enable a more stable home environment for children.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
  <section className="mb-32">
    <div className="flex flex-wrap">
      
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 mb-12 lg:mb-0">
        <div
          className="bg-yellow-500 h-full rounded-lg p-6 lg:pr-12 text-white flex items-center text-center lg:text-left">
          <div className="lg:pr-12">
            <h2 className="text-3xl font-bold mb-6">Our Vision and Mission</h2>
            <p className="mb-6 pb-2 lg:pb-0">
            To open An Ashram and A School as well as to Bring transformation for the betterment of the Society and Environment.
            </p>
            <p>
            Our mission is to help people in need and to restore hope among the ones who are enfeebled by miserable life. Being among beings we want to develop personal responsibility,accountability and self reliance through education,using principles of Faith,Hope and Love in the Society.
            </p>
          </div>
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12">
        <div className="flex lg:py-12">
          <img src="https://mdbootstrap.com/img/new/standard/people/058.jpg" className="lg:mr-[50px] z-10 w-full rounded-lg shadow-lg"
              alt="" />
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default About