import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#AFFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export const AIIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#AFFF00" strokeWidth="2"/>
        <path d="M9 16V9h1.5l2 3.333L14.5 9H16v7h-1.5v-3.5l-2-3.333-2 3.333V16H9z" fill="#AFFF00"/>
    </svg>
);

export const PsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#4299e1" strokeWidth="2"/>
        <path d="M10.5 16H9V8h4.5a3.5 3.5 0 110 7h-3zm0-1.5h1.5a2 2 0 100-4H10.5v4zM16 8v8" stroke="#4299e1" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
  </svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
  </svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.231 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.884a1.161 1.161 0 1 0 0 2.322 1.161 1.161 0 0 0 0-2.322zM8 4.884a3.116 3.116 0 1 0 0 6.232 3.116 3.116 0 0 0 0-6.232zm0 1.442a1.674 1.674 0 1 1 0 3.348 1.674 1.674 0 0 1 0-3.348z" />
  </svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const PinterestIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.791.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
  </svg>
);

export const BrandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4H7zm0 0l-2-2m2 2l2-2m-2 2v-4m2 4h4a2 2 0 002-2V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4z" />
  </svg>
);

export const WebDevIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const GraphicDesignIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

export const MotionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const PhotographyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ConsultingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

// Web Development Technology Icons

export const HTMLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30 5.902 27.201z" fill="#E44D26"/>
    <path d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z" fill="#F16529"/>
    <path d="M16 13.407h4.09l.282-3.165H16V7.151h7.75l-.074.829-.759 8.518H16v-3.091z" fill="#EBEBEB"/>
    <path d="M16 21.434l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004v-3.216z" fill="#EBEBEB"/>
    <path d="M19.827 16.151l-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007h-3.101z" fill="#FFF"/>
    <path d="M16.010 7.151v3.091h-7.2l-.062-.695-.141-1.567-.074-.829h7.477zM16 13.407v3.091h-3.399l-.062-.695-.141-1.567-.074-.829H16z" fill="#FFF"/>
  </svg>
);

export const CSSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z" fill="#1572B6"/>
    <path d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z" fill="#33A9DC"/>
    <path d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16v-3.091z" fill="#FFF"/>
    <path d="M16.019 21.218l-.014.004-3.442-.929-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004v-3.217z" fill="#EBEBEB"/>
    <path d="M19.827 16.151l-.372 4.139-3.447.93v3.217l6.336-1.757.047-.522.537-6.007h-3.101z" fill="#FFF"/>
    <path d="M16.010 6.935v3.091h-7.2l-.062-.695-.141-1.567-.074-.829h7.477zM16 13.191v3.091h-3.399l-.062-.695-.141-1.567-.074-.829H16z" fill="#EBEBEB"/>
  </svg>
);

export const JavaScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" fill="#F7DF1E"/>
    <path d="M20.63 21.71c.28.56.66.97 1.32.97.56 0 .91-.28.91-.66 0-.46-.36-.62-1-.89l-.34-.15c-1.03-.44-1.71-1-1.71-2.18 0-1.09.83-1.92 2.12-1.92.92 0 1.58.32 2.05 1.16l-1.12.72c-.25-.44-.52-.62-.93-.62-.42 0-.69.27-.69.62 0 .44.27.62.89.89l.34.15c1.21.52 1.89 1.05 1.89 2.24 0 1.28-1 2.02-2.35 2.02-1.32 0-2.17-.63-2.59-1.45l1.21-.7zm-5.43.18c.21.37.4.68.86.68.44 0 .72-.17.72-.83v-4.5h1.48v4.52c0 1.37-.8 1.99-1.97 1.99-1.06 0-1.67-.55-1.99-1.21l1.1-.65h-.2z" fill="#000"/>
  </svg>
);

