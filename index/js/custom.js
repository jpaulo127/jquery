// instancia jQuery e evita conflito
//jQuery( function($){
let titulos = $('h4')//tag 
let itens =  $('.featured-item')// class
let destaques = $('#featured')// id

$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel();    
    
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    
    $('.featured-custom h4').append('<span class="badge bg-secondary">novo</span>');
    //$('.featured-item:first h4').start('<span class="badge bg-secondary">novo</span>');
    //$('.featured-item:first h4').html('<span class="bagde bg-secondary">novo</span>');
    // $('.featured-item:first h4').addClass('active');
    //$('.featured-item:first h4').removeClass('active');
    //$('.featured-item:first h4').toggleClass('active');
    //$('.featured-item:first h4').hide()
    //$('.featured-item:first h4').show()
    //$('.featured-item:first h4').fidein(2000)
    //$('.featured-item:first h4').fideout(2000)
    // $('.featured-item:first h4').css('color','#f00')
    
    $('.featured-item h4').dblclick( function(){
        
        $(this).css({
            'color': '#000000',
            'background': '#0000CD',
            'font-weight': '100'
        })
        
   
   
        /*
        manipulação de eventos
        */
        
        
        
        
    })
    
    $('.featured-item a').on('blur', function(event){
        
        event.preventDefault();
        
        alert('produto esgotado');
        
        
    })
    
    
    /*
    calback
    entendendo ações que começam ao termino de outra
    
    */
    
    $('.featured-item:nth(2)')
    .hide(2000, function(){
        //este é o calback
        console.log( $(this).find('h4').text() + 'esgotado')
    })
    .show(2000, function(){ 
        consolo.log( $(this).find('h4').text() + 'em estoque')
    })


    //Animações
    const duracao = 1000 //equivalente a 1 segundo

    $('.featured-item:nth(0)')
       .hide(duracao)
       .show(duracao)
       .fadeOut(duracao)
       .fadeIn(duracao)
       .toggle(duracao)
       .toggle(duracao)

       $('#form-submit').on('click', function(e){
        
        e.preventDefault()

        if($('#email').val() != ''){

            $('#email').animate({
                opacity: "toggle",
                top: "-50"
            },duracao, function(){
                console.log($(this).val())
            })

        }

       })


   
          /*
           * Ouvinte de eventos .nav-modal-open
           */
       
          $('.nav-modal-open').on('click', function(e){
       
           e.preventDefault();
       
           let elem = $(this).attr('rel')
       
           $('.modal-body').html($('#'+elem).html())
           
           $('.modal-header h5.modal-title').html($(this).text())
       
           let myModal = new bootstrap.Modal($('#modelId'))
       
           myModal.show()
       
       
        })
       
       
        /*
         * TODO: incrementar a validação
         * - checar se o nome é válido (mais de 2 caracteres)
         * - checar se o email é válido com ao menos um "@" e "."
         * - checar se o cpf é válido com regex
         */
        function validate( elem ){
           if( elem.val() == '') {
       
              console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
       
              elem.parent().find('.text-muted').show()
       
              elem.addClass('invalid')
       
              return false
           } else {
              elem.parent().find('.text-muted').hide()
              elem.removeClass('invalid')
           }
        }
       
        $('body').on('submit', '.modal-body .form', function(e){
       
           e.preventDefault()
       
           const inputName = $('#nome')
           const inputEmail = $('#email')
       
           validate(inputName)
           validate(inputEmail)
       
           if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
              console.log('verificar campos obrigatórios')
              return false
           } else {
              $(this).submit()  
           }
       
        })
       
        $('body').on('blur', '#nome', function(){
           validate($(this))
        })
       
        $('body').on('blur', '#email', function(){
           validate($(this))
        })
       
       
        $('body').on('focus', '#date', function(){
           $(this).datepicker()
        })
       
        $('body').on('blur', '#date', function(){
           validate($(this))
           $(this).mask('00/00/0000');
        }) 
       
        $('body').on('blur', '#time', function(){
           validate($(this))
           $(this).mask('00:00');
        })
       
        $('body').on('blur', '#cep', function(){
           validate($(this))
           $(this).mask('00000-000');
        })
       
        $('body').on('blur', '#phone', function(){
           validate($(this))
           $(this).mask('00000-0000');
        })
       
        $('body').on('blur', '#cpf', function(){
           validate($(this))
           $(this).mask('000.000.000-00');
        })

    })           
    
    
