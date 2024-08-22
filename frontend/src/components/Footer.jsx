import { FaPhone,
  FaInstagram,
  FaFacebookF,
  FaRegEnvelope,
  FaLinkedinIn
  } from 'react-icons/fa'
import { TbBuilding } from 'react-icons/tb'
import { IoArrowForward } from 'react-icons/io5'


const Footer = () => {
  const quickLinks = ['Home', 'About', 'Listings', 'Services', 'Blogs', 'Become an Agent'];

  return (
    <footer>
      <section className="flex flex-col bg-[#e6edeb] pt-8">
        <div className="container mx-auto lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between px-3 w-full py-12 lg:text-left text-center">
            <div className="lg:block flex flex-col items-center justify-center">
              <span className="flex items-center gap-x-2">
                <button className="bg-[#ff7600] text-white rounded-full w-14 h-14">
                  <TbBuilding className="w-1/2 h-1/2 m-auto" />
                </button>
                <p className="font-medium text-xl">Hasseto</p>
              </span>

              <p className="xl:text-base text-sm py-4 w-4/5 lg:text-left text-center">
                Hasseto, Addis Ababa
              </p>
              <span className="flex items-center gap-x-2 pt-4">
                <FaPhone />
                <p>+251 912 345 678</p>
              </span>
              <span className="flex items-center gap-x-1 pt-2">
                <FaRegEnvelope />
                <p>support@hasseto.com</p>
              </span>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">Quick Links</p>
              <ul>
                {quickLinks.map((link, index) => (
                    <li key={index} className="xl:text-base text-sm mt-2 cursor-pointer hover:text-[#ff7600]">
                      {link}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">Quick Links</p>
              <ul>
                {quickLinks.map((link, index) => (
                    <li key={index} className="xl:text-base text-sm mt-2 cursor-pointer hover:text-[#ff7600]">
                      {link}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="lg:w-1/3">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase lg:text-left text-center lg:pb-0 pb-2">Subscribe to our Newsletter!</p>
              <div className="relative h-14 flex justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7600] focus:border-transparent"
                  aria-label="Enter your email"
                />
                <button
                  className="bg-[#ff7600] text-white rounded-md w-14 h-12 flex justify-center items-center absolute right-2"
                  aria-label="Subscribe"
                >
                  <IoArrowForward />
                </button>
              </div>

              <p className="font-semibold py-4 text-lg lg:text-left text-center">Our Socials</p>
              <span className="text-[#ff7600] flex items-center gap-4 text-2xl lg:justify-start justify-center">
                <FaFacebookF className="cursor-pointer" aria-label="Facebook" />
                <FaInstagram className="cursor-pointer" aria-label="Instagram" />
                <FaLinkedinIn className="cursor-pointer" aria-label="LinkedIn" />
              </span>

            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <section className="bg-white border-b text-[#ff7600] xl:text-base text-sm">
        <div className="container mx-auto px-3 lg:flex justify-between items-center">
          <p className="text-center text-sm py-4">Copyright © 2024. All rights reserved.</p>
          <ul className="flex lg:flex-row flex-wrap justify-center items-center gap-x-4">
            <li className="cursor-pointer hover:text-[black]">Privacy Policy</li>
            <li className="cursor-pointer hover:text-[black]">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-[black]">Cookie Policy</li>
            <li className="cursor-pointer hover:text-[black]">Disclaimer</li>

          </ul>
        </div>
      </section>

    </footer>
  )
}

export default Footer
