function Car(props) {
    return (
        <>
            <h2>My {props.carinfo.nome} {props.carinfo.model}</h2>
            <p>It is {props.carinfo.color} and it is from {props.carinfo.year}</p>
        </>
    );
    
} 

export default Car;