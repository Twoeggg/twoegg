/*
* @Author: Marte
* @Date:   2017-10-26 08:29:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-27 10:30:48
*/
define(function(){
    function menue(){
    	//滑入二级菜单时的效果
        $(".navcon .shop .menue ul li").mouseover(function(){
            $that = $(this).index();
            //li的颜色变色
            $(".navcon .shop .menue ul li").css({"background":"#f7f7f7"});
            //二级菜单下的div变色
            $(".navcon .shop .menue ul .list_05 .list_bot").css({"background":"#f7f7f7"});
            if($that < 4){
            	//当前li下标的颜色变回
                $(".navcon .shop .menue ul li").eq($that).css({"background":"#fff","box-shadow":"0 4px 2px #000"});
                //三级菜单出现
                $(".navcon .three").eq($that).css({"display":"block"});
                //移入三级菜单
                $(".navcon .three").eq($that).mouseover(function(){
                	//三级菜单不消失
                    $(this).css({"display":"block"});
                    //当前li的颜色变色
                    $(".navcon .shop .menue ul li").css({"background":"#f7f7f7"});
                    $(".navcon .shop .menue ul li").eq($that).css({"background":"#fff"});
                    $(".navcon .shop .menue ul .list_05 .list_bot").css({"background":"#f7f7f7"});
                })
                //移出三级菜单
                $(".navcon .three").eq($that).mouseout(function(){
                	//三级菜单消失
                    $(this).css({"display":"none"});
                    //二级菜单颜色变白
                    $(".navcon .shop .menue ul li").css({"background":"#fff"});
                    //二级菜单下的div变白
                    $(".navcon .shop .menue ul .list_05 .list_bot").css({"background":"#fff"});
                    //二级菜单消失
                    /*$(".navcon .shop .menu").css({"display":"none"});
                    $(".navcon .shop .menu ul").css({"display":"none"});*/
                })
            }
        })
        //移出二级菜单
        $(".navcon .shop .menue ul li").mouseout(function(){
            $that = $(this).index();
            //二级菜单颜色变为白色
            $(".navcon .shop .menue ul li").css({"background":"#fff"});
            //二级菜单下的div变白
			$(".navcon .shop .menue ul .list_05 .list_bot").css({"background":"#fff"});
            //三级菜单消失
            $(".navcon .three").css({"display":"none"});
        })
        //移入二级菜单下的div
        $(".navcon .shop .menue ul .list_05 div").mouseover(function(){
            $that = $(this).index();
            //二级菜单变色
            $(".navcon .shop .menue ul").css({"background":"#f7f7f7"});
            //二级菜单下的当前div变白色
            //console.log($(".navcon .shop .menue ul .list_05 .list_bot").eq($that));
//          console.log($(".navcon .shop .menue ul .list_05 .list_bot").eq($that));
//          console.log($that);
//          $(".navcon .shop .menue ul .list_05 .list_bot").eq($that - 2).css({"background":"red"});
			//$(this).css({"background":"red"})
            //当前div对应的三级菜单出现
            $(".navcon .three").eq($that + 2).css({"display":"block"});
            //移入三级菜单
            $(".navcon .three").eq($that + 2).mouseover(function(){
            	//三级菜单不消失
                $(this).css({"display":"block"});
                //二级菜单变色
                $(".navcon .shop .menue ul li").css({"background":"#f7f7f7"});
                $(".navcon .shop .menue ul .list_05 div").css({"background":"#f7f7f7"});
                //当前div颜色变为白色
                //$(".navcon .shop .menue ul .list_05 div").css({"background":"#fff"});
            })
            //移出三级菜单
            $(".navcon .three").eq($that + 2).mouseout(function(){
            	//三级菜单消失
                $(this).css({"display":"none"});
                //$(".navcon .shop .menue ul .list_05 div").css({"background":"#fff"});
                $(".navcon .shop .menue ul li").css({"background":"#fff"});
                $(".navcon .shop .menue ul .list_05 div").css({"background":"#fff"});
                
            })
//          $(".three_05").hover(function(){
//	        	$(".navcon .list_05 div").eq(0).css({"background":"#fff"});
//	        })
            $(".three_05").mouseover(function(){
            	$(".navcon .list_05 div").eq(0).css({"background":"#fff"});
            })
            $(".three_06").mouseover(function(){
            	$(".navcon .list_05 div").eq(1).css({"background":"#fff"});
            })
            $(".three_07").mouseover(function(){
            	$(".navcon .list_05 div").eq(2).css({"background":"#fff"});
            })
            $(".three_08").mouseover(function(){
            	$(".navcon .list_05 div").eq(3).css({"background":"#fff"});
            })
            $(".three_09").mouseover(function(){
            	$(".navcon .list_05 div").eq(4).css({"background":"#fff"});
            })
        })
        
        /*$(".navcon .shop .menue ul .list_05 .list_bot").mouseout(function(){
            $that = $(this).index();
            $(this).css({"background":"#f7f7f7"});
            $(".navcon .shop .menue ul li").css({"background":"#fff"});
            $(".navcon .shop .menue ul .list_05").css({"background":"#fff"});
            $(".navcon .three").eq($that + 2).css({"display":"none"})
        })
        $(".navcon .shop .menue ul .list_05").mouseout(function(){
            $(this).css({"background":"#fff"});
        });*/
       //手风琴
       /*$(".accordion div").hover(function(){
       	$that = $(this).index();
       	$(this).css({"width":"148"});
       	$(this).eq($that).css({"width":""});
       })*/
      //tab
      $(".tab .tab_left .tab_01 li").hover(function(){
      	$that = $(this).index();
      	$(".tab .tab_left .tab_01 li").css({"background":"#f6f6f6","color":"#666","cursor": "pointer"});
      	$(".tab .tab_left .tab_01 li").eq($that).css({"background":"#fff","color":"#f60","border-bottom":"0"});
      	$(".tab .tab_left ul").css("display","none");
      	$(".tab .tab_left ul").eq(0).css("display","block");
      	$(".tab .tab_left ul").eq($that + 1).css("display","block");
      })
      //热销榜
      $(".repetition .repe_right .repe_top h3 a").hover(function(){
      	$that = $(this).index();
      	//console.log( $(this))
      	
      	$(".repetition .repe_right .repe_top h3 a").css({"background":"#e9e9e9","color":"999","border":"0"});
      	
      	$(".repetition .repe_right .repe_top h3 a").eq($that).css({"background":"#fff","color":"#f60","border":"1px solid #e9e9e9","border-bottom":"1px solid #fff","cursor":"pointer","text-decoration":"none"});
      	
      	$(".repetition .repe_right .repe_top ul").css("display","none");
      	$(".repetition .repe_right .repe_top ul").eq($that).css("display","block");
      })
    }
    function banner02(){
        $(".banner_02 strong").eq(0).click(function(){
            $(".banner_02 .list_top").css({"display":"none;"})
            $(".banner_02 .list_bottom").css({"display":"block"})
        })
        $(".banner_02 strong").eq(1).click(function(){
            $(".banner_02 .list_top").css({"display":"block;"})
            $(".banner_02 .list_bottom").css({"display":"none"})
        })
        var onff = true;
        setInterval(function(){
            if(onff){
                $(".banner_02 .list_top").css({"display":"none"})
                $(".banner_02 .list_bottom").css({"display":"block"})
            }
            if(!onff){
                $(".banner_02 .list_top").css({"display":"block"})
                $(".banner_02 .list_bottom").css({"display":"none"})
            }
            onff = !onff;
        },2000)
    }
    function rebatch(){
        $(".banner h2 a").mouseover(function(){
            $(this).css({"cursor":"pointer","text-decoration":"underline"});
        })
        $(".banner h2 a").mouseout(function(){
            $(this).css({"cursor":"default","text-decoration":"none"});
        })
        var onff = true;
        $(".banner h2 a").click(function(){
            if(onff){
                $(".banner .hot ul").eq(0).css({"display":"none"});
                $(".banner .hot ul").eq(1).css({"display":"block"});
            }
            if(!onff){
                $(".banner .hot ul").eq(1).css({"display":"none"});
                $(".banner .hot ul").eq(0).css({"display":"block"});
            }
            onff = !onff;
        })
    }
    function collect(){
        $(".navcon .nav_right a").eq(0).mouseover(function(){
            $(".navcon .nav_right .nav_pop1").css({"display":"block"});
        })
        $(".navcon .nav_right a").eq(0).mouseout(function(){
            $(".navcon .nav_right .nav_pop1").css({"display":"none"});
        })
        $(".navcon .nav_right a").eq(1).mouseover(function(){
            $(".navcon .nav_right .nav_pop2").css({"display":"block"});
        })
        $(".navcon .nav_right a").eq(1).mouseout(function(){
            $(".navcon .nav_right .nav_pop2").css({"display":"none"});
        })
        $(".navcon .nav_right .nav_pop1").mouseover(function(){
            $(this).css({"display":"block"});
            $(".navcon .nav_right a").eq(0).css({"background":"#fff","color":"#666"});
            $(".navcon .nav_right a:nth-of-type(1) i").css({"border-color":"transparent transparent #666 transparent","top":"12px"});
        })
        $(".navcon .nav_right .nav_pop1").mouseout(function(){
            $(this).css({"display":"none"});
            $(".navcon .nav_right a").eq(0).css({"background":"#f60"})
            $(".navcon .nav_right a").eq(0).mouseover(function(){
                $(".navcon .nav_right a").eq(0).css({"background":"#fff","color":"#666"});
                $(".navcon .nav_right a:nth-of-type(1) i").css({"border-color":"transparent transparent #666 transparent","top":"12px"});
             })
            $(".navcon .nav_right a").eq(0).mouseout(function(){
                $(".navcon .nav_right a").eq(0).css({"background":"#f60","color":"#fff"});
                $(".navcon .nav_right a:nth-of-type(1) i").css({"border-color":"#fff transparent transparent transparent","top":"17px"});
            })
            $(".navcon .nav_right a:nth-of-type(1) i").css({"border-color":"#fff transparent transparent transparent","top":"17px"});
            $(".navcon .nav_right a").eq(0).css({"background":"#f60","color":"#fff"});
        })
        $(".navcon .nav_right .nav_pop2").mouseover(function(){
            $(this).css({"display":"block"});
            $(".navcon .nav_right a").eq(1).css({"background":"#fff","color":"#666"});
            $(".navcon .nav_right a:nth-of-type(2) i").css({"border-color":"transparent transparent #666 transparent","top":"12px"});
        })
        $(".navcon .nav_right .nav_pop2 i").mouseover(function(){
            $(this).css({"background":"#ff971c","cursor":"pointer"});
        })
        $(".navcon .nav_right .nav_pop2 i").mouseout(function(){
            $(this).css({"background":"#f60","cursor":"default"});
        })
        $(".navcon .nav_right .nav_pop2").mouseout(function(){
            $(this).css({"display":"none"});
            $(".navcon .nav_right a").eq(1).css({"background":"#f60"})
            $(".navcon .nav_right a").eq(1).mouseover(function(){
                $(".navcon .nav_right a").eq(1).css({"background":"#fff","color":"#666"});
                $(".navcon .nav_right a:nth-of-type(2) i").css({"border-color":"transparent transparent #666 transparent","top":"12px"});
             })
            $(".navcon .nav_right a").eq(1).mouseout(function(){
                $(".navcon .nav_right a").eq(1).css({"background":"#f60","color":"#fff"});
                $(".navcon .nav_right a:nth-of-type(2) i").css({"border-color":"#fff transparent transparent transparent","top":"17px"});
            })
            $(".navcon .nav_right a:nth-of-type(2) i").css({"border-color":"#fff transparent transparent transparent","top":"17px"});
            $(".navcon .nav_right a").eq(1).css({"background":"#f60","color":"#fff"});
        })
    }
    function fixed(){
        //var oTop = document.getElementById('top');
        window.onscroll = function(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop >= 300){
                 $("#top").css("display","block")
            }else{
                $("#top").css("display","none")
            }
        }
       $("#top").click(function(){
       		$(document.documentElement).animate({
       			scrollTop : 0
       	})
       })
    }
    return {
        menue : menue,
        banner02 : banner02,
        rebatch : rebatch,
        collect : collect,
        fixed : fixed
    }
})