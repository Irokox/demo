
let arr = [1,2,3,4,5,6,7,8,9]; 
 const square = arr.map(a => a*a);
 console.log(square);
 const cube = arr.map(a => a*a*a);
 console.log(cube);
 const es6EvenNumbers = arr.filter(number => !
(number%2));
 console.log(es6EvenNumbers);
 const isMultipleof3 = arr.filter(number => !(number%3));
 console.log(isMultipleof3);




 const arrvalue = ["one", "two", "three"];
 const [x, y, z] = arrvalue;
 console.log(x);
 console.log(y);
 console.log(z);
 const nest = {
 start: {
 x: 5,
 y: 7,
 },
 end: {
 x: 8,
 y: 9,
 },
 };
 const {
 start: { x: startX, y: startY },
 } = nest;
 console.log(startX, startY);
 const {
 end: { x: endX, y: endY },
 } = nest;
 console.log(endX, endY);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const [first, second, , , fifth] = arr;
 console.log(first, second, fifth);
 

 



 function* show() {  
    yield 100;  
    }  
      
    var gen = show();   
    console.log(gen.next()); 



    function* show() {  
        yield 100;  
        }  
          
        var gen = show();   
        console.log(gen.next().value); 


    function* myGen()  {  
        yield '1';  
        yield '2';  
        return '0';  
        yield '-1';  
        }  
        let genobj = myGen();  
          
        console.log(genobj.next());    
          
        console.log(genobj.next());  
          
        console.log(genobj.next());  
          
        console.log(genobj.next()); 