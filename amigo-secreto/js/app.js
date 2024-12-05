let amigos = []
let sorteio = document.getElementById('lista-sorteio')

function adicionar(){
    
    let amigo = document.getElementById('nome-amigo'); //recuperei tudo que esta dentro do elemento com esse id
    let lista = document.getElementById('lista-amigos');//recuperei tudo que esta dentro do elemento com esse id
        if (amigos.includes(amigo.value)){
            alert('nome ja adicionado');
            return;
        }
        if (amigo.value==''){
            alert('o campo não pode estar vazio');
        }else{
            amigos.push(amigo.value); // adicionei o valor digitado dentro do id nome amigo, nesse array
            if (lista.textContent==''){
                lista.textContent=amigo.value;
            }else{
                lista.textContent=lista.textContent+', '+amigo.value;
            }
        amigo.value=''; 
        } 
}

function sortear(){
    if(amigos.length<4){
        alert('a quantidade de amigos é menor que 4');
        return;
    }else{
        embaralha(amigos)
    for(let i=0;i<amigos.length;i++){
        if (i==amigos.length-1){ // como todo array vai de 0 até o fim, se pegarmos somente como length ele vai pegar uma posição a mais
            sorteio.innerHTML=sorteio.innerHTML+amigos[i]+'-->'+amigos[0]+'<br>';
        }else{
            sorteio.innerHTML=sorteio.innerHTML+amigos[i]+'-->'+amigos[i+1]+'<br>';
            }
        }
    }
}
function reiniciar(){
    amigos=[];
    document.getElementById('lista-sorteio').innerHTML='';
    document.getElementById('lista-amigos').innerHTML='';
    
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


