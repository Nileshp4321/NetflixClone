import React from 'react'
import "../App.css";
const Page2 = () => {
  return (
    <>
      <div className='page2Container container-fluid h-100 text-gray-100  w-100 page2 d-flex justify-content-center text-center align-items-center mt-2'>
        <div className='text1 col-6  text-justify text-center innerImg text-justify '>
          <h1 className=' text-5xl text-wrap mb-3 '>Enjoy on your TV</h1>
          <p className='text-break text-2xl '>Watch on smart TVs, PlayStation, Xbox,<p > Chromecast, Apple TV, Blu-ray players and more.</p>    </p>
        </div>
        {/* <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' /> */}
        <div className='img1 col-6  d-flex justify-content-center text-center align-items-center'>
          <video className='videoAnimation w-75' data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="">
            <source className='' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
          </video>
        </div>

      </div>
    </>
  )
}

export default Page2
