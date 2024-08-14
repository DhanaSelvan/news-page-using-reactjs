import './Header.css'

const Header = () => {
    return (
        <>
        <header className='bg-blue-200 md:px-16 px-5 py-5 flex shadow-lg'>
            <div className='w-1/2'>
                <h2 className='text-2xl font-bold'>South Express</h2>
            </div>
            <div className='w-1/2 flex items-center justify-end'>
                <button className='mx-3 font-semibold px-2 py-1 bg-red-600 rounded-md text-red-50 hover:bg-red-800 transition'>Subcribe</button>
            </div>
        </header>
        </>
    )
}

export default Header;