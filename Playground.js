/*function testPromise (location){
    console.log ('Funktion aufgerufen!');
    return new Promise(
        function(resolve,reject){
        setTimeout(function(){
            resolve(30);
            reject('Stadt nicht gefunden!');    
        },2000)
        
    })
}

testPromise("Donoratico").then(
    function(temp){console.log('Die Temperatur in Donoratico beträgt: ',temp+" Grad")},
    function(err){console.log('Fehler', err)});
    */

function addPromise (a,b){
   // var summe
    return new Promise(function(resolve,reject){
        if (typeof a==='number'&& typeof b=== 'number'){
            resolve(a+b)
           
        }else {
            reject('Both must be Numbers !');
        }
    })
};

addPromise(5,3).then(
    function(value){console.log('Sie Summe beträgt: ',value)},
    function(err){console.log('Fehler: ',err)}
);