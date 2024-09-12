import { useState } from "react"
import Saludo from "./Saludo.jsx"

const SaludoContainer = () => {

    const [saludo, setSaludo] = useState("Hola")

    const cambiarSaludo = () => {
        if (saludo === "Hola") {
            setSaludo("Chau");
        } else {
            setSaludo("Hola")
        }
    }
    return (
        <>
            <Saludo message={saludo} action={cambiarSaludo} />

        </>
    )
}

export default SaludoContainer