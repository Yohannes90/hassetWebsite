import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

const Testimonials = () => {
  return (
    <main className="container mx-auto px-3 lg:flex justify-between pt-20 pb-10">
        <div className="lg:w-1/3 flex flex-col">
            <p className="md:text-xl text-lg text-[#ff7600] uppercase">Testimonials</p>
            <h1 className="lg:text-4xl text-3xl font-medium py-3 capitalize">What our customers are saying</h1>
            <p className="text-[#a5a5a5] text-sm">What our customers are saying What our customers are saying</p>
        </div>

        <div className="lg:flex hidden gap-x-12 mt-16">
            <button className="w-12 h-12 rounded-2xl border border-[#ff7600] flex justify-center items-center text-2xl text-2xl text-[#ff7600] focus:text-white focus:bg-[#ff7600] hover:bg-[#ff7600] hover:text-white">
                <IoArrowBack />
            </button>
            <button className="w-12 h-12 rounded-2xl border border-[#ff7600] flex justify-center items-center text-2xl text-2xl text-[#ff7600] focus:text-white focus:bg-[#ff7600] hover:bg-[#ff7600] hover:text-white">
                <IoArrowForward />
            </button>
        </div>

        <div className="relative rounded-2xl shadow-2xl lg:w-2/5 lg:p-16 p-6 lg:mt-0 mt-8">
            <FaQuoteLeft className="text-[#ff7600] text-3xl" />
            <p className="font-medium pt-2 pb-8">I Highly recommended to buying on this platform, I own three businesses now and I am very happy with the experience. </p>
            <div className="border border-[#d4d4d4] flex items-center py-4">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-full h-12 w-12 object-cover" />
                <span className="lg:flex items-center justify-between w-full gap-x-4 font-medium pl-3">
                    <p>Getachew A.</p>
                    <div>
                        {[...Array(5)].map((_, i) => (
                            <button key={i} className="cursor-auto text-[#ff7600] last:text-[#d4d4d4]">
                                <FaStar />
                            </button>
                        ))}
                    </div>
                </span>
            </div>
            <button className="bg-gradient-to-r from-[#ffad66] to-[#eff9f9] rounded-2xl h-16 w-16 cursor-auto absolute -top-6 -left-6 "></button>
        </div>
    </main>
  )
}

export default Testimonials
