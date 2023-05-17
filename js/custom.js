// instancia jQuery e evita conflito
//jQuery( function($){
    let titulos = $('h4')//tag 
    let itens =  $('.featured-item')// class
    let destaques = $('#featured')// id

    $(document).ready(function(){
     
        $('.owl-carousel').owlCarousel();    

        $('featured-item a').addclass('bnt bnt-dark strettch-lin')
        $('featured-items:first h4').append('<span class="bagde gb-secondary>novo</span>')


})