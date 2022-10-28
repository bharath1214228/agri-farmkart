jQuery(document).ready(function($){
    
    
    //$(".woocommerce-account-fields #account_username_field").addClass("form-row-first");
    //$(".woocommerce-account-fields #account_password_field").addClass("form-row-last");
    $(".woocommerce-billing-fields .address-field.thwcfd-field-state").removeClass("form-row-wide").addClass("form-row-last");
    
    //$("#order_review").stick_in_parent();
        
    setTimeout(
    function reveal(){
        $('.nm-page-overflow').css('opacity', '1');
    } ,600);

// var CurrentScroll = 0;
//   $(window).scroll(function(event){

//       var NextScroll = $(this).scrollTop();

//       if (NextScroll > CurrentScroll){
//          $('header#nm-header').addClass('header-unpinned');
         
//       }
//       else {
//          $('header#nm-header').removeClass('header-unpinned');
//       }

//       CurrentScroll = NextScroll;  //Updates current scroll position
//   });

         
    $(".nm-page-wrap").css({'margin-bottom':($("footer#nm-footer").height()+'px')});
    
    $(window).resize(function() {
    $(".nm-page-wrap").css({'margin-bottom':($("footer#nm-footer").height()+'px')});
    });
    
    function firstFunction(){
                $.fn.digits = function(){ 
              return this.each(function(){ 
                  $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
              });
    };

    var price_hello = $( ".nm-product-summary-inner-col .woocommerce-Price-amount.amount" ).text().replace(/,/g, "").replace(/₦/g, "");
    var currency_symbol = $('.nm-product-summary-inner-col .woocommerce-Price-amount span.woocommerce-Price-currencySymbol').text();
    // console.log(price_hello);
    var yield_percentage = $('p.yield span').text();
    var yield_return = yield_percentage / 100 * price_hello;
    var qty_cart = $( ".nm-product-summary-inner-col .nm-quantity-wrap .qty" ).val();
    var new_price = price_hello * qty_cart;
    var total_yield = yield_return + new_price;
    $('.product .summary .price').after('<div class="yield-return"><p class="yield-amount"><span class="grey-text"></span>'+ currency_symbol + yield_return.toFixed(2) + ' (' + yield_percentage + '%)</p><h5 class="total-returns">'+ currency_symbol + total_yield +'</h5></div>');
    $('.yield-amount, .total-returns').digits();
    $('.nm-product-summary-inner-col .nm-quantity-wrap .qty').bind('keyup mouseup change', function () {
        var qty_cart = $( ".nm-product-summary-inner-col .nm-quantity-wrap .qty" ).val();
        var new_price = price_hello * qty_cart;
        var yield_return = yield_percentage / 100 * new_price;
        var val = new_price;
        var total_yield = yield_return + new_price;
     
    $('.yield-return').html('<p class="yield-amount"> <span class="grey-text"></span>'+ currency_symbol + yield_return.toFixed(2) + ' (' + yield_percentage + '%)</p><h5 class="total-returns">'+ currency_symbol + total_yield +'</h5>');
    $('.yield-amount, .total-returns').digits(); 
    var new_amount = $('.nm-product-summary-inner-col .woocommerce-Price-amount.amount').text(val).digits().text();

    $('.nm-product-summary-inner-col .woocommerce-Price-amount.amount').html('<span class="woocommerce-Price-currencySymbol">'+ currency_symbol+'</span>' + new_amount);
        
    });
    }
    
    firstFunction();
    
    //$(".home .scroll-to-invest-menu a, .scroll-to-invest a, .home .scroll-to-support a").removeAttr("href");
    
    $(".form-row input").removeAttr("placeholder");
    
    
        /* AJAX SUCCESS */
    $(document).ajaxSuccess(function() {
           if( $("option[value='NG']:selected").length )
           {
             $("#international_instructions").prop('disabled',true);
             $("p#international_instructions_field").css('opacity','0.6');
           }
           
           else {
               $("#international_instructions").prop('disabled',false);
               $("p#international_instructions_field").css('opacity','1')
           }
           
            //$('.return-to-shop a').attr('href', 'https://farmkart.ng/investments/');
    });
   
    
    /* 
    $('.return-to-shop a').attr('href', 'https://farmkart.ng/investments/');
    
    var pathname = window.location.href;
    document.querySelector("a.fa-facebook").href = "https://www.facebook.com/sharer/sharer.php?u=https://farmkart.ng";
    document.querySelector("a.fa-twitter").href = "https://twitter.com/home?status=Check%20out%20%40farmkartng%20-%20where%20you%20can%20invest%20in%20agriculture%20to%20increase%20local%20food%20production,%20support%20farmers%20and%20get%20up%20to%2030%25%20return%20on%20investment.%20www.farmkart.ng";
    document.querySelector("a.fa-linkedin").href = "https://www.linkedin.com/shareArticle?mini=true&url=https://farmkart.ng&title=Farmkart%20&summary=&source=";
    document.querySelector("a.fa-whatsapp").href = "whatsapp://send?text=https://farmkart.ng";
    
    */
    


});