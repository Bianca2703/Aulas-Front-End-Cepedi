const MyHeader = styled.h1`
padding: 10px 20px;
background-color: #007bff;
color: white;
`;

const MyHeader2 = styled.h2 `
    padding: 10px 20px;
    background-color: lightsalmon;
    color: white;
`

function App() {
return (
<>
<MyHeader>Welcome!</MyHeader>
<MyHeader2>Teste 2</MyHeader2>
</>
);
}

ReactDOM.render(<App />, document.getElementById('root'));