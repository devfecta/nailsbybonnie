import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
	return (
		<section>
			<article className="row flex-lg-row-reverse align-items-center g-5 mb-4"> 
				<div className="col-12 col-sm-8 col-lg-6 mx-auto"> 
					<Image src="/images/Nail-Designs.jpg" className="d-block mx-lg-auto img-fluid" alt="Nail Services by Bonnie" width="700" height="500" loading="eager" />
				</div>
				<div className="col-lg-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">
						Feel More Radiant and Relaxed
					</h1>
					<p className="h3">The Best Nail Care Service in the Madison Area</p>
					<p>
						Nails by Bonnie offers a unique and relaxing environment to clients for their nail care needs. Bonnie is 
						excited to give her clients a variety of pedicure and manicure services. Bonnie&apos;s goal is to make each 
						client feel special and satisfied with all of her nail care services. You will always receive professional 
						service with a friendly smile when you walk in the door. Bonnie offers clients the maximum in style, quality, 
						and customer service.
					</p>
					<p>
						Bonnie invites you to experience the difference in her service. Her aim to maintain a reputation of 
						professional quality nail care service which will compel you to refer her with pride.
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start">

						<a href="https://app.squareup.com/appointments/book/rfrwmdwkv6qhp0/L5JMDAEQSTJ1K/start" className="btn btn-primary btn-lg px-4 me-md-2">Book Online</a>

						<a href="tel:+16084220468" className="btn btn-outline-secondary btn-lg px-4 ">Call (608) 422-0468</a>
						
					</div>
				</div>
			</article>
			<article className="row justiy-content-center align-items-center g-5 mt-5 pb-4 bg-primary text-white">
				<h2 className="text-center">Professional Nail Care Services</h2>
				<div className="col-12 col-md-4">
					<h3>Manicures</h3>
					<p>
						Treat yourself to one of Bonnie&apos;s professional and relaxing manicures that include nail shaping, cuticle care, 
						hand massage and your favorite nail polish.
					</p>
				</div>
				<div className="col-12 col-md-4">
					<h3>Pedicures</h3>
					<p>
						Relax, Refresh, Renew! Bonnie&apos;s pedicures will leave your legs and feet feeling relaxed, refreshed, and renewed with 
						a warm bath, nail shaping, cuticle care, massage with hot stones as an option, paraffin wax, warm towels, and your 
						favorite nail polish.
					</p>
				</div>
				<div className="col-12 col-md-4">
					<h3>Artificial Nails</h3>
					<p>
						From designs to extensions, Bonnie can do it all! Enhance your nails with acrylic, dip powder, ombré, hand 
						painted designs, and more!
					</p>
				</div>
			</article>
		</section>
	);
}
