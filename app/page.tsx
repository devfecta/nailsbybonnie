import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
	return (
		<div className="row flex-lg-row-reverse align-items-center g-5"> 
			<div className="col-12 col-sm-8 col-lg-6"> 
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

					<a href="" className="btn btn-primary btn-lg px-4 me-md-2">Book Online</a>

					<a href="tel:+16084220468" className="btn btn-outline-secondary btn-lg px-4 ">Call (608) 422-0468</a>
					
				</div>
			</div>
		</div>
	);
}
