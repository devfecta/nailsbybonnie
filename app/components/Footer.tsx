"use client";

import Link from "next/link";

const copyright = {
    currentYear : new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(Date.now())
}

export default function Footer() {
    return (
			<footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<Link href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
						<svg className="bi" width="30" height="24" aria-hidden="true">
							<use xlinkHref="#bootstrap"></use>
						</svg>
					</Link>
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