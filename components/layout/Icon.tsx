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

export const NodeJSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2l-11 6.5v13L16 28l11-6.5v-13L16 2z" fill="#339933"/>
    <path d="M16 2v26l11-6.5v-13L16 2z" fill="#5FA04E"/>
    <path d="M16 10.5l-5.5 3.25v6.5L16 23.5l5.5-3.25v-6.5L16 10.5z" fill="#FFF"/>
  </svg>
);

export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pythonGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#387EB8"/>
        <stop offset="100%" stopColor="#366994"/>
      </linearGradient>
      <linearGradient id="pythonGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE873"/>
        <stop offset="100%" stopColor="#FFD43B"/>
      </linearGradient>
    </defs>
    <path d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1h-9.441S2 8.8 2 15.9s3.65 6.85 3.65 6.85h2.175v-3.05s-.131-3.65 3.6-3.65h6.65s3.45.056 3.45-3.35v-6.5c0 0 .482-3.25-5.64-3.25zm-3.71 1.83c.66 0 1.2.54 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z" fill="url(#pythonGradient1)"/>
    <path d="M16.115 29.9c7.1 0 6.651-3.07 6.651-3.07v-3.19h-6.751v-1h9.441S30 23.2 30 16.1s-3.65-6.85-3.65-6.85h-2.175v3.05s.131 3.65-3.6 3.65h-6.65s-3.45-.056-3.45 3.35v6.5c0 0-.482 3.25 5.64 3.25zm3.71-1.83c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2z" fill="url(#pythonGradient2)"/>
  </svg>
);

export const TypeScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="3" fill="#3178C6"/>
    <path d="M18.5 21.5h2.25v1h-5.5v-1h2.25v-7h-2.25v-1h5.5v1h-2.25v7zm3.75-8v1h3.5c.275 0 .5.225.5.5v4c0 .275-.225.5-.5.5h-3.5v1h4c.825 0 1.5-.675 1.5-1.5v-4c0-.825-.675-1.5-1.5-1.5h-4zm-13 1.5v-1h5.5v1h-2v7h-1.5v-7h-2z" fill="#FFF"/>
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
