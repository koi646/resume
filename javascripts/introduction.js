window.onload=function(){
    console.error("电话: 15529055345")
    console.log("hr姐姐 求带走正在游荡的鲤鱼       "+"₍₍ (̨̡ ‾᷄ᗣ‾᷅ )̧̢ ₎₎")//
    var little=document.getElementsByClassName('little');
    for(var i=0;i<little.length;i++){
        (function(i){
            var lis=little[i].children;
            lis[0].style.display="block";
            little[i].onmouseover=function(){   
                for(var j=0;j<lis.length;j++){
                    lis[j].style.display="block";
                }
                
            }
            little[i].onmouseout=function(){
                for(var j=1;j<lis.length;j++){
                    lis[j].style.display="none";
                }
            }
        })(i)
    }//书签效果

    var head=document.getElementsByClassName('head')[0];
    var head_span=head.getElementsByTagName('span');
    for(i=0;i<head_span.length;i++){          
        (function(i){
            head_span[i].children[0].onmouseover=function(){    
                var that=this;
                clearInterval(this.timer);
                var top=document.body.offsetTop||this.offsetTop;
                this.timer=setInterval(function(){
                    if(top==-10){                    clearInterval(that.timer)}
                    
                    else{
                    top=top-1;
                    that.style.top=top+'px';
                    }                    
                },30)
            };
            
            head_span[i].children[0].onmouseout=function(){    
                var that=this;
                clearInterval(this.timer);
                var top=document.body.offsetTop||this.offsetTop;
                this.timer=setInterval(function(){
                    if(top==0){                    clearInterval(that.timer)}
                    
                    else{
                    top=top+1;
                    that.style.top=top+'px';
                    }                    
                },30)
            }
        })(i)
    }
}
