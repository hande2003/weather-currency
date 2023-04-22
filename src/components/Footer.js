import Link from "next/link";

let Footer = ({previous, next})=>{
    return(
        <div className="navbar mt-5">
            <ul className="nav fixed-bottom justify-content-between bg-warning-subtle">
            <li className="nav-item">
                <Link className="nav-link" href={previous} role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href={next} role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </Link>
            </li>
            </ul>
        </div>
    );
}

export default Footer;