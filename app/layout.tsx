import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BootstrapClient from "./components/BootstrapClient";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "Nails by Bonnie",
	description: "Bonnie has been delivering professional nail care services for over 10 years, and would love to share her expertise with you by giving your hands and feet a relaxing, professional, and quality experience.",
	icons: {
		icon: 'images/favicon.png',
		apple: 'images/favicon.png', 
	},
	openGraph: {
		url: 'https://nailsbybonniemadison.com',
    	siteName: 'Nails by Bonnie',
		locale: 'en_US',
    	type: 'website',
	},
	alternates: {
    canonical: 'https://nailsbybonniemadison.com/',
  	},
	robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
		index: true,
		follow: true,
		noimageindex: false,
		'max-video-preview': -1,
		'max-image-preview': 'large',
		'max-snippet': -1,
    },
	},
};




export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head/>
			<body>
				<Header/>
				<main className="container">
					{children}
				</main>
				<Footer/>
				<BootstrapClient />
			</body>
		</html>
	);
}
// components/BootstrapClient.tsx (or .js)
