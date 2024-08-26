import React from 'react'

const Team = () => {
  return (
    <main className="container mx-auto px-3">
        <p className="md:text-xl text-lg text-[#ff7600] uppercase text-center">Introduce your self to</p>
        <h1 className="lg:text-4xl text-3xl font-medium text-center capitalize pt-3 pb-12">Our Team</h1>

        <section className="lg:flex items-center lg:grid-cols-none grid grid-cols-2 lg:gap-12 gap-8 justify-center">
            <div className="lg:w-1/3">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-b-3xl rounded-tr-3xl rounded-tl-[50%] object-cover md:h-80 h-60 w-full bg-[#cbccb9]" />
                <p className="text-center pt-4 md:text-2xl font-semibold">
                    Yohannes M.
                </p>
                <p className="text-center pt-4 md:text-base text-sm text-[#cbccb9] font-semibold">Founder & Tech Lead</p>
            </div>
            <div className="lg:w-1/3">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-b-3xl rounded-tr-3xl rounded-tl-[50%] object-cover md:h-80 h-60 w-full bg-[#cbccb9]" />
                <p className="text-center pt-4 md:text-2xl font-semibold">
                    Yohannes M.
                </p>
                <p className="text-center pt-4 md:text-base text-sm text-[#cbccb9] font-semibold">Founder & Tech Lead</p>
            </div>
            <div className="lg:w-1/3">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-b-3xl rounded-tr-3xl rounded-tl-[50%] object-cover md:h-80 h-60 w-full bg-[#cbccb9]" />
                <p className="text-center pt-4 md:text-2xl font-semibold">
                    Yohannes M.
                </p>
                <p className="text-center pt-4 md:text-base text-sm text-[#cbccb9] font-semibold">Founder & Tech Lead</p>
            </div>
            {/* <div className="lg:w-1/4">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-b-3xl rounded-tr-3xl rounded-tl-[50%] object-cover md:h-80 h-60 w-full bg-[#cbccb9]" />
                <p className="text-center pt-4 md:text-2xl font-semibold">
                    Yohannes M.
                </p>
                <p className="text-center pt-4 md:text-base text-sm text-[#cbccb9] font-semibold">Founder & Tech Lead</p>
            </div> */}
        </section>
    </main>
  )
}

export default Team
