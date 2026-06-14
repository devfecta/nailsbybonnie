"use client";

import Link from "next/link";
import Image from "next/image";

const copyright = {
    currentYear : new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(Date.now())
}

export default function Footer() {
    return (
			<footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-8 d-flex flex-wrap align-items-center gap-5">
					<Image src="/images/Nails-by-Bonnie.png" className="d-block mx-lg-auto img-fluid" alt="Nail Services by Bonnie" width="200" height="150" loading="eager" /><br/>
					<span className="mb-3 mb-md-0 text-body-secondary">
						<p className="mb-2">
							<Link href={""} target="_blank">
								4222 Milwaukee Street, Suite 25<br/><em className="fs-6">(Located in Efi&apos;s Nails)</em><br/>
								Madison, WI 53714
							</Link>
						</p>
						<p className="mb-2">
							Call or Text: <Link href={"tel:+16084220468"}>(608) 422-0468</Link>
						</p>
						<p className="mb-2">
							e-Mail: <Link href={"mailto:nailsbybonniemadison@gmail.com"}>NailsByBonnieMadison@gmail.com</Link>
						</p>
					</span>
					<span className="mb-3 mb-md-0 text-body-secondary">
						© {copyright.currentYear} Nails by Bonnie
					</span>
				</div>
				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					
					<li className="ms-3">
						<a className="fs-1" href="https://www.instagram.com/nailsbybonniemadison" target="_blank" aria-label="Instagram">
							<i className="fa-brands fa-square-instagram"></i>
						</a>
					</li>
					<li className="ms-3">
						<a className="fs-1" href="https://www.facebook.com/nailsbybonniemadison/" target="_blank" aria-label="Facebook">
							<i className="fa-brands fa-facebook"></i>
						</a>
					</li>
				</ul>
			</footer>
		);
}