function Sell() {
	return (
		<main>
			<section className="bg-[#0F273E] flex flex-col py-30 px-10 text-center items-center justify-center">
				<h1 className="text-white text-3xl md:text-7xl font-semibold my-6">
					Sell Your Property with Nestora
				</h1>
				<p className="text-lg md:text-2xl text-gray-400 mb-10 text-center">
					List your property on Nestora and reach thousands of
					potential buyers.
				</p>
				<button className="bg-[#FCA311] text-white px-6 py-3 rounded-lg hover:bg-[#e5940d] transition-colors ease-in-out">
					Get Started
				</button>
			</section>
            <section className="flex flex-col bg-gray-50 p-10 sm:px-30 items-center">
                <h2 className="text-4xl font-semibold text-center mb-6">Why Sell with Us?</h2>
                <hr className="border-t-2 border-gray-400 w-20 mb-10" />
                <div className="grid md:grid-cols-3 md:grid-cols-[1fr, 1fr, 1fr] gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center m-2">
                            <img src="/sell-icons/valuation.svg" height="70" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Expert Valuation</h3>
                        <p className="text-gray-600 text-center">Our experts provide accurate property valuations to help you price your home competitively.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center m-2">
                            <img src="/sell-icons/marketing.svg" height="70" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Extensive Marketing</h3>
                        <p className="text-gray-600 text-center">We use a variety of channels to market your property effectively and attract serious buyers.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center m-2">
                            <img src="/sell-icons/support.svg" height="70" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Dedicated Support</h3>
                        <p className="text-gray-600 text-center">Our team is with you every step of the way, ensuring a smooth and successful transaction.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col bg-gray-50 py-20 p-10 sm:px-30 items-center">
                <h2 className="text-4xl font-semibold text-center mb-6">Home Selling Process</h2>
                <hr className="border-t-2 border-gray-400 w-20 mb-10" />
                <div className="grid md:grid-cols-4 md:grid-cols-[1fr, 1fr, 1fr, 1fr] gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="aspect-square border-2 border-gray-400 rounded-full p-3 font-bold text-center m-2">
                            1
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Request a Valuation</h3>
                        <p className="text-gray-600 text-center">Get a professional valuation to understand your property's worth.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="aspect-square border-2 border-gray-400 rounded-full p-3 font-bold text-center m-2">
                            2
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Sign Agreement</h3>
                        <p className="text-gray-600 text-center">Sign a legally binding agreement to proceed with the sale.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="aspect-square border-2 border-gray-400 rounded-full p-3 font-bold text-center m-2">
                            3
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Marketing & Promotion</h3>
                        <p className="text-gray-600 text-center">We conduct extensive marketing and arrange viewings</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="aspect-square border-2 border-gray-400 rounded-full p-3 font-bold text-center m-2">
                            4
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Accept Offer</h3>   
                        <p className="text-gray-600 text-center">Review and accept the best offer to finalize the sale.</p>
                    </div>
                </div>
            </section>
		</main>
	);
}

export default Sell;
