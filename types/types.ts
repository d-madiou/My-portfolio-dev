import { StaticImageData } from "next/image";

interface InfoCardData {
  id: string;
  title: string;
  description: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  image: string | StaticImageData;
}

export type { InfoCardData };