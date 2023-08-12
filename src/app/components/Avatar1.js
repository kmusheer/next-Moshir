import Image from "next/image";

const Avatar1 = () => {
  return <div className="hiddn xl:flex xl:max-w-none">
    <Image src='/images/AV.png' width={737} height={678} alt="Avtar" className="translate-z-0 w-full h-full" />
  </div>
};

export default Avatar1;
