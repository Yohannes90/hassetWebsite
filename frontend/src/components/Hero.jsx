import Carousel from "react-multi-carousel"
import { FaPlus } from "react-icons/fa";
import 'react-multi-carousel/lib/styles.css'
import { IoSearch } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { MdMaximize } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

const responsive = {
    module: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
    }
};

const Hero = () => {
    // eslint-disable-next-line react/prop-types
    const CustomDot = ({ onClick, active }) => {
        return (
            <li className={active ? "" : "text-white"} onClick={() => onClick()}>
                <MdMaximize className="text-5xl" />
            </li>
        )
    };

    const images = [
        // "/assets/images_1.jpg",
        "https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg",
        "https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg",
        "https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg",
        "https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg"
    ];
    const imagesUrls = [
        "https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg",
        "https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg",
        "https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg",
        "https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg"
    ];

  return (
    <main>
        <div className="mb-12">
            <div className="bg-gradient-to-t from-[#ffad66] to-[#f8fdfe] rounded-[560px] rounded-t-none rounded-r-[115px] rounded-t-none">
                <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-screen">
                    <div className="lg:w-2/5">
                        <p className="text-[#ff7600] md:text-xl text-lg font-medium uppercase">Business Listing</p>
                        <h1 className="lg:text-6xl text-3xl font-medium pt-3 pb-12">Buy, Sell, and Franchise Your Dream Buisnesses</h1>
                        <p className="text-[#808080] lg:text-base text-sm pb-8">We empower entrepreneurs and businesses to unlock new growth opportunities, connecting buyers, sellers, and franchisees in a dynamic marketplace.</p>
                        <Carousel
                            className="z-20"
                            swipeable={true}
                            draggable={false}
                            responsive={responsive}
                            showDots
                            arrows
                            ssr={true} // means to render carousel on server-side.
                            infinite
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            customDot={<CustomDot />}

                        >
                            {images.map((img, index) => (
                                <div key={index} className="flex justify-center">
                                    <img className="rounded-2xl sm:w-[650px] h-[350px] w-[550px]" src={img} alt="image" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <form action="" className="bg-white shadow-2xl rounded-3xl py-8 lg:w-2/5 relative lg:mt-0 mt-12">
                            <div className="flex justify-between border-b border-[#aaaaaa] h-12 lg:px-8 px-3">
                                <button type="button" className="w-1/2 text-[#808080] focus:border-b-2 border-b-2 focus:text-[#ff7600] focus:border-[#ff7600] cursor-pointer">Businesses For Sale</button>
                                <button type="button" className="w-1/2 text-[#808080] focus:border-b-2 border-b-2 focus:text-[#ff7600] focus:border-[#ff7600] cursor-pointer">Franchise Opportunities</button>
                            </div>
                            <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
                                <input type="text" placeholder="Addis Ababa, Bahirdar, Adama, etc" className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6" />
                                <select name="" id="" placeholder="Select Business Type" className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6">
                                    <option value="">Select Business Type</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <select name="" id="" placeholder="Select Business Type" className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6">
                                    <option value="">Select Business Category</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <span className="flex items-center gap-x-2 text-[#ff7600]">
                                    <VscSettings className="text-2xl"/>
                                    <p>Advanced Search</p>
                                </span>
                                <button type="button"
                                    className="w-full flex justify-center items-center gap-x-2 bg-[#ff7600] text-white rounded-2xl h-14 hover:bg-[#e06b00]"
                                >
                                    <IoSearch />
                                    Search
                                </button>
                            </div>
                            <button className="lg:bg-gradient-to-r from-[#ffad66] to-[#eff9f9] rounded-2xl h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
                    </form>


                </div>
            </div>
        </div>

        <div className="lg:hidden block container mx-auto px-3 py-8">
            <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
                <button className="lg:block hidden bg-gradient-to-r from-[#ffad66] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
                <p className="text-[#a5a5a5]">Trusted by 100+ Companies across the globe!</p>
            </span>

            <div className="py-12">
                <Marquee>
                    {/* <img src="/assets/logo1.png" alt="" /> */}
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-16 h-8" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-16 h-8" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-16 h-8" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-16 h-8" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-16 h-8" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-16 h-8" />
                </Marquee>
            </div>
        </div>

        <div className="lg:flex justify-center lg:-mt-16 gap-x-8 lg:px-0 px-3">
            <div className="bg-white rounded-2xl py-4 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl lg:mt-0 mt-4">
                <span className="flex items-center relative h-100 w-44">
                    {imagesUrls.map((img, index) => (
                        <div key={index} className="lg:mr-7 mr-5 h-full">
                            <img src={img} className="w-10 h-10 rounded-full object-cover absolute bg-[#f2f2f2] border border-white" alt="" />
                        </div>
                    ))}
                    <button className="bg-black w-8 h-8 rounded-full text-white relative flex items-center justify-center">
                        <FaPlus />
                    </button>
                </span>
                <p className="w-36 md:text-xl font-medium">20+ Happy Customers</p>
            </div>
            <div className="bg-white rounded-2xl py-4 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl lg:mt-0 mt-4">
                {/* <img src="/assets/image_7.jpg" alt="" className="w-12 h-12 rounded-full" /> */}
                <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-12 h-12 rounded-full" />
                <p className="md:text-xl font-medium">
                    100+ New <br />
                    Listings Everyday!
                </p>
            </div>
        </div>

        <div className="lg:block hidden container mx-auto px-3 py-16">
            <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
                {/* <button className="lg:block hidden bg-gradient-to-r from-[#ffad66] to-[#eff9f9] rounded-3xl h-24 w-24 cursor-auto"></button> */}
                {/* <p className="text-[#a5a5a5]">Trusted by 100+ Companies across the globe!</p> */}
            </span>

            <div className="py-12">
                <Marquee>
                    {/* <img src="/assets/logo1.png" alt="" /> */}
                    {/* <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-36 h-12" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-36 h-12" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-36 h-12" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-36 h-12" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-36 h-12" />
                    <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-36 h-12" /> */}
                </Marquee>
            </div>
        </div>

    </main>
  )
}

export default Hero
