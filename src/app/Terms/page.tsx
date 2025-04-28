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
                        Terms
                    </li>
                </ul>
            </div>
            <div className='w-full max-w-4xl mx-auto'>
                <h1 className='text-3xl font-bold text-center text-orange-600 mb-6'>Terms and Conditions</h1>

                <div className='bg-white p-6 rounded-lg shadow-md space-y-6 text-gray-700 text-justify'>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>1. Introduction</h2>
                        <p>
                            Welcome to our store. These Terms and Conditions govern your use of our website and services. 
                            By accessing or purchasing from our site, you agree to comply with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>2. Use of Our Website</h2>
                        <p>
                            You may use our site for lawful purposes only. You agree not to misuse our website or services, or engage in any behavior that could harm the platform or other users.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>3. Intellectual Property</h2>
                        <p>
                            All content, including images, text, logos, and designs, are the intellectual property of our company or our partners. 
                            Unauthorized use or reproduction is strictly prohibited without prior written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>4. Product Information</h2>
                        <p>
                            We strive to ensure that all product descriptions and prices are accurate. 
                            However, errors may occur, and we reserve the right to correct any inaccuracies or omissions without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>5. Payment Terms</h2>
                        <p>
                            All payments must be made at the time of purchase. We accept major credit cards, debit cards, and other payment methods as indicated on our site.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>6. Shipping and Delivery</h2>
                        <p>
                            We aim to process and ship orders promptly. Delivery times are estimates and may vary depending on your location and external factors beyond our control.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>7. Returns and Refunds</h2>
                        <p>
                            Please review our Return Policy for information on returns, exchanges, and refunds. 
                            Products must be returned unused and in their original condition to qualify for a refund.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>8. Limitation of Liability</h2>
                        <p>
                            We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. 
                            Your sole remedy is to discontinue use of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>9. Changes to Terms</h2>
                        <p>
                            We reserve the right to update these Terms and Conditions at any time. 
                            Changes will be effective immediately upon posting. Continued use of the site signifies your acceptance of the updated terms.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>10. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about these Terms and Conditions, 
                            please contact us at <strong>support@example.com</strong>.
                        </p>
                    </section>

                </div>
            </div>
            
        </div>
    )
}
