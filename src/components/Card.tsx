import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  deskripsi: string;
}

const Card = ({ img, title, deskripsi }: CardProps) => {
  return (
    <>
      <div className="flex flex-col items-center bg-white w-[270px] h-[400px] lg:w-[350px] lg:h-[480px] rounded-xl">
        <Image alt="" src={img} className="w-[90px] lg:w-[130px] mt-12" />

        <h1 className="font-semibold text-xl lg:text-2xl my-5">{title}</h1>
        <p className="text-sm md:text-base lg:text-lg w-[80%] text-center font-medium mb-5 text-gray-700">
          {deskripsi}
        </p>

        <a
          href="#"
          className="font-semibold text-base border-b-2 border-[#FA8305] text-[#FA8305]"
        >
          Read More
        </a>
      </div>
    </>
  );
};

export default Card;
