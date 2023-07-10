$( document ).ready(function() {
    let stepIndex = $('.sidebar .step-active').index(); 
    let pageIndex = $('.pages-inner .page-active').index(); 
    let pagesLength = $('.pages-inner .page').length;

    //next button
    $(".next-step").on("click", function(){
        $('.sidebar').find('.step-active').removeClass('step-active');
        stepIndex++;
         $('.sidebar .step').eq(stepIndex).addClass("step-active");

         $('.pages-inner').find('.page-active').removeClass('page-active');
         pageIndex++;
         $('.pages-inner .page').eq(pageIndex).addClass("page-active");

        if(pageIndex >= 1) {
            $('.previous-step').addClass('previous-step-active')
        } 
        if (pageIndex === pagesLength) {
            $('.next-step').addClass('next-step-inactive')
        }
    });

    //prev button
    $(".previous-step").on("click", function(){
        $('.sidebar').find('.step-active').removeClass('step-active');
        stepIndex--;
         $('.sidebar .step').eq(stepIndex).addClass("step-active");

         $('.pages-inner').find('.page-active').removeClass('page-active');
         pageIndex--;
         $('.pages-inner .page').eq(pageIndex).addClass("page-active");

        if(pageIndex < 1) {
            $('.previous-step').removeClass('previous-step-active')
        } 
        if (pageIndex < pagesLength) {
            $('.next-step').removeClass('next-step-inactive')
        }
    });

    //radio buttons checked


});