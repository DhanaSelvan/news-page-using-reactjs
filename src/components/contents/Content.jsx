import './Content.css'
import cmImg from './cm.jpeg'
import landSlide from './land.jpg'

const Content = () => {
    return (
        <>
        <main className='flex flex-wrap px-5 lg:px-16 my-6'>
            <section className='w-full rounded-md flex justify-center mb-6'>
                <img src = { cmImg } alt = "cm of Tamil Nadu Image" className='w-screen'/>
            </section>
            <section>
                <h2 className='text-3xl font-bold'>"Tamil Pudhalvan" Scheme launched in Southern Districts.</h2>
                <h3 className='text-lg font-semibold my-5 lg:w-1/2 text-justify'>Monthly assistance of ₹1,000 is given to college students boys who have completed their studies in government or aided schools in Tamil medium of instruction; it ensures unhindered higher studies for students of colleges, polytechnics and Industrial Training Institutes.</h3>
                <p className='text-gray-600'><span className='text-red-600'>Updated</span> - August 09, 2024 09:01pm IST</p>
            </section>
            <section className='my-5'>
                <p className='text-justify'>Tamil Nadu Assembly Speaker M. Appavu launched ‘Tamil Pudhalvan’ scheme, which will ensure disbursal of monthly assistance of ₹1,000 to 6,361 boys pursuing their undergraduate degrees in 69 colleges after completing their schooling in government or government-aided schools in Tamil medium of instruction.</p>
                <p className='text-justify mt-2'>In the presence of Collector K.P. Karthikeyan, Mr. Appavu handed over debit cards to the beneficiary students in a function held at St. Xavier’s College, Palayamkottai.  Speaking on the occasion, Mr. Appavu said the ‘Puthumai Penn’ scheme, which was launched two years ago for giving monthly assistance of ₹1,000 to girl students for continuing undergraduate programmes in the colleges after completing their school studies from Class 6 to 12 in government and government-aided schools, had phenomenally increased enrolment of girls in colleges. In Tirunelveli district, 7,508 girls from poor families were getting the monthly assistance.</p>
            </section>
            <section className='w-screen'>
                <h3 className="text-red-500 text-2xl font-semibold text-center">Most Popular</h3>
                <div className='mt-2 flex gap-5'>
                    <img src={landSlide} alt="landSlide image"  className='rounded-md'/>
                    <h4 className='text-lg'><span className='font-bold'>Mapping danger:</span> Experts build a free open-source model to assess landslide risks</h4>
                </div>
            </section>
        </main>
        </>
    )
}

export default Content;