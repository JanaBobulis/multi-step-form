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

    //checkbox buttons checked
    $(".add-on-row input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(this).parent().addClass("checkbox-checked"); 
        }else{
            $(this).parent().removeClass("checkbox-checked");  
        }
    });

    $(".switch-checkbox input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(this).parent().parent().addClass("checkbox-checked"); 
        }else{
            $(this).parent().parent().removeClass("checkbox-checked");  
        }
    });


    //radio buttons checked
    const radioBtns = document.querySelectorAll("input[type='radio']");

        const radioButtons = (els) => {
        els.forEach((el) => {
            el.addEventListener('click', (e) => {
            el.parentNode.classList.toggle('radio-checked');
            // Here you also have to remove 'active' from the other elements
            els.forEach(lm => lm !== el && lm.parentNode.classList.remove('radio-checked'));
            });
        });
        };

    radioButtons(radioBtns);

    
});