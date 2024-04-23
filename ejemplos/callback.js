function uno(){
    console.log('uno');
   setTimeout(dos,2000)
}

function dos(){
    console.log('dos');
}

setTimeout(() =>uno(dos),5000);


const nombre = function(){
    console.log('Mi nombre es Juan');
}

nombre();

const persona = () =>console.log('Mi nombre es barbara');
persona();



