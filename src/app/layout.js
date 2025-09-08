import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "tailwindcss/tailwind.css";
import Navbar from "@/Components/Navbar/Navbar";
import Head from "next/head";
import Footer from "@/Components/Footer/Footer";
import SmoothScroll from "./SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Codelinear",
  description:
    "Welcome to Codelinear - your go-to destination for cutting-edge software solutions. Explore our expertise in app development and modernization, game development, software consulting, AR/VR development, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000" />
        <meta
          name="google-site-verification"
          content="zn_KthVgLEjiy7ps83r8RacQVhfU9ac4TcpCHA-Tmkg"
        />
        <meta
          name="ahrefs-site-verification"
          content="5c1dc1ba6eee9e02f9d67fb005305389c86f846aa22b17fc57e9c832a7d954dd"
        />
        <meta
          name="keywords"
          content="software solutions, application development solutions, mobile apps development, software consulting agency, cloud computing service, Codelinear, codelinear, codelinea, code, software service, game developers, game development service, software solutions in bangalore, sharepoint service, sharepoint services, app development services, product design, UI design, UI design services, UI designer, web developer"
        />
        <link rel="icon" href="/Favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://codelinear.com" />
        <link
          rel="preload"
          href="/GraphikRegular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/ChivoMono-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800;900&display=swap"
          // rel="stylesheet"
        /> */}
        <title>Codelinear</title>

        {/* Google Analytics UA */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-249993802-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-249993802-1');
          `,
          }}
        />

        {/* Google Analytics GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PNFCRNET9J"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PNFCRNET9J');
          `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KGQ629T');
          `,
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGQ629T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
