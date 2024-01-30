import avatar from "../assets/images/profile/profile.png";
import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaMobileAlt,
} from "react-icons/fa";
import { FaXTwitter, FaDownload, FaGithub } from "react-icons/fa6";

export default function ProfileCardTwo() {
  const socialLinkClass =
    "w-10 h-10 rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] flex justify-center items-center hover:text-white transition-colors duration-300 ease-in-out bg-[#F3F6F6] dark:bg-[#212425]";

  return (
    <section>
      {/* Avatar image */}
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <img
          src={avatar}
          alt="profile"
          className="w-[200px] absolute left-[50%] transform -translate-x-[50%] h-[240px] mx-auto  rounded-[20px] -mt-[140px]"
        />
        {/* Social Card */}
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
            Pako Mercado
          </h1>
          <h3 className="mb-4 text-gray-500 inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-gray-400">
            FullStack Developer
          </h3>

          {/* Social links */}
          <article className="flex justify-center space-x-3">
            <a
              href="https://github.com/pakomercado0517"
              target="_blank"
              rel="noreferrer"
            >
              <span className={`${socialLinkClass} dark:text-white`}>
                <FaGithub />
              </span>
            </a>

            <a
              href="https://www.facebook.com/PakoMercado85"
              target="_blank"
              rel="noreferrer"
            >
              <span className={`${socialLinkClass} text-[#1773EA]`}>
                <FaFacebookF />
              </span>
            </a>

            <a
              href="https://twitter.com/Pakomarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${socialLinkClass} dark:text-white`}>
                <FaXTwitter />
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/francisco-mercado-escalante/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${socialLinkClass} text-[#0072b1]`}>
                <FaLinkedinIn />
              </span>
            </a>
          </article>

          {/* Personal Information */}
          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 ">
              <span
                className={`${socialLinkClass} flex-shrink-0 bg-white dark:bg-black text-[#E93B81] shadow-md`}
              >
                <FaMobileAlt />
              </span>
              <div className="text-left ml-2 5">
                <p className="text-left ml-2 5">Teléfono</p>
                <p className="dark:text-white break-all">
                  {" "}
                  <a href="tel:+7831046697">+527831046697</a>
                </p>
              </div>
            </div>

            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5 ">
              <span
                className={`${socialLinkClass} flex-shrink-0 bg-white dark:bg-black text-[#6AB5B9] shadow-md`}
              >
                <FaEnvelopeOpenText />
              </span>
              <div className="text-left ml-2 5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6] ">
                  Email
                </p>
                <p className="dark:text-white break-all">
                  {" "}
                  <a
                    href="mailto:fgme.facturacion@gmail.com"
                    className="hover:text-[#FA5252] text-sm md:text-md duration-300 transition "
                  >
                    fgme.facturacion@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5 ">
              <span
                className={`${socialLinkClass} flex-shrink-0 bg-white dark:bg-black text-[#C17CEB] shadow-md`}
              >
                <FaCalendarAlt />
              </span>
              <div className="text-left ml-2 5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6] ">
                  Cumpleaños
                </p>
                <p className="dark:text-white break-all">14 Jun, 1985</p>
              </div>
            </div>
          </div>

          {/* Download Resume  */}
          <a
            href="https://firebasestorage.googleapis.com/v0/b/servio-34472.appspot.com/o/documents%2FCV-2022-NP.pdf?alt=media&token=4cb6f02a-6b0e-4a55-a3c0-c2e7591a791e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 texl-lg text-white rounded-[35px] mt-6 "
          >
            <FaDownload className="mr-2" /> Curriculum
          </a>
        </div>
      </div>
    </section>
  );
}