export const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
    <path d="M16 11.5c-5.52 0-10 1.79-10 4s4.48 4 10 4 10-1.79 10-4-4.48-4-10-4zm0 6.5c-4.42 0-8-1.12-8-2.5S11.58 13 16 13s8 1.12 8 2.5S20.42 18 16 18z" fill="#61DAFB"/>
    <path d="M11.5 13.87c-2.76-4.78-2.37-9.09 0-10.37s6.24 1.42 9 6.2c2.76 4.78 2.37 9.09 0 10.37s-6.24-1.42-9-6.2zm7.79 4.5c2.21-3.83 2.5-7.33.65-8.26-1.85-.93-5.07.7-7.29 4.53-2.21 3.83-2.5 7.33-.65 8.26 1.85.93 5.07-.7 7.29-4.53z" fill="#61DAFB"/>
    <path d="M20.5 13.87c2.76-4.78 6.76-7.48 9-6.2s2.76 5.59 0 10.37c-2.76 4.78-6.76 7.48-9 6.2s-2.76-5.59 0-10.37zm-1.21 5.83c1.85.93 5.07-.7 7.29-4.53 2.21-3.83 2.5-7.33.65-8.26-1.85-.93-5.07.7-7.29 4.53-2.21 3.83-2.5 7.33-.65 8.26z" fill="#61DAFB"/>
  </svg>
);



export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const MenuIcon: React.FC<{ className?: string; isOpen?: boolean }> = ({ className, isOpen }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
      className="transition-all duration-700"
    />
  </svg>
)

// --- Placeholder Icon for General Tech/Settings (e.g., Next.js, Django, Tailwind) ---
/**
 * A generic Gear icon often used for settings or technology.
 */
export const TechGearIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 12 4.6l.09-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// --- Placeholder Icon for Databases/Backend (e.g., Postgres, MySQL, Supabase, Prisma) ---
/**
 * A generic Server/Database icon.
 */
export const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6" y1="6" y2="6" />
    <line x1="6" x2="6" y1="18" y2="18" />
  </svg>
);

// --- Text-Based Placeholders for Logos (Most Replicable) ---
/**
 * A text-based icon placeholder for quick identification.
 * Use the className to style the text size and color.
 */
import { 
  Code2, 
  Palette, 
  Database, 
  Zap, 
  Lock, 
  Smartphone,
  Sheet,
  BarChart3
} from 'lucide-react';

export const DjangoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Code2 className={className} />
);


export const ShadcnIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Code2 className={className} />
);

export const PrismaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Database className={className} />
);

export const ReduxIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Zap className={className} />
);


export const SupabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Database className={className} />
);

export const ClerkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Lock className={className} />
);

export const MySQLIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Database className={className} />
);



export const PowerBIIcon: React.FC<{ className?: string }> = ({ className }) => (
  <BarChart3 className={className} />
);

export const GoogleSheetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Sheet className={className} />
);



export const CodeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" />
  </svg>
);

export const BrainIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const LayersIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19 2.86 3.22a.75.75 0 0 1 0-1.342l3.255-1.968a.75.75 0 0 1 .75 0l3.255 1.968a.75.75 0 0 1 0 1.342l-3.255 1.968a.75.75 0 0 1-.75 0ZM12.75 5.19l-3.255-1.968a.75.75 0 0 1 0-1.342L12.75 0l3.255 1.968a.75.75 0 0 1 0 1.342L12.75 5.19ZM6.115 12.78l-3.255-1.968a.75.75 0 0 1 0-1.342l3.255-1.968a.75.75 0 0 1 .75 0l3.255 1.968a.75.75 0 0 1 0 1.342l-3.255 1.968a.75.75 0 0 1-.75 0Zm6.635 0-3.255-1.968a.75.75 0 0 1 0-1.342l3.255-1.968a.75.75 0 0 1 .75 0l3.255 1.968a.75.75 0 0 1 0 1.342l-3.255 1.968a.75.75 0 0 1-.75 0Zm-6.635 7.59-3.255-1.968a.75.75 0 0 1 0-1.342l3.255-1.968a.75.75 0 0 1 .75 0l3.255 1.968a.75.75 0 0 1 0 1.342l-3.255 1.968a.75.75 0 0 1-.75 0Zm6.635 0-3.255-1.968a.75.75 0 0 1 0-1.342l3.255-1.968a.75.75 0 0 1 .75 0l3.255 1.968a.75.75 0 0 1 0 1.342l-3.255 1.968a.75.75 0 0 1-.75 0Z" />
  </svg>
);

