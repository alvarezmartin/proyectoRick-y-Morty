import './Home.css';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <header className="principal-search container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="container-header d-flex flex-column justify-content-center">
                <h1 className="row justify-content-center">Proyect Rick & Morty</h1>
                <h2 className="text-center p-3">Welcome to Rick & Morty Proyect!</h2>
                <p className="text-center p-2">This proyect was made for practising React  and to made a functional website</p>
                <p className="text-center">In this website you can know information of the characters of this animated series. <br/>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h2 className="text-center p-3">Lets go!</h2>
                <nav className="row navbar align-items-center"><ul className="nav nav-pills  justify-content-center"><li className="nav-item"><Link to="/characters" className="nav-link active m-2 p-3 botonesHome sizeBotones">Characters</Link></li><li className="nav-item"><Link to="/contact" className="nav-link active m-2 p-3 botonesHome sizeBotones">Contact</Link></li></ul></nav>
            </div>
        </header>
    )
}

export default Home;