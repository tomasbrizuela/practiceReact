import { useState } from "react"
import Middle from "./Middle"

const MiddleContainer = () => {

    const [saludo, setSaludo] = useState("Perro");

    const changeValue = () => {
        if (saludo === "Perro") {
            setSaludo('Gato');
        } else {
            setSaludo("Perro")
        }
    }

    const actions = {
        message: saludo,
        action: changeValue
    }

    return (
        <>
            <Middle {...actions} />
        </>
    )
}

export default MiddleContainer