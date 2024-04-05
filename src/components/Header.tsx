import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;
const Header = ({ image, children }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center gap-4 mb-4">
      <img src={image.src} alt={image.alt} className="w-20 rounded-full " />
      <h1 className="text-2xl font-extrabold text-[#f7e596] tracking-wide capitalize">
        {children}
      </h1>
    </header>
  );
};

export default Header;
