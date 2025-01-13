import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  deskripsi: string;
}

const Card = ({ img, title, deskripsi }: CardProps) => {
  return (
    <>
      <div className="flex flex-col items-center bg-white w-[350px] h-[480px] rounded-xl">
        <Image alt="" src={img} className="w-[130px] mt-12" />

        <h1 className="font-semibold text-2xl my-5">{title}</h1>
        <p className="text-xl w-[70%] text-center font-medium mb-5">
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
