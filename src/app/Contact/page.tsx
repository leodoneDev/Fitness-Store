"use client"

import Link from 'next/link'


export default function Page() {

    return (
        <div className='w-full h-full bg-gray-50 px-2'>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul className='dark:text-black'>
                    <li>
                        <Link href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Contact
                    </li>
                </ul>
            </div>
            <div className='w-full max-w-3xl mx-auto'>
                <h1 className='text-3xl font-bold text-center text-orange-600 mb-6'>Contact Us</h1>

                <div className='bg-white p-6 rounded-lg shadow-md space-y-6 text-gray-700'>

                    <p className='text-center'>
                        Have questions, feedback, or need help? We'd love to hear from you!
                    </p>

                    <div className='space-y-4'>
                        <div>
                            <h2 className='text-xl font-semibold'>Customer Support</h2>
                            <p>Email: <a href="mailto:support@example.com" className="text-orange-600 hover:underline">support@example.com</a></p>
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold'>Business Inquiries</h2>
                            <p>Email: <a href="mailto:business@example.com" className="text-orange-600 hover:underline">business@example.com</a></p>
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold'>Phone</h2>
                            <p>+1 (123) 456-7890</p>
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold'>Office Address</h2>
                            <p>123 Commerce St,<br />Suite 456,<br />New York, NY 10001, USA</p>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h2 className='text-xl font-semibold mb-2'>Send us a message</h2>
                        <form className='space-y-4'>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
