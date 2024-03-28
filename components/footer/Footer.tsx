import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    console.log("Footer")
    return (
        <div className="light">
            <footer className="bg-gray-300 rounded-lg shadow dark:bg-gray-800 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src={'/logo.png'} alt="Movies" height={100} width={140}/> 
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="#" className="hover:underline">Deepak Movies</Link>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer