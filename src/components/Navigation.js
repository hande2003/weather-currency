import Link from "next/link";

let Navigation = ()=>{
    return(
        <div className="navbar fixed-top bg-warning-subtle mb-5">
            <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/weather">Weather</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" href="/currency">Currency</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" href="/">Both</Link></li>
                </ul>
            </li>
            </ul>
        </div>
    );
}

export default Navigation;