$( document ).ready(function() {

        //radio buttons checked add unique class name
        const radioBtns = document.querySelectorAll("input[type='radio']");

        const radioButtons = (els) => {
        els.forEach((el) => {
            el.addEventListener('click', (e) => {
            el.parentNode.classList.toggle('radio-checked');
            
            let parentNode = el.parentNode
            let children = parentNode.children
            console.log(children[0])
            
            // Here you also have to remove 'active' from the other elements
            els.forEach(lm => lm !== el && lm.parentNode.classList.remove('radio-checked'));
            });
            
        });

        };

    radioButtons(radioBtns);

        //checkbox buttons checked add unique class name
        const checkBtns = document.querySelectorAll("input[type='checkbox']");

        const checkBoxes = (els) => {
        els.forEach((el) => {
            el.addEventListener('click', (e) => {
            el.parentNode.classList.toggle('checkbox-checked');        
            });
        });

        };

        checkBoxes(checkBtns);

    let stepIndex = $('.sidebar .step-active').index(); 
    let pageIndex = $('.pages-inner .page-active').index(); 
    let pagesLength = $('.pages-inner .page').length;

    //next button
    $(".next-step").on("click", function(e){
        console.log(pageIndex)
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

        //if page index is matching finishing up page, apply inner html of selected element on button click
        if(pageIndex === 2) {
            let selectedPlanName = $('.radio-checked').find('.plan-name').html();
            $('.selected-plan .name').append(selectedPlanName)
            let selectedPlanPrice = $('.radio-checked').find('.monthly-yearly').html();
            $('.selected-plan .price').append(selectedPlanPrice)
        } 
        if(pageIndex === 3) {
            $('.checkbox-checked').each(function(i, obj) {
                var $this = $(this);
                var selectValuesName = $this.find(".row-title").html();
                var selectValuesPrice = $this.find(".row-price").html();

                $('.selected-plan-details .name ul').append('<li>' + selectValuesName + '</li>')
                $('.selected-plan-details .price ul').append('<li>' + selectValuesPrice + '</li>')
            });
        }

        $('body').removeClass();
        $('body').addClass(`page-${pageIndex}`)

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

        //remove inner html of the selected items on 'go back' button click if another item has been selected
        if(pageIndex != 2) {
            let selectedPlanName = $('.radio-checked').find('.plan-name').html();
            $('.selected-plan .name').empty(selectedPlanName)
            let selectedPlanPrice = $('.radio-checked').find('.monthly-yearly').html();
            $('.selected-plan .price').empty(selectedPlanPrice)
        }

        if(pageIndex !=3)  {
            $('.checkbox-checked').each(function(i, obj) {
                var $this = $(this);
                var selectValuesName = $this.find(".row-title").html();
                var selectValuesPrice = $this.find(".row-price").html();

                $('.selected-plan-details .name ul').empty('<li>' + selectValuesName + '</li>')
                $('.selected-plan-details .price ul').empty('<li>' + selectValuesPrice + '</li>')
            });
        }

        $('body').removeClass();
        $('body').addClass(`page-${pageIndex}`)
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

            //if checkbox has been checked add yearly options
            $('.plan-container-arcade .monthly-yearly').html('$90/yr')
            $('.plan-container-advanced .monthly-yearly').html('$120/yr')
            $('.plan-container-pro .monthly-yearly').html('$150/yr')

            $('[for=onlineService] .row-price').html('+$10/yr')
            $('[for=largerStorage] .row-price').html('+$20/yr')
            $('[for=customizableProfile] .row-price').html('+$20/yr')

            //create new elements for each box
            $('<span/>',{
                text: '2 month free',
                class: 'free-month'
            }).appendTo('.plan-container-arcade .package-inclusions');

            $('<span/>',{
                text: '2 month free',
                class: 'free-month'
            }).appendTo('.plan-container-advanced .package-inclusions');

            $('<span/>',{
                text: '2 month free',
                class: 'free-month'
            }).appendTo('.plan-container-pro .package-inclusions');
        }else{
            $(this).parent().parent().removeClass("checkbox-checked"); 
            $('.plan-container-arcade .monthly-yearly').html('$9/mo')
            $('.plan-container-advanced .monthly-yearly').html('$9/mo')
            $('.plan-container-pro .monthly-yearly').html('$9/mo') 

            $('[for=onlineService] .row-price').html('+$1/mo')
            $('[for=largerStorage] .row-price').html('+$2/mo')
            $('[for=customizableProfile] .row-price').html('+$2/mo')

            //remove last element with 'free month' text if monthly plan is selected
            $('.free-month').remove()
        }
    });




    // let selectedPlan = $('.plan-container.radio-checked label .package-inclusions span')


});