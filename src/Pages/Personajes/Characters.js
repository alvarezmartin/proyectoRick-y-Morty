import {useEffect, useState} from 'react';
import { Fragment } from 'react';

import NavBar from "../../Components/Navegacion/NavBar";
import Tarjeta from "../../Components/Tarjeta/Tarjeta";
import Filter from "../../Components/Filters/Filter"

export default function Characters(){
    let [itemMenu]=useState("Characters");
    let [listaCompleta,setListaCompleta]=useState([]);
    let [personajes,setPersonajes]=useState([])
    let [filtros]=useState([
        {   
            nombre:"Alive",
            filtro:'Character Alive'
        },{
            nombre:'Dead',
            filtro:'Character Dead'
        },{
            nombre:'Female',
            filtro:'Female'
        },{
            nombre:'Male',
            filtro:'Male'
        },{
            nombre:'unknown',
            filtro:'Origin Unknown'
        }])
    let [filtrosAplicados,setFiltrosAplicados]=useState([])

    let traerPersonajes=async()=>{
        let dato=await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err=>console.log("Hubo un error"+ err))

        return dato
    }


    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id;
        if(event.target.checked === true){
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox])
        }else{
            let filtrosRestantes=filtrosAplicados.filter((el)=> el !== nombreCheckbox)
            setPersonajes(listaCompleta)
            setFiltrosAplicados(filtrosRestantes)
        }
        
    }

    useEffect(()=>{
        let guardarPersonajes=async()=>{
            let info =await traerPersonajes();
        // console.log(info.results)// //investigamos que nos trae el llamado a la API
            let listaPersonajes=info.results;//guardamos el array de los personajes

            setPersonajes(listaPersonajes)//cambiamos el estado personajes utilizando su setter
            setListaCompleta(listaPersonajes)
        }
        
        guardarPersonajes();
        
    },[])

    useEffect(()=>{
        filtrosAplicados.forEach((filtroNombre)=>{
            let resultado;
            if(filtroNombre === "Alive" || filtroNombre === "Dead"){
                    resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
                }
                if(filtroNombre === "Female" || filtroNombre === "Male"){
                    resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
                }
                if(filtroNombre === "unknown"){
                    resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                }
                setPersonajes(resultado)
        })
    },[filtrosAplicados])

    return(
        <Fragment>
            <NavBar itemMenu={itemMenu}/>
            <section className='row section-filters py-5'>
                <div className='filters-area d-flex  m-2 align-items-center'>
                    <h2>Filters</h2>
                    <a className="btn btn-filters" data-bs-toggle="collapse" href="#collapseFilters" role="button" aria-expanded="true" aria-controls="collapseFilters"><img src="../assets/filter-icon.svg"/></a>
                </div>
                <form id='collapseFilters' className="d-flex flex-wrap justify-content-between collapse">
                    {filtros.map((item)=>{return <Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
                </form>
            </section>
            {/*<button onClick={()=>{guardarPersonajes}>Traer Info</button>*/}
            <section className="row justify-content-center">
                {personajes.length>0?
                    personajes.map((personaje)=>{
                        return <Tarjeta key={personaje.id} data={personaje}/>
                    }):
                    <div className='alert alert-success d-flex text-align-center gap-3' role='alert'>
                        <i className='bi bi-exclamation-triangle-fill'></i>
                        <p className='m-0'>Sorry! There are no characters with all those properties</p>
                    </div>
                }
                
            </section>
        </Fragment>
    )
}