import { useEffect, useState } from 'react';
import banner from '../assets/banner.png';
import PropertyCard from '../components/PropertyCard';

function Home() {
    const phrases = ["properties...", "apartments...", "villas...", "commercial spaces..."];
    const [placeholder, setPlaceholder] = useState(phrases[0]);

    useEffect(() => {
        let currentIndex = 0;
        let charIndex = 0;
        let typing = true; // true = typing, false = deleting
        let timeoutId;

        const typeLoop = () => {
            const current = phrases[currentIndex];
            if (typing) {
                charIndex++;
                setPlaceholder(current.slice(0, charIndex));
                if (charIndex === current.length) {
                    typing = false;
                    timeoutId = setTimeout(typeLoop, 1400); // pause on full phrase
                    return;
                }
                timeoutId = setTimeout(typeLoop, 50);
            } else {
                charIndex--;
                setPlaceholder(current.slice(0, charIndex));
                if (charIndex === 0) {
                    typing = true;
                    currentIndex = (currentIndex + 1) % phrases.length;
                    timeoutId = setTimeout(typeLoop, 300);
                    return;
                }
                timeoutId = setTimeout(typeLoop, 40 + Math.random() * 30);
            }
        };

        timeoutId = setTimeout(typeLoop, 600);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <main >
            <section className={`h-dvh flex flex-col items-center justify-center text-white no-scrollbar bg-cover`} style={{backgroundImage: `url(${banner})`}}>
                <div className="absolute inset-0 bg-black opacity-20" />
                <section className="flex flex-col items-center justify-center w-full z-1">
                        <h1 className="text-5xl text-center md:text-7xl text-white font-semibold mx-3 mb-10">Smart Real Estate Platform</h1>
                        {/* <p className="text-lg text-center md:text-4xl text-gray-300 mx-8 mb-4">From residential to commercial, we've got you covered.</p> */}
                        <input
                            type="text"
                            placeholder={`Search ${placeholder}`}
                            className="bg-white p-4 my-4 text-xl outline-0 border-2 border-white rounded-2xl min-w-80 w-1/2 text-black"
                        />
                </section>
            </section>
            <section className="bg-gray-50 p-10 sm:px-30">
                <h2 className="text-4xl font-semibold text-left mb-6">Featured Listings</h2>
                <div className="grid grid-cols-[1fr, 1fr, 1fr, 1fr] md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PropertyCard image="/houses/fc1.png" price="$1,200,000" location="Los Angeles, CA" area="2,500" bed={4} bath={3} />
                    <PropertyCard image="/houses/fc2.png" price="$850,000" location="Miami, FL" area="1,800" bed={3} bath={2} />
                    <PropertyCard image="/houses/fc3.png" price="$1,500,000" location="New York, NY" area="3,000" bed={5} bath={4} />
                    <PropertyCard image="/houses/fc4.png" price="$2,000,000" location="San Francisco, CA" area="4,000" bed={6} bath={5} />
                    <PropertyCard image="/houses/fc5.png" price="630,000" location="Austin, TX" area="2,200" bed={4} bath={3} />
                    <PropertyCard image="/houses/fc6.png" price="$720,000" location="Seattle, WA" area="1,900" bed={3} bath={2} />
                    <PropertyCard image="/houses/fc7.png" price="$1,100,000" location="Chicago, IL" area="2,800" bed={4} bath={3} />
                    <PropertyCard image="/houses/fc8.png" price="$950,000" location="Denver, CO" area="2,400" bed={3} bath={2} />
                </div>
            </section>
            <section className="bg-gray-900 p-10 sm:px-30 flex flex-col justify-between">
                    <h2 className="text-white text-4xl font-semibold mb-4">Why Choose Nestora?</h2>
                    <hr className="border-t-2 border-gray-400 w-20 mb-10" />
                    <div className='grid  md:grid-cols-[1fr, 1fr, 1fr] md:grid-cols-3 text-white'>
                        <div className='flex flex-col justify-center text-center p-6 rounded-xl m-2'>
                            <div className='flex justify-center p-2'>
                                <img src='/verified.svg' height="70" width="70" />
                            </div>
                            <h2 className='text-xl'>Verified Listings</h2>
                            <p>Browse through a wide range of verified properties.</p>
                        </div>
                        <div className='flex flex-col justify-center text-center p-6 rounded-xl m-2'>
                            <div className='flex justify-center p-2'>
                                <img src='/trusted.svg' height="70" width="70" />
                            </div>
                            <h2 className='text-xl'>Trusted Agents</h2>
                            <p>Work with experienced and reliable real estate professionals.</p>
                        </div>
                        <div className='flex flex-col justify-center text-center p-6 rounded-xl m-2'>
                            <div className='flex justify-center p-2'>
                                <img src='/customer_support.svg' height="70" width="70" />
                            </div>
                            <h2 className='text-xl'>Customer Support</h2>
                            <p>Get assistance from our dedicated support team.</p>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default Home