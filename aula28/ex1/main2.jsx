const Header = () => {
    const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
    };

    const myStyle2 = {
        backgroundColor: "red",
        margin: "20px",
        color: "white",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    return (
    <>
    <h1 style={myStyle}>Hello Style!</h1>
    <p>Add a little style!</p>

    <h2 style={myStyle2}>Hello Style 2</h2>
    <p>Add a little more style</p>
    </>
    );
    }
    
    ReactDOM.render(<Header />, document.getElementById('root'));