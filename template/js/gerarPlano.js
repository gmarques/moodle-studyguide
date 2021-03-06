/**
 * Created by guilherme on 09/12/16.
 */
(function(){
    var gerarBtn = document.getElementById('gerar');
    var periodoInicio = document.getElementById('periodo-inicio');
    var periodoFinal  = document.getElementById('periodo-final');
    var hoje = new Date();

    gerarBtn.addEventListener('click',function(){

        if(periodoInicio.value.length < 10 || periodoFinal.value.length < 10){
            alert('Preencha a(s) data(s) no formato DD/MM/YYYY, por favor verificar');
            return;
        }

        var arrayPeriodoInicio = periodoInicio.value.split('/');
        var dateInicio = new Date(arrayPeriodoInicio[2],arrayPeriodoInicio[1]-1,arrayPeriodoInicio[0])
        var arrayPeriodoFinal = periodoFinal.value.split('/');
        var dateFinal = new Date(arrayPeriodoFinal[2],arrayPeriodoFinal[1]-1,arrayPeriodoFinal[0])

        if(isNaN(dateInicio.getTime()) || isNaN(dateFinal.getTime())){
            alert('Data(s) informada(s) é(são) inválida(s), por favor verificar');
            return;
        }

        if(
            parseInt(hoje.getFullYear()+''+hoje.getMonth()+''+hoje.getDate()) >
            parseInt(dateInicio.getFullYear()+''+dateInicio.getMonth()+''+dateInicio.getDate())
        ){
            alert('Data de início deve ser maior ou igual '+hoje.toLocaleString().substr(0,10)+', por favor verificar');
            return;
        }

        if( dateInicio.getTime() > dateFinal.getTime() ){
            alert('Data de término deve ser maior ou igual '+dateInicio.toLocaleString().substr(0,10)+', por favor verificar');
            return;
        }

        var f = document.createElement("form");
        f.setAttribute('method',"post");
        f.setAttribute('action',"/local/studyguide/index.php?"+window.location.search.substr(1));

        var i = document.createElement("input");
        i.setAttribute('type',"hidden");
        i.setAttribute('name',"dataInicio");
        i.setAttribute('value',periodoInicio.value);

        var e = document.createElement("input");
        e.setAttribute('type',"hidden");
        e.setAttribute('name',"dataFim");
        e.setAttribute('value',periodoFinal.value);

        f.appendChild(i);
        f.appendChild(e);
        f.submit();
    })
})();