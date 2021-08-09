$(document).ready(function(){
  $('.btn-light').click(function(light){
    light.preventDefault()



    //Remover CSS existente do nosso tema... (jumbotron)
    //Seleciono o jumbotron e excluo o CSS existente
    $('.jumbotron').removeClass('bg-portifolio')
    $('.jumbotron').removeClass('bg-dark')
    $('.mudar').removeClass('bg-portifolio')
    $('.mudar').removeClass('bg-dark')
    $('.mudar2').removeClass('bg-dark2')
    $('.mudar2').removeClass('bg-portifolio')      
    //Aplicar a classe CSS que eu desejo
    $('.jumbotron').addClass('bg-light')
    $('.mudar').addClass('bg-light')
    $('.mudar2').addClass('bg-light2')

  })
  $('.btn-dark').click(function(light){
    light.preventDefault()



    //Remover CSS existente do nosso tema... (jumbotron)
    //Seleciono o jumbotron e excluo o CSS existente
    $('.jumbotron').removeClass('bg-portifolio')
    $('.jumbotron').removeClass('bg-light')
    $('.mudar').removeClass('bg-portifolio')
    $('.mudar').removeClass('bg-light')
    $('.mudar2').removeClass('bg-light2')
    $('.mudar2').removeClass('bg-portifolio')
    //Aplicar a classe CSS que eu desejo
    $('.jumbotron').addClass('bg-dark')
    $('.mudar').addClass('bg-dark')
    $('.mudar2').addClass('bg-dark2')

  })
})