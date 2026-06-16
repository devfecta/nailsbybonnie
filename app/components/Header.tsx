"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="container py-3 mb-4 border-bottom">
            
            
            <nav className="d-flex flex-wrap navbar navbar-expand-lg" aria-label="Fifth navbar example">
                

                    <Link href={"/"} className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                        <Image src={"/images/Nails-by-Bonnie.png"} alt="Nails by Bonnie Nail Salon" className="img-fluid" style={{ maxHeight: "60px", width: "auto" }} width={200} height={60} />
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span className="navbar-toggler-icon"></span> 
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="mainMenu">

                        <ul className="navbar-nav mb-2">
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/nail-care-services"} className="nav-link">Nail Care Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="https://app.squareup.com/appointments/book/rfrwmdwkv6qhp0/L5JMDAEQSTJ1K/start" className="nav-link" target="_blank">
                                    Book Online
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"https://app.squareup.com/gift/MLDEBTF506N74/order"} className="nav-link" target="_blank">
                                    Gift Cards
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"https://g.page/r/Cd_M8-CU1681EAI/review"} className="nav-link" target="_blank">
                                    Write a Review
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/about"} className="nav-link">About Bonnie</Link>
                            </li>
                        </ul>



                        {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                            <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a> </li> 
                            <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li> 
                            <li class="nav-item"> <a class="nav-link disabled" aria-disabled="true">Disabled</a> </li> 
                            <li class="nav-item dropdown"> 
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a> 
                                <ul class="dropdown-menu"> 
                                    <li><a class="dropdown-item" href="#">Action</a></li> 
                                    <li><a class="dropdown-item" href="#">Another action</a></li> 
                                    <li><a class="dropdown-item" href="#">Something else here</a></li> 
                                </ul> 
                            </li>
                        </ul> 
                        <form role="search"> <input class="form-control" type="search" placeholder="Search" aria-label="Search"> </form>  */}
                    
                </div> 
            </nav>
        </header>
    );
}

