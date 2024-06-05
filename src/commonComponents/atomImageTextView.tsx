import Image, { StaticImageData } from "next/image";

interface ImageTextProps {
  imgPath: StaticImageData;
  imgAltText: string;
  title: string;
}

const AtomImageTextView = ({ imgPath, imgAltText, title }: ImageTextProps) => {
  return (
    <div className="relative h-screen inset-0">
      <div className="absolute -z-10 bg-gradient-to-r from-slate-900">
        <Image src={imgPath} alt={imgAltText} objectFit="cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"/>
      </div>
      <div className="absolute top-48 left-1/2 justify-center text-center">
        <h1 className="text-5xl">{title}</h1>
      </div>
    </div>
  );
};

export default AtomImageTextView;
