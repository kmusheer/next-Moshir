import Image from "next/image";

const TopLeftImg = () => {
  return <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w[400px] opacity-50">
    <Image src="/images/top-left-img.png" width={400} height={400} alt="top left img" priority={true}

/>
  </div>;
};

export default TopLeftImg;
