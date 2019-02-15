import React, {Component} from 'react';



// 1 функ подход
        function Hello(props) {
            return <div>
                <p>Имя: {props.name}</p>
                <p>Возраст: {props.age}</p>
            </div>;
        }

        // классов ES6
        // Класс компонента также извне получает 
        // объект свойств, который доступен через this.props.
        class Hello1 extends React.Component{
            render (){
                return( 
                

                <div>
                    <p>Имя : {this.props.name}</p>
                    <p>Возраст: {this.props.age}</p>
                </div>
                )
            }
        }

        // использование стрелочных функций
        
        const Hello2=(props)=>{

            const {name, age}=props;

            return(
                <div>
                    <p>Имя : {name}</p>
                    <p> Возраст :{age}</p>
                </div>
            );
            
        }


        // исоальзуем компонент Hello

        ReactDOM.render(
            <Hello1 name="Tom" age="33"/>,
            document.getElementById("app")
        );
