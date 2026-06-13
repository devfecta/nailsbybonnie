"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="container py-3 mb-4 border-bottom">
            
            
            <nav className="d-flex flex-wrap justify-content-between navbar navbar-expand-lg" aria-label="Fifth navbar example">
                

                    <Link href={"/"} className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                        <Image src={"/images/Nails-by-Bonnie.png"} alt="Nails by Bonnie" style={{ maxHeight : "60px", width: "auto" }} width={512} height={250} />
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span className="navbar-toggler-icon"></span> 
                    </button>
                    
                    <div className="collapse navbar-collapse" id="mainMenu">

                        <ul className="nav nav-pills align-items-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Nail Care Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Book Online
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Gift Cards
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Write a Review
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    About Bonnie
                                </a>
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

