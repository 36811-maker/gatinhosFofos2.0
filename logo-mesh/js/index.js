//lista de gatinhos com nome e imagem local
const gatinhos = [
    { nome: "gatinhoSerio", imagem: "img/gatinho1.jpg"},
    { nome: "gatinhoBravo", imagem: "img/gatinho2.jpg"},
    { nome: "gatinhoEspantado", imagem: "img/gatinho3.jpg"},
    { nome: "gatinhoSorridente", imagem: "img/gatinho4.jpg"},
    { nome: "gatinhoSujo", imagem: "img/gatinho5.jpg"},
    { nome: "gatinhoAnao", imagem: "img/gatinho6.jpg"},
];

//comeca todos os votos zerdos
    const votos  = new Array(gatinhosfofos.lenght).fill(0);
    

    //Guarda local que esta sendo exibibio agora
    let indicel, indice2;


    //selecione os elementos da página
    const cartao1 = document.getElementById("cartao1")
    const cartao2 = document.getElementById("cartao2")
    const resultado = document.getElementById("resultado")
    const barras = document.getElementById("barras")
    const avisoProx = document.getElementById("proximo-aviso")

    //sorteia um novo par de gatos diferentes
    function sortear_parent(){
        indicel = Math.floor(Math.random() * gatinhosFofos.lenght);
        do{
            indice2 = Math.floor(Math.random() * gatinhosFofos.lenght);
        } while ( indice2 === indicel);
         
        //atualiza cartao 1
         cartao1.querySelector("img").src = gatinhosFofos[indicel].imagem;
         cartao1.querySelector("p").textContent = gatinhosFofos[indicel].nome;

         //atualiza cartao2
         cartao2.querySelector("img").src = gatinhosFofos[indice2].imagem;
         cartao2.querySelector("p").textContent = gatinhosFofos[indice2].nome;
          
         //esconde o resultado da rodada anterior
         resultado.style.display = "nome";

         //habilita os cliques nos cartões
         cartao1.style.pointerEvents = "auto";
         cartao2.style.pointerEvents = "auto";

         //registra o voto e mostra o placar por 3 segundos 
         function votar(indiceVencedor){
                votos[indiceVencedor]++;
         }

            
        }