export const NextJSIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z" fill="black"/>
        <path d="M82.1712 48.2325L46.8013 90.5526V41.7676H54.6723V77.1725L86.2238 41.7676H94.0825V90.5526H86.2113V55.1826L50.8413 97.4676H42.995V34.9176H90.135V48.2325H82.1712Z" fill="white"/>
    </svg>
);
export const TypeScriptIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="32" fill="#3178C6"/>
        <path d="M52.32 89.6V44H62.56L71.44 67.84H71.68L80.56 44H90.8V89.6H82.48V53.44H82.24L74.8 73.84H68.32L60.88 53.44H60.72V89.6H52.32ZM36 67.6C36 61.6 38.64 57.52 42.96 55.36V46.96C39.68 48.72 37.04 52.48 37.04 57.04V60.4H50.56V67.04C50.56 74.56 44.8 78.88 37.12 78.88C33.28 78.88 30.16 77.28 28 74.8L33.28 70.24C34.4 71.36 35.68 72 37.12 72C40.64 72 42.56 70.4 42.56 67.36V67.04H36V67.6Z" fill="white"/>
    </svg>
);
export const TailwindCSSIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 0C6.042 0 0 6.042 0 13.5S6.042 27 13.5 27c3.434 0 6.556-1.288 8.95-3.385.34-.302.55-.73.55-1.18V13.5c0-1.86 1.27-3.456 3-3.928C26.347 9.405 27 8.262 27 7.027V3.375C27 1.512 25.488 0 23.625 0h-10.125Zm27 0c-7.458 0-13.5 6.042-13.5 13.5s6.042 13.5 13.5 13.5c3.434 0 6.556-1.288 8.95-3.385.34-.302.55-.73.55-1.18V13.5c0-1.86 1.27-3.456 3-3.928.347-.167.52-.573.52-.973V3.375C54 1.512 52.488 0 50.625 0H40.5Z" fill="currentColor"/>
    </svg>
);
export const ViteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 256 257" xmlns="http://www.w3.org/2000/svg">
        <path d="m128 .5c-16.51 0-32.22 3.2-46.72 9.42-37.1 15.86-63.46 49.3-71.55 89.26C2.24 134.4 0 169.56 0 205.5c0 14.93 12.07 27 27 27h15.93c14.12 0 26.04-10.74 27.87-24.63 1.04-7.85 5-15.01 10.7-19.82 12.55-10.59 28.3-16.05 45.5-16.05s32.95 5.46 45.5 16.05c5.7 4.81 9.66 11.97 10.7 19.82C184.03 221.76 195.95 232.5 210.07 232.5h18.93c14.93 0 27-12.07 27-27v-1.82c0-54.08-30.91-100.35-74.72-120.75C168.1.91 148.45.5 128 .5Z" fill="url(#a)"/>
        <path d="m202.2 131.78-95.21 95.21c-4.48 4.48-11.83 4.42-16.24-.13l-45.96-48.4c-4-4.22-3.8-10.89.4-14.9l80.24-74.85c5.03-4.69 12.87-4.14 17.15.93l60.1 71.19c3.92 4.64 3.46 11.23-.98 15.39l-.54.46Z" fill="url(#b)"/>
        <defs>
            <linearGradient id="a" x1="128" x2="128" y1="0.5" y2="256.5" gradientUnits="userSpaceOnUse"><stop stop-color="#41D1FF"/><stop offset="1" stop-color="#BD34FE"/></linearGradient>
            <linearGradient id="b" x1="122" x2="164.18" y1="110.15" y2="242.4" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEA83"/><stop offset=".08" stop-color="#FFDD35"/><stop offset="1" stop-color="#FFA800"/></linearGradient>
        </defs>
    </svg>
);
export const FigmaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20a10 10 0 0 1 10-10h10v10a10 10 0 0 1-10 10H20Z" fill="#0ACF83"/>
        <path d="M10 20a10 10 0 0 1 10-10h10v20H20a10 10 0 0 1-10-10Z" fill="#A259FF"/>
        <path d="M10 40a10 10 0 1 1 20 0v10H20a10 10 0 0 1-10-10Z" fill="#F24E1E"/>
        <path d="M10 20a10 10 0 0 0 10 10h10V20H10Z" fill="#FF7262"/>
        <circle cx="20" cy="50" r="10" fill="#1ABCFE"/>
    </svg>
);
export const ReactNativeIcon = ReactIcon;
export const NodeJSIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 0L242.5 66.95V200.85L128 267.8L13.5 200.85V66.95L128 0Z" fill="#8CC84B"/>
        <path d="M128 25.4L22.9 74.6V191.6L128 240.8L233.1 191.6V74.6L128 25.4Z" fill="#43853D"/>
        <path d="M171.748 102.771L163.132 107.82C160.899 109.213 160.75 111.411 161.464 113.19C162.24 115.118 164.295 116.126 166.446 115.48L179.916 111.455C179.67 122.998 174.522 131.789 162.24 139.882C149.202 148.514 133.024 152.022 119.831 151.774V140.71C133.633 140.71 143.727 137.284 150.322 133.199C156.918 129.114 159.284 123.635 159.284 117.935V96.7915L111.751 123.118C109.111 124.593 107.056 123.67 106.138 121.224C105.32 118.821 106.331 116.623 108.564 115.23L117.18 110.181C119.413 108.788 119.562 106.59 118.848 104.811C118.072 102.883 116.017 101.875 113.866 102.521L100.396 106.546C100.642 95.003 105.79 86.2119 118.072 78.1188C130.354 70.0257 146.532 66.5178 159.725 66.7656V77.831C145.923 77.831 135.829 81.2571 129.234 85.3421C122.638 89.4271 120.272 94.9064 120.272 100.606V121.75L167.805 95.4234C170.445 93.9488 172.5 94.8717 173.418 97.3175C174.336 99.7204 173.325 101.918 171.135 103.311L171.748 102.771Z" fill="#FFFFFF"/>
    </svg>
);
export const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M93.3333 13.3333H162.667C186.267 13.3333 205.333 32.4 205.333 56V60.6667C205.333 69.8667 198.2 77.3333 188.667 77.3333H84C56.9333 77.3333 34.6667 99.6 34.6667 126.667V132C34.6667 151.067 49.6 166.667 68.6667 166.667H172V56C172 49.3733 166.96 44 160.667 44H93.3333C87.04 44 82.6667 48.7067 82.6667 54.6667V109.333H104C111.4 109.333 118.133 112.4 122.667 117.333C127.2 122.267 129.333 129.2 129.333 136.667V200C129.333 206.627 134.373 212 140.667 212H162.667C186.267 212 205.333 192.933 205.333 169.333V164.667C205.333 155.467 212.467 148 222 148H172C144.933 148 122.667 125.733 122.667 98.6667V94.3333C122.667 75.2667 107.733 59.3333 88.6667 59.3333H93.3333V13.3333Z" fill="#3776AB"/>
        <path d="M162.667 242.667H93.3333C69.7333 242.667 50.6667 223.6 50.6667 200V195.333C50.6667 186.133 57.8 178.667 67.3333 178.667H172C199.067 178.667 221.333 156.4 221.333 129.333V124C221.333 104.933 206.4 89.3333 187.333 89.3333H84V200C84 206.627 89.04 212 95.3333 212H162.667C168.96 212 173.333 207.293 173.333 201.333V146.667H152C144.6 146.667 137.867 143.6 133.333 138.667C128.8 133.733 126.667 126.8 126.667 119.333V56C126.667 49.3733 121.627 44 115.333 44H93.3333C69.7333 44 50.6667 63.0667 50.6667 86.6667V91.3333C50.6667 100.533 43.5333 108 34 108H84C111.067 108 133.333 130.267 133.333 157.333V161.667C133.333 180.733 148.267 196.667 167.333 196.667H162.667V242.667Z" fill="#FFC331"/>
    </svg>
);
export const FlaskIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.16,6.32,18,3.16,16.59,4.58l3.16,3.16ZM12,2a10,10,0,0,0-9.8,11.59l-1.6,1.59L2,16.59l1.59-1.59A10,10,0,1,0,12,2Zm0,18a8,8,0,0,1-7.89-6.71.51.51,0,0,1,.5-.55H19.39a.51.51,0,0,1,.5.55A8,8,0,0,1,12,20Z"/>
    </svg>
);
export const DockerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M246.667 112C244.533 80.5333 221.867 56.5333 192 53.3333C184.533 34.1333 166.4 20.8 144 19.2C116.8 16.5333 93.3333 34.1333 85.3333 58.1333C83.2 57.6 81.0667 57.6 78.9333 57.6C54.4 57.6 34.1333 77.8667 34.1333 102.4C34.1333 104.533 34.1333 106.667 34.6667 108.8H34.1333C14.9333 108.8 0 123.733 0 142.933C0 161.067 13.3333 176 31.4667 176H56.5333V148.8H42.6667V132.8H70.9333V148.8H56.5333V176H234.667C246.933 176 256 166.933 256 154.667C256 138.667 253.333 124.267 246.667 112Z" fill="#2496ED"/>
        <rect x="42.6667" y="71.4667" width="28.2667" height="17.0667" rx="4.26667" fill="white"/>
        <rect x="76.8" y="71.4667" width="28.2667" height="17.0667" rx="4.26667" fill="white"/>
        <rect x="110.933" y="71.4667" width="28.2667" height="17.0667" rx="4.26667" fill="white"/>
        <rect x="145.067" y="71.4667" width="28.2667" height="17.0667" rx="4.26667" fill="white"/>
        <rect x="42.6667" y="94.4" width="28.2667" height="17.0667" rx="4.26667" fill="white"/>
    </svg>
);
export const PostgreSQLIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M110.435 128H85.4783V95.0435C85.4783 89.5652 83.2174 86.8261 77.6522 86.8261H56.4348V128H31.4783V0H77.6522C92.4348 0 101.826 6.17391 101.826 19.3913C101.826 28.5217 96.2609 34.6087 88.4783 37.1304C99.5652 39.4783 110.435 47.6522 110.435 62.4348V128ZM77.6522 57.6522C85.6522 57.6522 89.6522 53.6522 89.6522 45.6522C89.6522 37.6522 85.6522 33.6522 77.6522 33.6522H56.4348V57.6522H77.6522Z" fill="#336791"/>
    </svg>
);
export const GoogleCloudIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 174 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M125.753 58.3333C125.753 87.9733 101.66 112 72.0869 112C42.514 112 18.4211 87.9733 18.4211 58.3333C18.4211 28.6933 42.514 4.66666 72.0869 4.66666" fill="#4285F4"/>
        <path d="M125.753 58.3333C125.753 87.9733 110.151 114.333 90.177 120.667C70.2032 127 48.3197 121.333 33.4355 107.333C18.5513 93.3333 10.6044 73.6667 11.3219 54C12.0394 34.3333 21.4744 16.3333 36.3586 7.33332C51.2428 -1.66668 70.2032 -2.33334 87.2672 5.33332C104.331 13 119.215 28.6933 125.753 46.3333" fill="#EA4335"/>
        <path d="M129.339 0C108.648 4.66666 90.8947 18.3333 81.4597 36C82.8947 16.3333 95.7095 -1.66668 114.67 0.666656C133.63 3 -0.625816 77.3333 24.524 71.6667C49.6738 66 150.756 16.3333 129.339 0Z" fill="#FBBC05"/>
        <path d="M165.733 46.3333C158.477 31.6667 146.331 19.3333 131.447 12C143.592 18.3333 152.31 30 153.027 43.3333C153.745 56.6667 146.331 69 134.364 75C122.397 81 107.513 79.3333 96.9846 71.6667C86.4566 64 80.7421 51.6667 82.1771 39.3333C82.8947 31.6667 86.4566 24.3333 90.8947 18.3333C77.0195 24.3333 65.0524 36 60.6143 50C56.1762 64 57.6112 79.3333 64.3223 91.3333C71.0333 103.3333 82.1771 111.333 95.5395 113C108.902 114.667 122.995 109.333 132.43 100C141.865 90.6667 148.576 78.3333 149.294 64.6667C150.011 51 174.104 58.3333 165.733 46.3333Z" fill="#34A853"/>
    </svg>
);
export const TensorFlowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 109 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3,34.55,29.35,19.8,55.69,34.55V64L3,93.46Z" fill="#FF8F00"/>
        <path d="M55.69,34.55,82,19.8,108.35,34.55V64L55.69,93.46Z" fill="#FFA000"/>
        <path d="M3,64V93.46L29.35,108.21V78.75Z" fill="#FF6F00"/>
        <path d="M82,78.75v29.46L108.35,93.46V64Z" fill="#FFB300"/>
        <path d="M55.69,0,3,19.8V3.41Z" fill="#F57C00"/>
        <path d="M55.69,123.08,82,108.21,108.35,93.46V109.87Z" fill="#FFE082"/>
        <path d="M55.69,0,82,16.39V0Z" fill="#FFC107"/>
        <path d="m29.35,19.8 26.34,14.75V64L29.35,49.25Z" fill="#FFF3E0"/>
        <path d="m82,19.8-26.31,14.75V64L82,49.25Z" fill="#FFE0B2"/>
    </svg>
);
export const PyTorchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M228.667 96.6578C222.84 96.5333 217.138 94.6133 212.187 91.2444C201.244 83.84 195.969 71.3778 195.213 58.2133C194.227 41.3422 201.782 25.4311 214.938 15.3422C218.498 12.5956 222.587 10.6756 226.907 9.8C229.956 9.15556 233.129 9.15556 236.178 9.92C237.289 10.2222 237.933 11.4578 237.404 12.5689L229.476 34.0267C229.071 35.0133 227.96 35.5422 226.907 35.1378C224.231 34.0267 221.431 33.6489 218.756 34.1511C211.573 35.4222 206.533 41.1244 206.409 48.4311C206.284 55.7378 210.88 61.9689 217.911 63.3644C220.587 63.8667 223.387 63.4889 226.062 62.3778C227.116 61.9022 228.351 62.2756 228.782 63.2622L237.529 84.72C238.058 85.8311 237.529 87.0667 236.418 87.4444C232.858 88.84 229.067 89.4844 225.276 89.2533L225.276 89.2533C225.276 102.542 216.782 113.898 205.187 116.773C193.591 119.649 181.244 113.773 175.738 103.387C175.196 102.4 173.96 101.902 172.933 102.4L151.476 113.898C150.449 114.427 150.071 115.662 150.613 116.649C158.293 129.436 171.329 137.64 185.831 137.764H186.204C208.667 137.236 225.911 119.244 228.667 96.6578Z" fill="#EE4C2C"/>
        <path d="M27.3333 159.342C33.16 159.467 38.8622 161.387 43.8133 164.756C54.7556 172.16 60.0311 184.622 59.2756 197.787C58.2889 214.658 50.8444 230.569 37.6889 240.658C34.1289 243.404 30.04 245.324 25.72 246.2C22.6711 246.844 19.4978 246.844 16.4489 246.08C15.3378 245.778 14.6933 244.542 15.2222 243.431L23.1511 221.973C23.5556 220.987 24.6667 220.458 25.72 220.862C28.3956 221.973 31.1956 222.351 33.8711 221.849C41.0533 220.578 46.0933 214.876 46.2178 207.569C46.3422 200.262 41.7467 194.031 34.7156 192.636C32.04 192.133 29.24 192.511 26.5644 193.622C25.5111 194.098 24.2756 193.724 23.8444 192.738L15.0978 171.28C14.5689 170.169 15.0978 168.933 16.2089 168.556C19.7689 167.16 23.56 166.516 27.3511 166.747L27.3333 159.342Z" fill="#EE4C2C"/>
    </svg>
);
export const PandasIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,40a20,20,0,1,1-20,20A20,20,0,0,1,120,64Zm56,104a20,20,0,1,1,20-20A20,20,0,0,1,176,168Z"/>
        <path d="M120,104H88a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z"/>
        <path d="M168,104h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"/>
        <path d="M120,144H88a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z"/>
        <path d="M168,144h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"/>
    </svg>
);
export const NumPyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M135.834 53.0567V125.438H202.943V53.0567H135.834Z" fill="#4D77CF"/>
        <path d="M53.0566 130.562V202.943H120.166V130.562H53.0566Z" fill="#FFD43B"/>
        <path d="M135.834 130.562L120.166 146.231V130.562H135.834Z" fill="#4D77CF"/>
        <path d="M135.834 130.562L53.0566 213.339H68.7252L135.834 146.231V130.562Z" fill="#4D77CF"/>
        <path d="M135.834 130.562H218.611L135.834 47.7842V130.562Z" fill="#4D77CF"/>
    </svg>
);

export const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 2 256" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
);