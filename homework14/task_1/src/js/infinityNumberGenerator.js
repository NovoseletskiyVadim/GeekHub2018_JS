export default numberIteratorgenerator;


function* numberIteratorgenerator(){


    while(true){

        yield Math.floor(Math.random() * 10)

    }
}