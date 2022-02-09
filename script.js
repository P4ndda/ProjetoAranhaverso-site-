function verificar(){
    var atual = new Date()
    var anoa = atual.getFullYear()
    var anof = document.getElementById('numberAno')
    var res = document.getElementById('resultado')
    var idade = anoa - anof.value

    if(idade > 120 || idade < 0 ){
        window.alert('O ano inserido é invalido, tente novamente!!')
        return 0;
    }else 
            var foto = document.getElementById('fotoAranha')
            var Masc = document.getElementById('radioMasc')
            var Fem = document.getElementById('radioFem')
            var genero = ''
            var txt 
        if(Masc.checked){
            genero = 'homem'
            if(idade >= 0 && idade < 15){
                var txt = (`Com ${idade} anos... você seria o garoto aranha`)
                foto.setAttribute('src', "Imagens/homem-aranha(Criança).png")
            }else if(idade >= 15 && idade < 18){
                foto.setAttribute('src', "Imagens/Homem-aranha(jovem).png")
                var txt = (`Com ${idade} anos... você seria o jovem aranha`)
            }else if(idade >=18 && idade < 59){
                foto.setAttribute('src', "Imagens/Homem-aranha(adulto).png")
                var txt = (`Com ${idade} anos... você seria o homem aranha`)
            }else if(idade >= 59 && idade < 120){
                var txt = (`Com ${idade} anos... você seria o velho homem aranha`)
                foto.setAttribute('src', "Imagens/Homem-aranha(idoso).png")
            }
        } else if (Fem.checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 15){
                var txt = (`Com ${idade} anos... você seria a garota aranha`)
                foto.setAttribute('src', "Imagens/mulher-aranha(criança).png")
            }else if(idade >= 15 && idade < 18){
                var txt = (`Com ${idade} anos... você seria a jovem aranha`)
                foto.setAttribute('src', "Imagens/Mulher-aranha(Jovem).png")
            }else if(idade >=18 && idade < 59){
                var txt = (`Com ${idade} anos... você seria a mulher aranha`)
                foto.setAttribute('src', "Imagens/mulher-aranha(Adulta).png")
            }else if(idade >= 59 && idade < 120){
                var txt = (`Com ${idade} anos... você seria a velha mulher aranha`)
                foto.setAttribute('src', "Imagens/mulher-aranha(idosa).png")
            }
        }else{
            window.alert('Prencha o campo "(sexo)"')
        }
    
    res.style.textAlign = 'center'
    res.innerHTML = (`${txt}`)
    res.appendchild(foto)
}