"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 1 функ подход
// function Hello(props) {
//     return <div>
//         <p>Имя: {props.name}</p>
//         <p>Возраст: {props.age}</p>
//     </div>;
// }

// классов ES6
// Класс компонента также извне получает 
// объект свойств, который доступен через this.props.
var Hello1 = function (_React$Component) {
    _inherits(Hello1, _React$Component);

    function Hello1() {
        _classCallCheck(this, Hello1);

        return _possibleConstructorReturn(this, (Hello1.__proto__ || Object.getPrototypeOf(Hello1)).apply(this, arguments));
    }

    _createClass(Hello1, [{
        key: "render",
        value: function render() {
            return;
            React.createElement("div", null);

            React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "\u0418\u043C\u044F : ",
                    this.props.name
                ),
                React.createElement(
                    "p",
                    null,
                    "\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ",
                    this.props.age
                )
            );
        }
    }]);

    return Hello1;
}(React.Component);

// использование стрелочных функций

// const Hello2=(props)=>{

//     const {name, age}=props;

//     return(
//         <div>
//             <p>Имя : {name}</p>
//             <p> Возраст :{age}</p>
//         </div>
//     );

// }


// исоальзуем компонент Hello

ReactDOM.render(React.createElement(Hello1, { name: "Tom", age: "33" }), document.getElementById("app"));
