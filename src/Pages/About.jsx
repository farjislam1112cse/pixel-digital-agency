import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeIn } from '../varients';
const About = () => {

    const [ref, inView] = useInView(
        {
            threshold: "0.5",
        }
    )

    return (
        <div id='about' className='section' ref={ref}>
            <div className='container mx-auto flex flex-col-reverse gap-y-2 gap-x-4 lg:flex-row justify-between items-center'>
                {/* image */}
                <motion.div variants={fadeIn('right', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=' w-[100%] lg:w-[40%] mix-blend-lighten ' >
                    <img className='max-w-[100%] mx-auto block' src='/src/assets/Images/about-bg.jpg' alt="" />
                </motion.div>
                {/* text */}
                <motion.div variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='w-[100%] lg:w-[50%] text-center lg:text-left '>
                    <p className='text-2xl text-slate-300'>Pixel's Story</p>
                    <h2 className='  text-center lg:text-left mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[0.8]'>About 
                        <span className='text-[#1ac54d]'> Us</span></h2>
                    {/* about description */}
                    <div className='text-xs space-y-4'>
                        <p>At Pixel, we are dedicated to elevating your brand’s online presence through cutting-edge digital marketing strategies. Our expertise includes SEO, social media management, PPC advertising, and content creation. We tailor our solutions to meet your unique needs, ensuring impactful results and measurable growth. With a focus on creativity and data-driven insights, our team is committed to delivering innovative solutions that resonate with your audience and drive success. Partner with Pixel to transform your digital landscape and achieve your marketing goals with precision and flair.

                        </p>

                    </div>
                    {/* Ctl */}
                    <div className='flex gap-x-6 max-w-max mx-auto lg:mx-0 mt-8 items-center '>
                        <button className='btn btn-lg'>contact me</button>
                        <a href='' className='text-gradient btn-link'>my protfolio</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;