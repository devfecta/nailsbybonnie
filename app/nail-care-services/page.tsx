import type { Metadata } from "next";
import Image from "next/image";
// import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "Professional Nail Care Services",
	description: "Bonnie invites you to experience the difference in her service. Her aim to maintain a reputation of professional quality nail care service which will compel you to refer her with pride.",
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
    canonical: 'https://nailsbybonniemadison.com/nail-care-services',
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

export default function NailServices() {
    return (
        <section>
            <article className="row my-3">
                <div className="col-12">
                    <h1 className="display-5 fw-bold lh-1 mb-3">
                        Nail Care Services
                    </h1>
                    <p>
                        Bonnie has been delivering professional nail care services for over 10 years, and would love to share 
                        her expertise with you by giving your hands and feet a relaxing, professional, and quality experience.
                    </p>
                </div>
            </article>

            <article className="row flex-lg-row-reverse align-items-center g-5 my-2"> 
                <div className="col-12 col-sm-8 col-lg-6"> 
                    <Image src="/images/manicure.jpg" className="d-block mx-auto img-fluid" alt="Manicure Nail Services" width="300" height="200" loading="eager" />
                </div>
                <div className="col-12 col-lg-6">
                    <h2>Manicures</h2>
                    <p>
                        Treat yourself to one of Bonnie&apos;s professional and relaxing manicures that include nail shaping, 
                        cuticle care, hand massage and your favorite nail polish.
                    </p>
                    <p>
                        All manicure services include nail care and hand massage.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="https://app.squareup.com/appointments/book/rfrwmdwkv6qhp0/L5JMDAEQSTJ1K/start" className="btn btn-primary btn-lg px-4 me-md-2">
                            Book a Manicure
                        </a>
                    </div>
                </div>
            </article>

            <article className="row flex-lg-row align-items-center g-5 my-2"> 
                <div className="col-12 col-sm-8 col-lg-6"> 
                    <Image src="/images/pedicure.jpg" className="d-block mx-auto img-fluid" alt="Pedicure Nail Services" width="300" height="200" loading="eager" />
                </div>
                <div className="col-12 col-lg-6">
                    <h2>Pedicures</h2>
                    <p>
                        Relax, Refresh, Renew! Bonnie&apos;s pedicures will leave your legs and feet feeling relaxed, refreshed, and renewed with a warm bath, nail shaping, cuticle care, massage with hot stones as an option, paraffin wax, warm towels, and your favorite nail polish.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="https://app.squareup.com/appointments/book/rfrwmdwkv6qhp0/L5JMDAEQSTJ1K/start" className="btn btn-primary btn-lg px-4 me-md-2">
                            Book a Pedicure
                        </a>
                    </div>
                </div>
            </article>

            <article className="row flex-lg-row-reverse align-items-center g-5 my-2"> 
                <div className="col-12 col-sm-8 col-lg-6"> 
                    <Image src="/images/artificial-nails.jpg" className="d-block mx-auto img-fluid" alt="Artificial Nail Services" width="300" height="200" loading="eager" />
                </div>
                <div className="col-12 col-lg-6">
                    <h2>Artificial Nails</h2>
                    <p>
                        From designs to extensions, Bonnie can do it all! Enhance your nails with acrylic, dip powder, ombré, hand painted designs, and more!
                    </p>
                </div>
            </article>

        </section>
        
    );
}
