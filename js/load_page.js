//Leitura completa do nosso documento HTML
$(document).ready(function(){

   //Monitorar todos os cliques em cida do elemento <a> do nosso documento HTML
   $('a').click(function(e){
     e.preventDefault()

     //Criar uma vairável local que receba o atributo href do link

     let url = $(this).attr('href')

     $('.modal-title').empty()
     $('.modal-body').empty()

     //Verificar qual conteúfo carregar

     switch(url){
    //Se for a pag sobre mim
     case 'about':
      $('.modal-title').append('Sobre mim')
      $('.modal-body').append(`<p><strong>Nome</strong>: Vinícius Carvalho</p>
      <p><strong>Desenvolvidor de Sistemas</strong></p>
      <p><strong>Idade</strong>: 16 anos</p>
      <p><strong>Curso</strong>: Desenvolvimento de Sistemas</p>
      <p><strong>Módulo</strong>: 2° ano</p>`)
      $('#modal-info').modal('show')
      break
     //Se for a pag trabalhos
     case 'work': 
      $('.modal-title').append('Trabalhos')
      $('.modal-body').append('Lorem')
      $('#modal-info').modal('show')
      break
     //Se for a pag parceiros
     case 'client': 
      $('.modal-title').append('Clientes')
      $('.modal-body').append(`<strong>Cliente 1:</strong>`)
      $('#modal-info').modal('show')
      break
     //Se for a pag contato
     case 'contact': 
      $('.modal-title').append('Contato')
      $('.modal-body').append(`<p><strong>Email</strong>: carvalhovinicius71@gmail.com</p>
      <p><strong>Linkedin</strong>: ----------</p>
      <p><strong>Celular</strong>: 14 99616-4842</p>`)
      $('#modal-info').modal('show')
      break
     default:alert('link não encontrado')
     }
   })

})