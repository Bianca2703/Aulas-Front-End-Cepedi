function App() {
    return (
    <div>
        <button className="mybutton primary">
        My Primary Button
        </button>
    <br/>
    <br/>
        <button className="mybutton secondary">
        My Secondary Button
        </button>
    <br/>
    <br/>
        <button className="mybutton third">
        My Third Button
        </button>
    </div>
    );
    }
    
    ReactDOM.render(<App />, document.getElementById('root'));