import { FaDollarSign, FaHandshake, FaStoreAlt, FaToolbox } from 'react-icons/fa'

const Services = () => {
  return (
    <main className="bg-[#f2f2f2] mt-20 lg:py-20">
        <div className="container mx-auto px-3 text-center">
            <p className="text-xl text-[#ff7600] uppercase py-8">Our Services</p>
            <p className="lg:text-4xl text-2xl font-medium" >Services Established Business Established Business Established Business Established Business</p>

            <div className="flex lg:flex-row flex-col gap-x-16 gap-y-8 py-20">
                <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/4 shadow-2xl">
            <button className="bg-[#ff7600] text-white rounded-3xl w-20 h-20 shadow-2xl">
              <FaHandshake className="text-2xl w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Buy an Established Business</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              Discover a diverse range of businesses available for purchase. Whether you're looking to invest or expand, we connect you with profitable opportunities across various industries.
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/4 shadow-2xl">
            <button className="bg-[#ff7600] text-white rounded-3xl w-20 h-20 shadow-2xl">
              <FaDollarSign className="text-2xl w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Sell an Established Business</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              List your business for sale on our platform and reach a broad audience of potential buyers. Our tools and services help you find the right buyer quickly and efficiently.
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/4 shadow-2xl">
            <button className="bg-[#ff7600] text-white rounded-3xl w-20 h-20 shadow-2xl">
              <FaStoreAlt className="text-2xl w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Franchise Opportunities</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              Explore franchise opportunities that align with your business goals. We offer a curated selection of franchises ready for expansion across Ethiopia.
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/4 shadow-2xl">
            <button className="bg-[#ff7600] text-white rounded-3xl w-20 h-20 shadow-2xl">
              <FaToolbox className="text-2xl w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Additional Services</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              We provide a range of additional services including asset sales, business real estate, valuations, consultancy, and advertising solutions to support your business needs.
            </p>
          </div>
            </div>
        </div>
    </main>
  )
}

export default Services
