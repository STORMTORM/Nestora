import banner from '../assets/banner2.png';

function About() {
    return (
        <main className="bg-white">
            <section className={`h-dvh flex flex-col items-center justify-center text-white no-scrollbar bg-cover`} style={{backgroundImage: `url(${banner})`}}>
                <div className="absolute inset-0 bg-black opacity-20" />
                <section className="flex flex-col items-center justify-center w-full z-1">
                        <h1 className="text-5xl text-center md:text-8xl text-white font-semibold mx-3 mb-8">About Us</h1>
                        <p className='text-2xl text-center'>Learn more about Nestora, your trusted real estate platform.</p>
                </section>
            </section>     
            <section className="bg-white p-10 sm:px-40 py-20">
                <div className='flex flex-col md:flex-row justify-between gap-10'>
                    <div className='aspect-square md:w-[30%] overflow-hidden rounded-2xl shadow-lg'>
                        <img src="/about/sofa.png" alt="" />
                    </div>
                    <div className='md:w-[70%] md:px-10'>
                        <h2 className="text-4xl font-semibold mb-6">Our Story</h2>
                        <p className="text-gray-700">
                            Nestora was founded with the vision of transforming the real estate experience for buyers, sellers, and agents alike. Our platform leverages cutting-edge technology to provide a seamless and efficient way to navigate the property market.
                            <br />
                            <br />
                            Over the years, we’ve grown from a small idea into a trusted real estate ecosystem—where innovation meets reliability. By combining advanced search tools, intelligent market insights, and a user-first design approach, we empower individuals to make informed decisions with confidence.
                            <br />
                            <br />
                            Our team is driven by a commitment to excellence, integrity, and continuous improvement. We listen closely to our community and evolve our platform to meet the ever-changing needs of modern buyers and sellers.
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-[#000A1F] text-white p-10 sm:px-40'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <h2 className="text-4xl font-semibold mb-6 text-center md:w-[30%]">Our Mission</h2>
                    <p className="text-gray-300 md:w-[70%] text-center">
                        At Nestora, our mission is to revolutionize the real estate industry by providing a transparent, efficient, and user-centric platform that simplifies the property buying and selling process. We are dedicated to empowering our users with the tools and information they need to make confident real estate decisions.
                    </p>
                </div>
            </section>
            <section className="bg-white p-10 sm:px-40 py-10">
                <h1 className='text-5xl text-center font-bold'>Our Values</h1>
                <div className='flex flex-col md:flex-row justify-between text-center gap-10 my-10'>
                    <div>
                        <img src="/about/integrity.svg" alt="Integrity" className='mx-auto h-16 mb-4'/>
                        <h2 className="text-2xl font-semibold mb-4 mt-8">Integrity</h2>
                        <p className="text-gray-700">
                            We uphold the highest standards of honesty and transparency in all our interactions, ensuring trust and reliability for our users.
                        </p>
                    </div>
                    <div>
                        <img src="/about/innovation.svg" alt="Innovation" className='mx-auto h-16 mb-4'/>
                        <h2 className="text-2xl font-semibold mb-4 mt-8">Innovation</h2>
                        <p className="text-gray-700">
                            We continuously seek out and implement cutting-edge technologies to enhance the real estate experience for our users.
                        </p>
                    </div>
                    <div>
                        <img src="/about/customer_support.svg" alt="Customer-Centricity" className='mx-auto h-16 mb-4'/>
                        <h2 className="text-2xl font-semibold mb-4 mt-8">Customer-Centricity</h2>
                        <p className="text-gray-700">
                            Our users are at the heart of everything we do. We strive to understand their needs and deliver exceptional service and support.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default About;