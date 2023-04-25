import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault();
        /* console.log(e); */
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };

        registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario:color});
    };

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellenar el formulario para crear el colaborador</h2>
            <Campo
                titulo = "nombre" 
                placeholder="Ingresar el nombre" 
                required 
                valor={nombre}
                actualizarValor = {actualizarNombre}    
            />
            <Campo
                titulo = "Puesto" 
                placeholder="Ingresa puesto" 
                required 
                valor={puesto}
                actualizarValor = {actualizarPuesto}    
            />
            <Campo
                titulo = "Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto}
                actualizarValor = {actualizarFoto}    
            />
            <ListaOpciones 
                valor = {equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos = {props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellenar el formulario para crear el equipo</h2>
            <Campo 
                titulo = "Titulo" 
                placeholder="Ingresar el titulo" 
                required 
                valor={titulo}
                actualizarValor = {actualizarTitulo}    
            />
            <Campo
                titulo = "Color" 
                placeholder="Ingresar el color Hex" 
                required 
                valor={color}
                actualizarValor = {actualizarColor}    
                type={"color"}
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>;
};

export default Formulario;