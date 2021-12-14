
// capturar evento de submit do formulário

let form = document.querySelector('#form'); // pega pelo id #



form.addEventListener('submit' , function(e){

    e.preventDefault(); // metodo para evitar carregamento

    //setResultado ('Olá mundo') // argumento da função setResultado

  const inputPeso = e.target.querySelector('#peso') // ou form porque eu sei que o evento esta vindo do form
  const inputAltura = e.target.querySelector('#altura')
  //console.log(inputPeso); <--- vai mostrar o imput

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

   if (!peso){ // se o peso for NaN,

    setResultado ('Peso inválido' , false);

      return; // protego o return com if
      
    }

    if (!altura){ // se o peso for NaN,

      setResultado ('Altura inválida' , false);
  
        return;
        
      }

      const imc = getImc(peso, altura);

      const nivelImc = getNivelImc(imc);

      const msg = `Seu IMC é ${imc}  (${nivelImc})`

      setResultado(msg, true)
    
   
});

  function getNivelImc(imc){

    const nivel  = ['Abaixo do peso' , 'Peso Normal' , 'Sobrepeso' , 'Obesidade grau 1',
                     'Obesidad grau 2' , 'Obesidade grau 3' , ];

    if (imc >= 39.9) return nivel[5]              //Posso tirar as chaves porque o retorno é muito pequeno

    if (imc >= 34.9) return nivel[4]
                                                  
    if (imc >= 29.9) return nivel[3]               // só ira retorna um if e ira ignorar o resto com por causa do if 
    
    if (imc >= 24.9) {
      
      return nivel[2]

    }
    if (imc >= 18.5) {

      return nivel[1];

    }
    if (imc < 18.5){

      return nivel[0];
    }

  }
function getImc(peso ,altura){ // posso criar a função em qualquer lugar do codigo

  const imc = peso / altura ** 2

  return imc.toFixed(2)
}  

function criaP (){
  const p = document.createElement('p') // criar elemento;
  //p.classList.add('paragrado-resultado') // adiconar classe ao elemento p

  return p

}

function setResultado(msg, isValid) {

  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    
    p.classList.add('paragrafo-resultado');
  
  }else {

    p.classList.add('bad');

  }

  p.innerHTML = msg;
  resultado.appendChild(p);
 
  
}





   
    


