
var target_date = new Date("june 06, 2020").getTime();
var dias, horas, minutos, segundos;
var regressiva = document.getElementById("regressiva");
setInterval(function () {
var current_date = new Date().getTime();
var segundos_f = (target_date - current_date) / 1000;
dias = parseInt(segundos_f / 86400);
segundos_f = segundos_f % 86400;
horas = parseInt(segundos_f / 3600);
segundos_f = segundos_f % 3600;
minutos = parseInt(segundos_f / 60);
segundos = parseInt(segundos_f % 60);
document.getElementById('dia').innerHTML = dias;
document.getElementById('hora').innerHTML = horas;
document.getElementById('minuto').innerHTML = minutos;
document.getElementById('segundo').innerHTML = segundos;
}, 1000);

$(document).ready(function() {
    $('#submitButton').on('click',function(e){
            if($("#email").val() == '' || $("#subject").val() == '' || $("#name").val() == '' || $("#comment").val() == ''){
                $('.warning').html('Preencha todos os campos');
            }else{
                $('.warning').hide();
                var person = {
                    email: $("#email").val(),
                    subject:$("#subject").val(),
                    name:$("#name").val(),
                    comment:$("#comment").val(),
                    tokenField:$("#tokenField").val()
                } 
                $.ajax({
                    url: "https://sendmail.muchomas.xyz/",
                    crossDomain: true,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(person),
                    headers:{
                        'Access-Control-Allow-Origin': 'http://localhost:3000/',
                        "Content-Type": "application/json",
                        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNdWNoTW9yZSIsImlhdCI6MTU4MzQzMTEyOCwiZXhwIjoxNjE0OTY3MTI4LCJhdWQiOiJ3d3cubXVjaG1vcmUuY29tIiwic3ViIjoibXVjaG1vcmUtdGVzdC1kZXYiLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.x5i2ldiTazjY1ANxdoURBiQ-TXqam_K1KJfdo3puYEQ"
                        },
                    async: false,
                    success: function(){ 
                        $('.warning').show().html('Email enviado com sucesso');
                    },
                    error: function(){
                        $('.warning').show().html('Houve um erro ao enviar o email');
                    }
                })         
            }   
            //e.preventDefault();
    });
});
