import './Tarjeta.css'
import InfoTarjetas from '../InfoTarjetas/InfoTarjetas'
import {useState} from 'react'


export default function Tarjeta({data}) {
    const [show,setShow]=useState(false)


    return(
        <div className="card m-2 p-2 d-flex flex-row flex-wrap justify-content-between align-items-center">
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <img src={data.image} alt="imagen-personaje..."/>
                <h3 className='size-name text-center name-card'>{data.name}</h3>
                <button className='btn btn-active align-self-end' onClick={()=>setShow(true)}>Know More..</button>
            </div>
            {show ===true? <InfoTarjetas status={data.status} genero={data.gender} especie={data.species} origen={data.origin.name} setShow={setShow}/>:''}
        </div>
    )
}