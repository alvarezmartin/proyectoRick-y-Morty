export default function InfoTarjetas({status,especie,origen,genero,setShow}){
    return(
        <div className="d-flex p-5 flex-column align-items-center more-info-section">
            <button className="btn btn-active align-self-end m-2 btn-x-md" onClick={()=>setShow(false)}>
                <i className="bi bi-x-lg"></i>{/* icono extraido de boostrap icon */}
            </button>
            <ul className="list-group">
                <li className="fila list-group-item p-3 d-flex flex-column">
                    <span className="fw-bold">
                        Character Status: {status}
                    </span>
                </li>
                <li className="fila list-group-item p-3 d-flex flex-column">
                    Species:
                    <span className="fw-bold">{especie}</span>
                </li>
                <li className="fila list-group-item p-3 d-flex flex-column">
                    Origin:
                    <span className="fw-bold">{origen}</span>
                </li>
                <li className="fila list-group-item p-3 d-flex flex-column">
                    Gender:
                    <span className="fw-bold">{genero}</span>
                </li>
            </ul>
        </div>
    )
}