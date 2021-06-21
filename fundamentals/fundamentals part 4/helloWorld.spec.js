










const helloWorld = require('./helloWorld');


//describe = body of the test : running the code and testing to see if the output is correct 
//test = describes what should be happening in plain english
//expect 
describe('Hello World', function(){
    test('says hello world', function(){
        expect(helloWorld()).toEqual('Hello, World!');
    })
});