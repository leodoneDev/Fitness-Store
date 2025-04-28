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
                        Privacy
                    </li>
                </ul>
            </div>
            <div className='w-full max-w-4xl mx-auto'>
                <h1 className='text-3xl font-bold text-center text-orange-600 mb-6'>Privacy Policy</h1>

                <div className='bg-white p-6 rounded-lg shadow-md space-y-6 text-gray-700 text-justify'>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>1. Introduction</h2>
                        <p>
                            Welcome to our online store! Protecting your personal data is a top priority for us. 
                            This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>2. Information We Collect</h2>
                        <p>
                            We collect information you provide directly, such as when you create an account, place an order, or contact us. 
                            This includes your name, email address, shipping address, payment details, and any additional information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>3. How We Use Your Information</h2>
                        <ul className='list-disc list-inside space-y-1'>
                            <li>To process your orders and deliver products to you.</li>
                            <li>To personalize your shopping experience.</li>
                            <li>To communicate with you regarding orders, offers, and updates.</li>
                            <li>To improve our website and customer service.</li>
                            <li>To ensure security and prevent fraud.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>4. Sharing Your Information</h2>
                        <p>
                            We do not sell or rent your personal information to third parties. 
                            We may share your information with trusted partners who assist in operating our website, conducting our business, or servicing you, provided they agree to keep this information confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>5. Your Rights</h2>
                        <p>
                            You have the right to access, correct, or delete your personal data at any time. 
                            To exercise these rights, please contact our support team. We are committed to addressing your requests promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>6. Security</h2>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information. 
                            However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>7. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                            We encourage you to review this page periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-2'>8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or how we handle your personal information, 
                            please contact our support team at <strong>support@example.com</strong>.
                        </p>
                    </section>

                </div>
            </div>
            
        </div>
    )
}
