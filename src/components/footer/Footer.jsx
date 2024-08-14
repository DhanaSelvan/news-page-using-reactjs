import './Footer.css'
import playStore from '../footer/google-playstore-icon.svg'
import appleStore from '../footer/apple-store-icon.svg'

const Footer = () => {
    return (
        <>
        <footer className='px-5 md:px-16 mt-6 bg-gray-200 py-5'>
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-bold'>South Express</h2>
                </div>
                <div className='w-1/2 flex justify-end gap-5'>
                    <img src={playStore} alt="download in playstore" />
                    <img src={appleStore} alt="download in playstore" />
                </div>
            </div>
            <div className='py-8 flex gap-6'>
                <div className='border-t-2 border-black w-screen md:w-1/2 lg:w-1/3'>
                    <h3 className='font-bold mt-3 text-lg'>Sports</h3>
                    <ul className='list-inside list-disc'>
                        <li className='my-2'><a href="">Cricket</a></li>
                        <li className='my-2'><a href="">Football</a></li>
                        <li className='my-2'><a href="">Hockey</a></li>
                        <li className='my-2'><a href="">Tennis</a></li>
                        <li className='my-2'><a href="">Athletics</a></li>
                        <li className='my-2'><a href="">Motorsport</a></li>
                        <li className='my-2'><a href="">Races</a></li>
                        <li className='my-2'><a href="">Other Sports</a></li>
                    </ul>
                </div>
                <div className='border-t-2 border-black w-screen md:w-1/2 lg:w-1/3'>
                    <h3 className='font-bold mt-3 text-lg'>Contact us</h3>
                    <ul className='list-inside list-disc'>
                        <li className='my-2'><a href="">Contact us</a></li>
                        <li className='my-2'><a href="">Social Media</a></li>
                        <li className='my-2'><a href="">Advertise With Us</a></li>
                    </ul>
                </div>
                <div className='border-t-2 border-black w-screen md:w-1/2 lg:w-1/3'>
                    <h3 className='font-bold mt-3 text-lg'>Trending Today</h3>
                    <ul className='list-inside list-disc'>
                        <li className='my-2'><a href="">Jio Data traffic Share touches 60%</a></li>
                        <li className='my-2'><a href="">Made by Google event 2024: When and Where to Watch</a></li>
                        <li className='my-2'><a href="">IND vs SL, 3st ODI</a></li>
                        <li className='my-2'><a href="">Gold Rate Today</a></li>
                        <li className='my-2'><a href="">Silver Rate Today</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='text-gray-700 mb-3 text-sm'><a href="#">TERMS OF USE</a> / <a href="#">PRIVACY POLICY</a></p>
                <p className='text-gray-600 text-sm font-semibold'>Copyright &#169; 2024, THE PUBLISHING PVT. LTD. or its affialted companies. All rights reserved.</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;