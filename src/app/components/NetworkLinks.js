import Link from 'next/link';
import Image from 'next/image';

const NetworkLinks = () => {
  return (
    <div className="flex space-x-4">
      <NetworkLink href="https://twitter.com/mobileclub" label="Twitter" icon="/twitter.svg" />
      <NetworkLink href="https://www.facebook.com/joinmobileclub/" label="Facebook" icon="/facebook.svg" />
      <NetworkLink href="https://www.instagram.com/mobile.club/" label="Instagram" icon="/instagram.svg" />
      <NetworkLink href="https://www.youtube.com/channel/UCrIFgI1ff-Y1j-GOP8Z8rFA" label="YouTube" icon="/youtube.svg" />
      <NetworkLink href="https://www.tiktok.com/@mobileclub_" label="TikTok" icon="/tiktok.svg" />
    </div>
  );
};

const NetworkLink = ({ href, label, icon }) => {
  return (
    <Link href={href} passHref>
      <div className="group flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer">
        <div className="rounded-full p-2 bg-gray-200  group-hover:bg-blue-500">
          <Image src={icon} alt={`${label} Icon`} width={24} height={24} loading="lazy" />
        </div>
        <span className="group-hover:text-gray-100">{label}</span>
      </div>
    </Link>
  );
};

export default NetworkLinks;
