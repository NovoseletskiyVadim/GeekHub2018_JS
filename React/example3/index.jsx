

class Hello extends React.Component {
    render() {
        return <h1>Hello, React</h1>;
    }
}
ReactDOM.render(
    <Hello></Hello>,
    document.getElementById("app")
)

/*

    скомпилируем index.jsx в файл app.js командой в терминале 

    .\node_modules\.bin\babel index.jsx --out-file app.js
    

*/ 