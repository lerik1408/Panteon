$('.menu-btn').click(function(event){
    event.preventDefault;
    $(this).toggleClass('menu-btn_active');
    if($(this).hasClass('menu-btn_active')){     
        $(".menu").fadeIn()
    }else{      
        $(".menu").fadeOut()
    }
})
console.log($('.header-button'))
$('.header-button').click(function(event){
    this.scrollIntoView()
})
$('.idea1-background-flex-button').click(function(event){
    event.target=$(".menu-nav").children().get(3).click()
})

$(".life-button").click(function(event){
    console.log($(".life-modal-content"))
    $(".life-modal").fadeIn()
})
$('#exit').click(function(event){
    $(".life-modal").fadeOut()
})

var dotsWrap=$(".life-dotsWrap");
var slides=$('.life-slider-item');
showSlides(1);
function showSlides(index){
    for(let i=0;i<slides.length;i++){
        slides.eq(i).css("display", "none")//Скрытие всех активов Slides
    }
    for (let i=0;i<dotsWrap.children(".life-dotsWrap-dot").length; i++){
        dotsWrap.children(".life-dotsWrap-dot").eq(i).removeClass('life-dots_active');//Скрытие всех активов Dot - (НЕ ПРАВИЛЬНО НО РАБОТАЕТ)
        dotsWrap.children(".life-dotsWrap-img").eq(i).children().removeClass('dotsWrap-background_active');//Скрытие всех активов для ::after     
    }
    dotsWrap.children(".life-dotsWrap-dot").eq(index-1).addClass('life-dots_active');
    dotsWrap.children(".life-dotsWrap-img").eq(index-1).children().addClass('dotsWrap-background_active')
    slides.eq(index-1).css("display","block");
}

dotsWrap.bind("click", function(event){
   event.preventDefault();
    for (var i=0;i<dotsWrap.children(".life-dotsWrap-dot").length;i++){
        if($(event.target).parent().hasClass("life-dotsWrap-dot") && (dotsWrap.children(".life-dotsWrap-dot").get(i)==event.target.parentNode)){
            showSlides(i+1)    
        }
        if($(event.target).parent().hasClass("life-dotsWrap-img") && (dotsWrap.children(".life-dotsWrap-img").get(i)==event.target.parentNode)){
            showSlides(i+1)
        }
    }
    
})