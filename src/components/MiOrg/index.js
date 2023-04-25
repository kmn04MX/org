/* import { useState } from "react"; */
import "./MiOrg.css"

const MiOrg = (props) =>{

    console.log(props.cambiarMostrar);
    /* const [mostrar, actualizaMostrar] = useState(true);
    const manejarClick = () =>{

        console.log("Mostrar/Ocultar elemento", mostrar);
        actualizaMostrar(!mostrar);
    };
 */
    return <section className="OrSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/boton__add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section> 
};
export default MiOrg;