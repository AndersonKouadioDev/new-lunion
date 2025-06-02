// components/SectionBanner.tsx
import Image from 'next/image';
import bannerBg from '@/public/assets/images/contact.jpg'; // remplace par ton image

export default function SectionBannerContact() {
  return (
    <div className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background image */}
      <Image
        src={bannerBg}
        alt={` Banner`}
        layout="fill"
        objectFit="cover"
        className="z-0 brightness-80"
        priority
      />

      {/* Overlay Content */}
      <div className="z-10">
        <h1 className="text-4xl md:text-5xl font-bold"></h1>
        <div className="mt-4 text-lg flex justify-center items-center gap-2">
          <span className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">Contact</span>
         
          <span className="text-white font-medium"></span>
        </div>
      </div>
    </div>
  );
}
