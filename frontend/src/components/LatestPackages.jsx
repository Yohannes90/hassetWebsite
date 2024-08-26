import { FaBriefcase, FaChartLine, FaDollarSign, FaFire } from "react-icons/fa"
import { FaBuildingFlag } from "react-icons/fa6"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1400 },
        items: 3.2,
    },
    desktop: {
            breakpoint: { max: 1400, min: 1024 },
            items: 3,
    },
    mini: {
            breakpoint: { max: 1024, min: 768 },
            items: 2.2,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 1.7,
    },

    module: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
}
const LatestPackages = () => {
  return (
    <main className="container mx-auto px-3">
        <div className="lg:flex justify-between items-center">
            <div className="lg:w-3/5">
                <p></p>
                <h1 className="text-[#ff7600] lg:text-xl uppercase">Latest Business Listed</h1>
                <h1 className="lg:text-4xl text-2xl font-medium capitalize py-3">Latest Business Listing</h1>
                <p className="text-[#808080] lg:text-base text-sm lg:w-3/5">Latest Business Listed Latest Business Listed</p>
            </div>
            <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
                <button className="text-[#ff7600] rounded-2xl border border-[#ff7600] px-6 py-2 hover:bg-[#ff7600] hover:text-white focus:bg-[#ff7600] focus:text-white">View All</button>
                <button className="text-[#ff7600] rounded-2xl border border-[#ff7600] px-6 py-2 hover:bg-[#ff7600] hover:text-white focus:bg-[#ff7600] focus:text-white">Sell</button>
                <button className="text-[#ff7600] rounded-2xl border border-[#ff7600] px-6 py-2 hover:bg-[#ff7600] hover:text-white focus:bg-[#ff7600] focus:text-white">Buy</button>
            </div>
        </div>
        <section className='mt-8'>
        <Carousel
            className="z-20"
            swipeable={true}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
        >
            <div>
                <div className="relative h-80 sm:w-80">
                    <img className="rounded-3xl h-full w-full object-cover" src="https://images.bizbuysell.com/shared/listings/227/2271817/2c65930c-3e76-4a70-a452-56f035e89e21-W768.jpg" alt="image" />
                    <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff7600] bg-[#f8fdfe] rounded-2xl absolute bottom-10 left-10">
                        <FaFire />
                        Popular
                    </button>
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                    <p className="text-xl font-medium">Asking Price: 1,000,000.00 Birr</p>
                    <p className="text-lg font-medium">Juice Bar</p>
                    <p className="text-sm">Bahir Dar, Ethiopia</p>
                    <div className="flex items-center gap-x-4 text-sm">
                        <span className="flex items-center gap-y-2 py-4">
                            <FaBriefcase className="text-[#ff7600] text-xl mr-2" />For Sale
                        </span>
                        <span className="flex items-center gap-y-2 py-4">
                            <FaChartLine className="text-[#ff7600] text-xl mr-2" /> 20,000 Birr/Month
                        </span>
                    </div>
                </span>
            </div>

            <div>
                <div className="relative h-80 sm:w-80">
                    <img className="rounded-3xl h-full w-full object-cover" src="https://images.bizbuysell.com/shared/listings/225/2257092/958a242f-a463-49eb-8e97-33a15e0bae0e-W768.jpg" alt="image" />
                    <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff7600] bg-[#f8fdfe] rounded-2xl absolute bottom-10 left-10">
                        <FaBuildingFlag />
                        New Listing
                    </button>
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                    <p className="text-xl font-medium">Asking Price: 700,000.00 Birr</p>
                    <p className="text-lg font-medium">Laundary</p>
                    <p className="text-sm">Hawassa, Ethiopia</p>
                    <div className="flex items-center gap-x-4 text-sm">
                        <span className="flex items-center gap-y-2 py-4">
                            <FaBriefcase className="text-[#ff7600] text-xl mr-2" />For Sell
                        </span>
                        <span className="flex items-center gap-y-2 py-4">
                            <FaChartLine className="text-[#ff7600] text-xl mr-2" /> 12,000 Birr/Month
                        </span>
                    </div>
                </span>
            </div>

            <div>
                <div className="relative h-80 sm:w-80">
                    <img className="rounded-3xl h-full w-full object-cover" src="https://images.bizbuysell.com/shared/listings/225/2257458/a0156917-6487-4575-8ad9-4c9fd964bd50-W768.jpg" alt="image" />
                    <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff7600] bg-[#f8fdfe] rounded-2xl absolute bottom-10 left-10">
                        <FaDollarSign />
                        Discounted Price
                    </button>
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                    <p className="text-xl font-medium">Asking Price: 700,000.00 Birr</p>
                    <p className="text-lg font-medium">Bakery</p>
                    <p className="text-sm">Gondar, Ethiopia</p>
                    <div className="flex items-center gap-x-4 text-sm">
                        <span className="flex items-center gap-y-2 py-4">
                            <FaBriefcase className="text-[#ff7600] text-xl mr-2" />For Sale
                        </span>
                        <span className="flex items-center gap-y-2 py-4">
                            <FaChartLine className="text-[#ff7600] text-xl mr-2" /> 20,000 Birr/Month
                        </span>
                    </div>
                </span>
            </div>

            <div>
                <div className="relative h-80 sm:w-80">
                    <img className="rounded-3xl h-full w-full object-cover" src="https://images.bizbuysell.com/shared/listings/221/2219546/69c1cb15-6d92-494d-a1ab-298896ce5497-W768.jpg" alt="image" />
                    <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff7600] bg-[#f8fdfe] rounded-2xl absolute bottom-10 left-10">
                        <FaFire />
                        New Listing
                    </button>
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                    <p className="text-xl font-medium">Asking Price: 700,000.00 Birr</p>
                    <p className="text-lg font-medium">Business Name</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                    <div className="flex items-center gap-x-4 text-sm">
                        <span className="flex items-center gap-y-2 py-4">
                            <FaBriefcase className="text-[#ff7600] text-xl mr-2" />For Franchise
                        </span>
                        <span className="flex items-center gap-y-2 py-4">
                            <FaChartLine className="text-[#ff7600] text-xl mr-2" /> 12,000 Birr/Month
                        </span>
                    </div>
                </span>
            </div>
        </Carousel>

        <div className="sm:hidden block">
            <div className="pt-8">
                <div className="relative h-80 sm:w-80">
                    <img className="rounded-3xl h-full w-full object-cover" src="https://images.bizbuysell.com/shared/listings/227/2271817/2c65930c-3e76-4a70-a452-56f035e89e21-W768.jpg" alt="image" />
                    <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff7600] bg-[#f8fdfe] rounded-2xl absolute bottom-10 left-10">
                        <FaFire />
                        Popular
                    </button>
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                    <p className="text-xl font-medium">Asking Price: 700,000.00 Birr</p>
                    <p className="text-lg font-medium">Business Name</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                    <div className="flex items-center gap-x-4 text-sm">
                        <span className="flex items-center gap-x-4 text-sm">
                            <FaBriefcase className="text-2xl font-medium" />For Franchise
                        </span>
                        <span className="flex items-center gap-x-4 text-sm">
                            <FaChartLine className="text-[#ff7600] text-xl mr-2" /> 12,000 Birr/Month
                        </span>
                    </div>
                </span>
            </div>

            <div className="pt-8">
                <div className="relative h-80 sm:w-80">
                    <img className="rounded-3xl h-full w-full object-cover" src="https://images.bizbuysell.com/shared/listings/225/2257092/958a242f-a463-49eb-8e97-33a15e0bae0e-W768.jpg" alt="image" />
                    <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff7600] bg-[#f8fdfe] rounded-2xl absolute bottom-10 left-10">
                        <FaBuildingFlag />
                        New Listing
                    </button>
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                    <p className="text-xl font-medium">Asking Price: 700,000.00 Birr</p>
                    <p className="text-lg font-medium">Pizza Restaurant</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                    <div className="flex items-center gap-x-4 text-sm">
                        <span className="flex items-center gap-x-4 text-sm">
                            <FaBriefcase className="text-2xl font-medium" />For Franchise
                        </span>
                        <span className="flex items-center gap-x-4 text-sm">
                            <FaChartLine className="text-[#ff7600] text-xl mr-2" /> 12,000 Birr/Month
                        </span>
                    </div>
                </span>
            </div>

            <div className="pt-8">
                <div className="relative h-80 sm:w-80">
                    <img className="rounded-3xl h-full w-full object-cover" src="https://images.bizbuysell.com/shared/listings/225/2257458/a0156917-6487-4575-8ad9-4c9fd964bd50-W768.jpg" alt="image" />
                    <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff7600] bg-[#f8fdfe] rounded-2xl absolute bottom-10 left-10">
                        <FaDollarSign />
                        Discounted Price
                    </button>
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                    <p className="text-xl font-medium">Asking Price: 700,000.00 Birr</p>
                    <p className="text-lg font-medium">Business Name</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                    <div className="flex items-center gap-x-4 text-sm">
                        <span className="flex items-center gap-x-4 text-sm">
                            <FaBriefcase className="text-2xl font-medium" />For Franchise
                        </span>
                        <span className="flex items-center gap-x-4 text-sm">
                            <FaChartLine className="text-[#ff7600] text-xl mr-2" /> 12,000 Birr/Month
                        </span>
                    </div>
                </span>
            </div>

            <div className="pt-8">
                <div className="relative h-80 sm:w-80">
                    <img className="rounded-3xl h-full w-full object-cover" src="https://images.bizbuysell.com/shared/listings/221/2219546/69c1cb15-6d92-494d-a1ab-298896ce5497-W768.jpg" alt="image" />
                    <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff7600] bg-[#f8fdfe] rounded-2xl absolute bottom-10 left-10">
                        <FaFire />
                        Popular
                    </button>
                </div>
                <span className="flex flex-col gap-y-1 py-4">
                    <p className="text-xl font-medium">Asking Price: 1,000,000.00 Birr</p>
                    <p className="text-lg font-medium">Pizza Restaurant</p>
                    <p className="text-sm">Addis Ababa, Ethiopia</p>
                    <div className="flex items-center gap-x-4 text-sm">
                        <span className="flex items-center gap-x-4 text-sm">
                            <FaBriefcase className="text-2xl font-medium" />For Franchise
                        </span>
                        <span className="flex items-center gap-x-4 text-sm">
                            <FaChartLine className="text-[#ff7600] text-xl mr-2" /> 12,000 Birr/Month
                        </span>
                    </div>
                </span>
            </div>

            <div className="flex justify-center pt-12">
                <button className="text-[#ff7600] rounded-2xl border border-[#ff7600] px-6 py-2 hover:bg-[#ff7600] hover:text-white focus:bg-[#ff7600] focus:text-white">View More Businesses</button>
            </div>
        </div>

        </section>
    </main>
  )
}

export default LatestPackages
