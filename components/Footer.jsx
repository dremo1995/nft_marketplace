import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { Button } from '.';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className=" flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">Ultraverse Inc. All Rights Reserved</p>
          {[images.instagram, images.twitter, images.telegram, images.discord].map((image, index) => (
            <div key={index}>
              <Image src={image} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
