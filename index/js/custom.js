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
        
    })    
    
    /*
    manipulação de eventos
    */
    
    
    
    
})

$('.featured-item a').on('blur', function(event){
    
    event.preventDefault();
    
    alert('produto esgotado');
})