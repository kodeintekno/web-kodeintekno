import { contactImg } from "@/assets";
import Image from "next/image";
import { styles } from "./styles";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-24" id="contact">
      <h1 className={`${styles.heroHeadText} text-center`}>
        Hubungi Profesional
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20 h-auto lg:h-[80vh]">
        {/* Form */}
        <form className="w-full max-w-lg p-4 space-y-6">
          {/* Nama Lengkap */}
          <div>
            <label
              htmlFor="name"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Nama Lengkap Anda"
            />
          </div>

          {/* Alamat Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Alamat Email Anda"
            />
          </div>

          {/* Jelaskan Kebutuhan */}
          <div>
            <label
              htmlFor="description"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Jelaskan kebutuhan anda
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full h-[150px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Tulis kebutuhan Anda di sini"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full lg:w-auto px-8 py-2 bg-orange-400 text-white font-medium text-lg rounded-full hover:bg-orange-500 transition"
          >
            Mulai Konsultasi
          </button>
        </form>

        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center">
          <Image
            src={contactImg}
            alt="Contact Us"
            className="max-w-full h-auto lg:w-[542px] lg:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
