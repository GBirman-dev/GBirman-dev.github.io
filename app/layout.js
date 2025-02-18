import "./globals.css";
import localFont from 'next/font/local';


const readExProRegular = localFont({
  src: '../public/fonts/ReadExPro-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-read-ex-pro-regular',
});


const readExProThin = localFont({
  src: '../public/fonts/ReadExPro-Light.ttf',
  weight: '100', 
  style: 'normal',
  variable: '--font-read-ex-pro-thin',
});


const avenirNextRegular = localFont({
  src: '../public/fonts/AvenirNextLTPro-Regular.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-avenir-next-regular',
});

export const metadata = {
  title: "George Birman",
  description: "Senior UI/UX designer - transforming ideas to amazing digital products",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${readExProRegular.variable} ${readExProThin.variable} ${avenirNextRegular.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}