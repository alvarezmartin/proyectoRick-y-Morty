import {Link} from "react-router-dom";

function NavBar({itemMenu}){

    return(
        <header className="bg-blue">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
                <div className="container-fluid justify-content-between align-items-center">
                    <Link to="/" className="text-decoration-none"><h1 className="navbar-brand cursor-p">Rick & Morty</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><img alt="menu" src="../Assets/menu.svg"/></button>
                    <div id="navbarSupportedContent" className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav nav-pills p-4">
                            <li className="nav-item m-2"><Link to="/characters" className= {itemMenu === "Characters"? "btn-active nav-link boton p-2":"nav-link boton p-2"}>Characters</Link></li>
                            <li className="nav-item m-2"><Link to="/contact" className={itemMenu === "Contact"? "btn-active nav-link boton p-2":"nav-link boton p-2"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;