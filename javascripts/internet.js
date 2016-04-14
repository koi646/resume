$(function(){

$(window).scroll(function(){
    
 if($('.navigation').css('display')!="none"){
        if(parseInt($('.head').css('height'))-parseInt($('.navigation').css('height'))-parseInt($('.navigation').css("padding"))*2<=$(window).scrollTop()){
        $('.navigation').css({position:'fixed',marginTop:'0px',top:'0px',backgroundColor:'rgba(0,0,0,1)'})
        }//大于跟着走
    else{        $('.navigation').css({position:'relative',marginTop:'-50px',top:'0px',backgroundColor:'rgba(255,255,255,0)',color:'#fff'})
    }
 }
     else{
        if(parseInt($('.head').css('height'))-parseInt($('.navigation-2').css('height'))-parseInt($('.navigation-2').css("padding"))*2<=$(window).scrollTop()){
        $('.navigation-2').css({position:'fixed',marginTop:'0px',top:'0px',backgroundColor:'rgba(255,255,255,0.6)',color:'#000'})
        }//大于跟着走
    else{        $('.navigation-2').css({position:'relative',marginTop:'-41px',top:'0px',backgroundColor:'rgba(255,255,255,0)',color:'#fff'})
     }
 }
})//导航栏跟随



var xd_text=$(".xd-text");
var leader=$('.leader');
    xd_text.click(function(){ 
     if($(this).children('i').hasClass('icon-angle-down')){ 
 $(this).parent('li').children('.leader').stop().animate({height:'46px'},500); 
           $(this).children('i').removeClass('icon-angle-down').addClass('icon-angle-up');
        }
        else{
             $(this).parent('li').children('.leader').stop().animate({height:'0px'},500); 
         $(this).children('i').removeClass('icon-angle-up').addClass('icon-angle-down');


        }
    })//下拉
    
//var $hrefs=$('.navigation-bar').find('a');
//    $hrefs.click(function(){
//        return false;
//    })
//var $hrefs=$('.navigation-bar').find('a');
//    $hrefs.eq(0).click(function(){
//    clearInterval(this.timer);
//        var that=this; this.timer=setInterval(function(){
//            console.log('top:'+$('.container-1').offset().top);
//       var top=$(window).scrollTop();
//        if(top>=$('.container-1').offset().top){
//        $(window).scrollTop($('.container-1').offset().top);
//        clearInterval(that.timer);
//        }
//            else{         $(window).scrollTop(top+50)
//            }
//        },30)
//        return false;
//    })
////锚
})