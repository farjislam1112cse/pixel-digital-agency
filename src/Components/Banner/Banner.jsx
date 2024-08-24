import React from 'react';
import './banner.css';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="video-banner">
            {/* Video element for banner */}
            <video className="video-banner__video" autoPlay loop muted playsInline>
                <source src="src/assets/vedio/bannerVedio.mp4" type="video/mp4" />
                {/* Add more source tags if you have different formats */}
                Your browser does not support the video tag.
            </video>
            {/* Content over the video */}
            <div className="video-banner__overlay"></div>
            <div className="video-banner__content">
                <h1 className='text-2xl p-4  inline-block'>Welcome to Pixel For Business</h1>
                {/* <p className='text-2xl t font-bold'>"Maximize Your Reach with Pixel-Perfect Marketing Strategies."</p> */}
                <div className='mt-5'>
                    <TypeAnimation wrapper='span' repeat={Infinity} speed={50} className='text-8xl font-bold' sequence={[
                        'Maximize ',
                        2000,
                        ' Your Reach ',
                        2000,
                        ' with Pixel-Perfect',
                        2000,
                        ' Solutions',
                        2000,
                    ]}></TypeAnimation>
                </div>

                <button className='btn btn:hover py-2 btn-lg mt-8 '> Contact Us</button>


            </div>
        </div>
    )
};

export default Banner;