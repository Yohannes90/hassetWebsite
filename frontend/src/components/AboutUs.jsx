// // import { FaHome } from "react-icons/fa"
// import { TbBuilding } from 'react-icons/tb';

// const AboutUs = () => {
//   return (
//     <main className="container mx-auto lg:flex justify-between px-3 mb-12 lg:pt-0 pt-8">
//         <div className="lg:w-3/5">
//             <p className="text-[#ff7600] md:text-xl text-lg font-medium uppercase">About Us</p>
//             <h1 className="lg:text-4xl text-2xl font-medium py-3">We empower entrepreneurs and businesses to unlock new growth</h1>
//             <p className="lg:w-4/5 text-[a5a5a5]">We empower entrepreneurs and businesses to unlock new growth We empower entrepreneurs and businesses to unlock new growth</p>
//             <div className="lg:block hidden ">
//                 <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
//                     <TbBuilding className="text-5xl text-[#ff7600] w-2/5"/>
//                     <span>
//                         <h1 className="text-[#ff7600] text-lg font-medium">
//                             We empower entrepreneurs
//                         </h1>
//                         <p className="text-[#a5a5a5] w-4/5">We empower entrepreneurs and businesses to unlock new growth</p>
//                     </span>
//                 </div>

//                 <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
//                     <TbBuilding className="text-5xl text-[#ff7600] w-2/5"/>
//                     <span>
//                         <h1 className="text-[#ff7600] text-lg font-medium">
//                             We empower businesses
//                         </h1>
//                         <p className="text-[#a5a5a5] w-4/5">We empower entrepreneurs and businesses to unlock new growth</p>
//                     </span>
//                 </div>

//             </div>
//         </div>

//         <div className="lg:w-2/5 flex items-end gap-4 lg:mt-0 mt-8 lg:h-auto h-[30rem]">
//             <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="rounded-3xl w-3/5 h-4/5 shadow-md object-cover" />
//             <div className="w-1/2 h-4/5 flex flex-col gap-4 relative lg:-top-20 -top-10">
//                 <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-full h-3/5 rounded-3xl shadow-md object-cover" />
//                 <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="" className="w-full h-2/5 rounded-3xl shadow-md object-cover" />
//                 <button className="bg-gradient-to-r from-[#ffad66] to-[#eff9f9] rounded-2xl h-12 w-12 cursor-auto absolute -bottom-8 left-16"></button>
//             </div>
//         </div>

//         <div className="lg:hidden block px-4 py-6">
//             <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
//                 <TbBuilding className="text-4xl text-[#ff7600] w-1/3"/>
//                 <span>
//                     <h1 className="text-[#ff7600] text-lg font-medium">
//                         We empower businesses
//                     </h1>
//                     <p className="text-[a5a5a5] w-4/5">We empower entrepreneurs and businesses to unlock new growth opportunities, connecting.</p>
//                 </span>
//             </div>

//             <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
//                 <TbBuilding className="text-4xl text-[#ff7600] w-1/3"/>
//                 <span>
//                     <h1 className="text-[#ff7600] text-lg font-medium">
//                         We empower businesses
//                     </h1>
//                     <p className="text-[a5a5a5] w-4/5">We empower entrepreneurs and businesses to unlock new growth opportunities, connecting.</p>
//                 </span>
//             </div>
//         </div>

//     </main>
//   )
// }

// export default AboutUs




import { FaLightbulb, FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <main className="container mx-auto lg:flex justify-between px-3 mb-12 lg:pt-0 pt-8">
      <div className="lg:w-3/5">
        <p className="text-[#ff7600] md:text-xl text-lg font-medium uppercase">About Us</p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3">
          Empowering Entrepreneurs and Businesses in Ethiopia
        </h1>
        <p className="lg:w-4/5 text-[#a5a5a5]">
          At Hasset, we are dedicated to fostering a thriving business landscape in Ethiopia by simplifying the ownership journey for SMEs. Our platform connects entrepreneurs with growth opportunities, enabling them to achieve their full potential.
        </p>
        <div className="lg:block hidden">
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaLightbulb className="text-5xl text-[#ff7600] w-2/5"/>
            <span>
              <h2 className="text-[#ff7600] text-lg font-medium">
                Empowering Entrepreneurs
              </h2>
              <p className="text-[#a5a5a5] w-4/5">
                We provide entrepreneurs with the tools and resources they need to unlock new growth opportunities, driving innovation and success.
              </p>
            </span>
          </div>

          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaChartLine className="text-5xl text-[#ff7600] w-2/5"/>
            <span>
              <h2 className="text-[#ff7600] text-lg font-medium">
                Empowering Businesses
              </h2>
              <p className="text-[#a5a5a5] w-4/5">
                Our platform supports businesses at every stage, from startup to expansion, ensuring they have the support they need to thrive in the competitive market.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="lg:w-2/5 flex items-end gap-4 lg:mt-0 mt-8 lg:h-auto h-[30rem]">
        <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="Empowering Entrepreneurs" className="rounded-3xl w-3/5 h-4/5 shadow-md object-cover" />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative lg:-top-20 -top-10">
          <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="Empowering Businesses" className="w-full h-3/5 rounded-3xl shadow-md object-cover" />
          <img src="https://cdn.gamma.app/d7vkeqrjc7oppar/generated-images/XA4IIVr7FQ2QDpexsAQni.jpg" alt="Growth Opportunities" className="w-full h-2/5 rounded-3xl shadow-md object-cover" />
          <button className="bg-gradient-to-r from-[#ffad66] to-[#eff9f9] rounded-2xl h-12 w-12 cursor-auto absolute -bottom-8 left-16"></button>
        </div>
      </div>

      <div className="lg:hidden block px-4 py-6">
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <FaLightbulb className="text-4xl text-[#ff7600] w-1/3"/>
          <span>
            <h2 className="text-[#ff7600] text-lg font-medium">
              Empowering Entrepreneurs
            </h2>
            <p className="text-[#a5a5a5] w-4/5">
              We provide entrepreneurs with the tools and resources they need to unlock new growth opportunities, driving innovation and success.
            </p>
          </span>
        </div>

        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <FaChartLine className="text-4xl text-[#ff7600] w-1/3"/>
          <span>
            <h2 className="text-[#ff7600] text-lg font-medium">
              Empowering Businesses
            </h2>
            <p className="text-[#a5a5a5] w-4/5">
              Our platform supports businesses at every stage, from startup to expansion, ensuring they have the support they need to thrive in the competitive market.
            </p>
          </span>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
