
import React , {Component} from 'react';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer'


class App1 extends Component{

    render(){
        return(
            <div>
                <Header/>
                <Nav/>
                <Main item1="Item 1" item2="Item 2" item3="Item 3"/>
                <Footer/>
            </div>

        );

    }
}

export default App1;