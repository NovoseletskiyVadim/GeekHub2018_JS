

    const user = {
        id : 5,
        age: 33,
        firstName: 'Tom',
        lastName: 'Smit',
        getFullName: function(){ 
            return `${this.firstName} ${this.lastName}`;
        }
    };

    const userClassName = "user-info";
    const styleObj = {
        color:'red', 
        fontFamily:'Verdana'
    };

    ReactDOM.render(
        <div id={user.id} className={userClassName}  style={styleObj}>

            <p>Полное имя: {user.getFullName()}</p>
            <p>Возраст: {user.age}</p>
            <p>Время генерации данных: {new Date().toLocaleTimeString()}</p>

        </div>,
        document.getElementById("app2")
    )