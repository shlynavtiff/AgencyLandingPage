import React, { useCallback, useEffect, useState } from 'react'

import BG1 from '../assets/images/desktop/image-header.jpg'
import Icon from '../assets/images/icon-arrow-down.svg'
import EGG from '../assets/images/desktop/image-transform.jpg'
import CUP from '../assets/images/desktop/image-stand-out.jpg'
import ORANGE from '../assets/images/desktop/image-photography.jpg'
import CHERRY from '../assets/images/desktop/image-graphic-design.jpg'
import Client1 from '../assets/images/image-emily.jpg'
import Client2 from '../assets/images/image-thomas.jpg'
import Client3 from '../assets/images/image-jennie.jpg'
import Pic1 from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import Pic2 from '../assets/images/desktop/image-gallery-orange.jpg'
import Pic3 from '../assets/images/desktop/image-gallery-cone.jpg'
import Pic4 from '../assets/images/desktop/image-gallery-sugarcubes.jpg'
import FacebookIcon from '../assets/images/icon-facebook.svg'
import InstagramIcon from '../assets/images/icon-instagram.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'
import PinterestIcon from '../assets/images/icon-pinterest.svg'

const AgencyLandingPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div>
            <div className='relative' >
                <img src={BG1} alt="" className='object-cover bg-center w-full h-[915px] bg-cover' />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h1 className='text-5xl sm:text-6xl md:text-7xl mb-20 '>WE ARE CREATIVES</h1>
                        <img src={Icon} alt="Icon" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row bg-white '>
                <div className='text-black md:w-1/2 flex items-center justify-center flex-col aspect-square  '>
                    <div className='max-w-[400px] text-center sm:text-left px-4 '>
                        <h2 className='mb-4 text-2xl font-bold sm:text-4xl md:text-5xl'>Transform your brand</h2>
                        <p className='mb-4'>We are a full-service creative agency specializing in helping brands grow fast.
                            Engage your clients through compeling visuals that do most of the marketing for you.
                        </p>
                        <a href="/" className='underline decoration-transparent shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]'>LEARN MORE</a>
                    </div>
                </div>
                <div className='md:w-1/2 aspect-square  '>
                    <img src={EGG} alt="" className='object-cover w-full h-full' />
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row-reverse bg-white'>
                <div className='text-black md:w-1/2 flex items-center justify-center flex-col aspect-square  '>
                    <div className='max-w-[400px] text-center sm:text-left px-4'>
                        <h2 className='mb-4 text-2xl font-bold sm:text-4xl md:text-5xl'>Stand out to the right audience</h2>
                        <p className='mb-4'>Using a collaborative formula of designers, researchers, photographers, videographers,
                            and copywriters, we'll build and extend your brand in digital
                        </p>
                        <a href="/" className='underline decoration-transparent shadow-[0px_3px_0px_0px_rgba(0,0,0,1)]'>LEARN MORE</a>
                    </div>
                </div>
                <div className='md:w-1/2 aspect-square  '>
                    <img src={CUP} alt="" className='object-cover w-full h-full' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 relative'>
                    <img src={CHERRY} alt="" className='object-cover w-full' />
                    <div className='absolute inset-0 flex items-center top-[140px] md:top-[200px]'>
                        <div className='flex flex-col items-center max-w-[450px] text-center mx-auto'>
                            <h2 className='text-2xl font-bold mb-1'>Graphic Design</h2>
                            <p className='text-sm font-semibold md:text-md p-2'>Great design makes you memorable. We deliver artwork that underscores your brand
                                message and captures potential clients' attention.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 relative'>
                    <img src={ORANGE} alt="" className='object-cover w-full' />
                    <div className='absolute inset-0 flex items-center top-[140px] md:top-[200px]'>
                        <div className='flex flex-col items-center max-w-[450px] text-center mx-auto'>
                            <h2 className='text-2xl font-bold mb-1'>Photography</h2>
                            <p className='text-sm font-semibold md:text-md p-2'>Increase your credibility by getting the most stunning, high-quality photos
                                the improve your business image.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white text-black min-h-[600px] flex items-center flex-col justify-center py-6'>
                <div className='flex items-center justify-center mb-10'>
                    <h2 className='tracking-widest font-bold text-2xl '>CLIENT TESTIMONIALS</h2>
                </div>

                <div className=' flex flex-col md:flex-row justify-evenly gap-20 p-4'>
                    <div className='flex flex-col items-center text-center'>
                        <img src={Client1} alt="" className='rounded-full w-20 mb-2' />
                        <div className='max-w-[300px] space-y-2'>
                            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met
                                and deadlines were always hit.
                            </p>
                            <p className='text-lg font-bold'>Emily R.</p>
                            <p>Marketing Director</p>
                        </div>

                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <img src={Client2} alt="" className='rounded-full w-20 mb-2' />
                        <div className='max-w-[300px] space-y-2'>
                            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met
                                and deadlines were always hit.
                            </p>
                            <p className='text-lg font-bold'>Thomas S.</p>
                            <p>Marketing Director</p>
                        </div>

                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <img src={Client3} alt="" className='rounded-full w-20 mb-2' />
                        <div className='max-w-[300px] space-y-2'>
                            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met
                                and deadlines were always hit.
                            </p>
                            <p className='text-lg font-bold'>Jennie F.</p>
                            <p>Marketing Director</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div>
                    <img src={Pic1} alt="" />
                </div>
                <div>
                    <img src={Pic2} alt="" />
                </div>
                <div>
                    <img src={Pic3} alt="" />
                </div>
                <div>
                    <img src={Pic4} alt="" />
                </div>
            </div>



            <div className='flex items-center justify-center flex-col text-white min-h-[300px] bg-dark-moderate-cyan space-y-10'>
                <h2 className='text-3xl font-bold'>sunnyside</h2>
                <div className='flex flex-row items-center space-x-14 justify-center'>
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/">Projects</a>
                </div>
                <div className='flex items-center justify-center space-x-4 text-white'>
                    <a href="/" >
                        <img src={FacebookIcon} alt="Facebook" className='w-5 h-5' />
                    </a>
                    <a href="/" >
                        <img src={InstagramIcon} alt="Instagram" className='w-5 h-5' />
                    </a>

                    <a href="/" >
                        <img src={TwitterIcon} alt="Twitter" className='w-5 h-5' />
                    </a>

                    <a href="/" >
                        <img src={PinterestIcon} alt="Pinterest" className='w-5 h-5' />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default AgencyLandingPage
