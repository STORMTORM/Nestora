function Contact() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row py-20 p-8 md:p-40">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-5xl text-center md:text-7xl text-black font-semibold mx-3 mb-10">Contact Us</h1>
                    <p className="text-2xl text-center text-gray-700">We would love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.</p>
                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-semibold mt-10 mb-4">Get in Touch</h2>
                        <p className="text-gray-700 mb-2">Email: contact@example.com</p>
                        <p className="text-gray-700">Address: 123 Main St, Anytown, USA</p>
                    </div>
                </div>
                <div className="md:w-1/2 mb-10 md:mb-0 justify-center items-center flex">
                    <form className="bg-white p-10 rounded-2xl shadow-lg mt-10 md:mt-0 md:ml-10 text-center">
                        <h1 className="font-bold text-2xl mb-6">Contact Form</h1>
                        <div className="flex flex-row gap-2">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg block w-full p-2.5" required />
                            </div>
                        </div>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 mb-6" required />
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                            <textarea id="message" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" required></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="text-white bg-[#F59E0B] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;