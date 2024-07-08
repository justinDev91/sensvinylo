import Image from 'next/image';
import Link from 'next/link';

const NetworkLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:justify-start">
      <NetworkLink href="https://x.com/sensvinylo_" label="Twitter" icon="/twitter.svg" />
      <NetworkLink href="https://www.facebook.com/people/SensVinylo/61562452581346/" label="Facebook" icon="/facebook.svg" />
      <NetworkLink href="https://www.instagram.com/sensvinylo-musique/" label="Instagram" icon="/instagram.svg" />
      <NetworkLink href="https://www.youtube.com/@sensvinylo-musique" label="YouTube" icon="/youtube.svg" />
      <NetworkLink href="https://www.tiktok.com/@sensvinylo-musique" label="TikTok" icon="/tiktok.svg" />
    </div>
  );
};

const NetworkLink = ({ href, label, icon, target = "_blank", rel = "noopener noreferrer"}) => {
  return (
    <Link href={href} passHref target={target} rel={rel}>
      <div className="group flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer">
        <div className="rounded-full p-2 bg-gray-200 group-hover:bg-blue-500">
          <Image src={icon} alt={`${label} Icon`} width={24} height={24} loading="lazy" />
        </div>
        <span className="group-hover:text-gray-100">{label}</span>
      </div>
    </Link>
  );
};

export default NetworkLinks;
