const BotaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const ProjetosInativos = document.querySelectorAll('.projetos:not(.ativo)');

botaoMostrarProjetos.addEventListener('click',() => {
    MostrarMaisprojetos();
    esconderBotao();
});

function esconderBotao(){
    botaoMostrarProjetos.classList.add("remover");
}

function MostrarMaisprojetos(){
    projetosInativos.forEach(ProjetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}