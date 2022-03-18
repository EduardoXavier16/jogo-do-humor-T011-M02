const botao = document.getElementById('btnClick')
const situacao = document.getElementById('situacao')
const imagem = document.getElementById('imagem')

botao.addEventListener("click", function(){

    if(botao.value == "first"){
        situacao.innerText = "Tranquilo"
        imagem.src = "./IMAGES/tranquilo.png" 
        botao.value = "second"

    }else if(botao.value == "second"){
        situacao.innerText = "Serio"
        imagem.src = "./IMAGES/serio.png" 
        botao.value = "third"

}else{
        situacao.innerText = "Zangado"
        imagem.src = "./IMAGES/zangado.png" 
        botao.value = "first"

    }
})
