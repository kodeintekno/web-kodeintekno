"use client";

import { contactImg } from "@/assets";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { styles } from "./styles";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!serviceId || !templateId || !publicKey) {
      alert("Konfigurasi layanan email tidak lengkap.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Kartono",
          from_email: form.email,
          to_email: "kartono.saleh@gmail.com",
          message: form.message,
        },
        publicKey,
      )
      .then(
        () => {
          setLoading(false);
          alert("Terima kasih. Kami akan segera menghubungi Anda.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ups, terjadi kesalahan. Silakan coba lagi.");
        },
      );
  };

  return (
    <div className="container mx-auto px-4 py-24" id="contact">
      <h1 className={`${styles.heroHeadText} text-center`}>
        Hubungi Profesional
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20 h-auto lg:h-[80vh]">
        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-4 space-y-6"
        >
          {/* Nama Lengkap */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm  text-gray-700 mb-2 md:text-base lg:text-lg max-w-full md:max-w-[80%] lg:max-w-[90%] mx-auto lg:mx-0 leading-relaxed lg:leading-9"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm md:text-base lg:text-lg placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Nama Lengkap Anda"
            />
          </div>

          {/* Alamat Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm  text-gray-700 mb-2 md:text-base lg:text-lg max-w-full md:max-w-[80%] lg:max-w-[90%] mx-auto lg:mx-0 leading-relaxed lg:leading-9"
            >
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm md:text-base lg:text-lg placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Alamat Email Anda"
            />
          </div>

          {/* Jelaskan Kebutuhan */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm  text-gray-700 mb-2 md:text-base lg:text-lg max-w-full md:max-w-[80%] lg:max-w-[90%] mx-auto lg:mx-0 leading-relaxed lg:leading-9"
            >
              Jelaskan kebutuhan anda
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full h-[150px] border border-gray-300 rounded-md p-2 text-sm md:text-base lg:text-lg placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Tulis kebutuhan Anda di sini"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full lg:w-auto px-8 py-2 text-white font-medium text-lg rounded-full bg-gradient-to-r from-[#ffb158] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#feab1b] transition"
          >
            {loading ? "Mengirim Pesan..." : "Kirim Pesan"}
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
