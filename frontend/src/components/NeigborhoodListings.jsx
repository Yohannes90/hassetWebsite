

const NeigborhoodListings = () => {
  return (
    <main className="container mx-auto px-3 lg:pt-24">
        <span className="flex justify-center pb-12">
            <button className="bg-gradient-to-r from-[#ffad66] to-[#eff9f9] rounded-2xl h-12 w-12 cursor-auto"></button>
        </span>
        <p className="text-[#ff7600] md:text-xl text-lg uppercase">Listings Across the town</p>
        <h1 className="lg:text-4xl text-3xl font-medium pt-3 pb-12 capitalize">We empower entrepreneurs and businesses to unlock new growth</h1>

        <section className="grid md:grid-cols-7 grid-cols-2 md:gap-12 gap-4 pb-12">
            <div className="relative md:col-span-2">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-3xl object-cover md:h-80 h-40 w-full" />
                <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
                    <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">12</p>
                    <p className="text-white lg:text-xl md:text-base text-sm">Bahir Dar, Ethiopia</p>
                </span>
            </div>
            <div className="relative md:col-span-2">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-3xl object-cover md:h-80 h-40 w-full" />
                <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
                    <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">7</p>
                    <p className="text-white lg:text-xl md:text-base text-sm">Addis Ababa, Ethiopia</p>
                </span>
            </div>
            <div className="relative md:col-span-3">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-3xl object-cover md:h-80 h-40 w-full" />
                <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
                    <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">41</p>
                    <p className="text-white lg:text-xl md:text-base text-sm">Adama, Ethiopia</p>
                </span>
            </div>
            <div className="relative md:col-span-3">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-3xl object-cover md:h-80 h-40 w-full" />
                <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
                    <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">16</p>
                    <p className="text-white lg:text-xl md:text-base text-sm">Hawassa, Ethiopia</p>
                </span>
            </div>
            <div className="relative md:col-span-4">
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-3xl object-cover md:h-80 h-40 w-full" />
                <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
                    <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">6</p>
                    <p className="text-white lg:text-xl md:text-base text-sm">Mekele, Ethiopia</p>
                </span>
            </div>

            <span className="flex items-end pb-12 w-4/5 ">
                <button className="bg-gradient-to-r from-[#ffad66] to-[#eff9f9] rounded-2xl h-24 w-24 cursor-auto"></button>


            </span>
        </section>
    </main>
  )
}

export default NeigborhoodListings
