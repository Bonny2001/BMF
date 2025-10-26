import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            {/* <!-- ========== FOOTER ========== --> */}
            <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
                <div className="text-center">
                    <div>
                        <a className="flex-none text-xl font-semibold text-black text-red-600" href="#" aria-label="Brand">BMF</a>
                    </div>

                    <div className="mt-3">
                        <p className="text-gray-500 dark:text-neutral-500">Designed By Arkaprava Adhikary

                        </p>
                        <p className="text-gray-500 dark:text-neutral-500">
                            © 2025 Webside on React JS.
                        </p>
                    </div>


                </div>
            </footer>
        </div>
    )
}

export default Footer
