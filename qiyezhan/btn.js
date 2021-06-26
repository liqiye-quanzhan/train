$(function(){
    $('.topbtn').click(function(){
        if($('.topnrnr').hasClass('nrnr')){
            $('.topnrnr').removeClass('nrnr'),
            $('.topy').removeClass('nryounr'),
            $('.topy').css('display','none'),  
            $('.topnr a').css('margin-top','0')  
        }else{
            $('.topnrnr').addClass('nrnr'),
            $('.topy').addClass('nryounr'),
            $('.topy').css('display','flex'),
            $('.topnrnr a').css('margin-top','10px')
        }
        
    })
})