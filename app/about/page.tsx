import type { Metadata } from "next";
import Image from "next/image";
// import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "Owner and Professional Nail Technician",
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
    canonical: 'https://nailsbybonniemadison.com/about',
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

export default function About() {
    return (
        <section>

            <article className="row flex-lg-row-reverse align-items-center g-5 mb-2"> 
                <div className="col-12 col-sm-8 col-lg-6 mx-auto"> 
                    <Image src="/images/Bonnie.jpg" className="d-block mx-auto px-3 img-fluid" alt="Nail Services by Bonnie" width="400" height="300" loading="eager" />
                </div>
                <div className="col-12 col-lg-6">
                    <h1 className="h2 lh-1 mb-3">Owner and Professional Nail Technician</h1>
                    <p>
                        Bonnie has been delivering professional nail care services for over 10 years, and would love to share 
                        her expertise with you by giving your hands and feet a relaxing, professional, and quality experience.
                    </p>
                </div>
            </article>

        </section>
        
    );
}
