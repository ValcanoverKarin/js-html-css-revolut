$(document).ready(function() {
    //quando entro in un elemento del menu se c'è una dropdown si espande
    $('.menu li').mouseenter(function() {
       // alert('test');
       $(this).children('.dropdown').addClass('active');
    });

    //quando esco da un elemento del menu la una dropdown si chiude
    $('.menu li').mouseleave(function() {
        $(this).children('.dropdown').removeClass('active');
    });
});