import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li className="">
                    <Link href="/">Home </Link>
                    
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                {/* <li className="">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="gallery">Gallery</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>                        
                    </ul>
                </li> */}
                <li className="">
                    <Link href="/services">Services</Link>
                    {/* <ul>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="service-details">Services Details</Link></li>
                        
                    </ul> */}
                </li>
                <li className="">
                    <Link href="/projects">Projects</Link>
                    {/* <ul>
                        <li><Link href="projects">Projects</Link></li>
                        <li><Link href="project-details">Project Details</Link></li>
                        
                    </ul> */}
                </li>
                <li className="">
                    <Link href="/blog">Blog</Link>
                    {/* <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul> */}
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
