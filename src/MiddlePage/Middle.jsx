import { Grid2 } from "@mui/material"
import { useEffect, useState } from "react"

const Middle = ({ message, action }) => {
    const [status, setStatus] = useState(true);

    const changeStatus = () => {
        if (status) {
            setStatus(false)
        } else {
            setStatus(true)
        }
    }

    useEffect(() => {
        console.log("Cambio en props")
    }, [status])

    return (
        <>
            <Grid2>
                <button onClick={changeStatus}>ChangeStatus</button>
                <h1>{message}</h1>
                <button style={{ padding: "20px", borderRadius: "20px", border: "0.5px" }} onClick={action}>Change</button>
            </Grid2 >
            <Grid2 container>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ backgroundColor: "red", padding: "10px", color: "white" }}>
                    <h4>Producto 1</h4>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ backgroundColor: "blue", padding: "10px", color: "white" }}>
                    <h4>Producto 2</h4>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ backgroundColor: "green", padding: "10px", color: "white" }}>
                    <h4>Producto 3</h4>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ backgroundColor: "orange", padding: "10px", color: "white" }}>
                    <h4>Producto 4</h4>
                </Grid2>
            </Grid2>
        </>
    )
}

export default Middle