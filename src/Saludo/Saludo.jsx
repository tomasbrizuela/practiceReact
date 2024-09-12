const Saludo = ({ message, action }) => {
    return (
        <>
            <h1>{message}</h1>
            <button onClick={action}>Cambiar Saludo</button>
        </>
    )
}


export default Saludo
