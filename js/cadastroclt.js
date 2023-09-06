let botaoCad = document.getElementById('botaoCad');
let botaoCons = document.getElementById('botaoCons');
let botaoDel = document.getElementById('botaoDel');
let botaoAtua = document.getElementById('botaoAtua')

botaoCad.addEventListener('click', (e) => { 
    e.preventDefault(); // "preventDefault()" Esta propriedade impede que a página se atualize

    if (document.getElementById('nome').value != "" && //as duas barras retas quer dizer "ou"
    document.getElementById('cep').value != "" &&
    document.getElementById('email').value != "") {
        cadastro()

    }else{
        alert("Preencha os dados")
        document.getElementById('nome').focus()
    }

}
);



