import NavBar from "../../Components/Navegacion/NavBar";
import { Fragment } from "react";

export default function Contact(){
    return(
        <Fragment>
            <NavBar itemMenu={"Contact"}/>
            <main className='container-fluid'>
            <div class=" main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75 "><h2 class="row colorBLue py-5">Contact</h2><h3 class="row colorBLue subtitle">Leave us your information so we can contact you</h3><form class="row colorBLue g-3 p-4"><div class="col-md-6"><label for="nombre" class="form-label">Name</label><input type="text" class="form-control  p-2" id="nombre" name="name" required=""/></div><div class="col-md-6"><label for="correo" class="form-label">Email</label><input type="email" class="form-control  p-2" id="correo" name="email" required=""/></div><div class="col-12"><label for="mensaje" class="form-label">Messege</label><textarea id="mensaje" class="form-control p-4" name="messege" required=""></textarea></div><div class="col-12"><button type="submit" class="btn botones colorW">Send</button></div></form></div>           
            </main>
        </Fragment>
    )
}