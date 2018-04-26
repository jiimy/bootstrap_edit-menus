$(document).ready(function(){
    editMenu.init();

    //첫번째 탭 에서 올 체크
    $('.select-all a').on('click',function(){
      if($('.content1').css('display')=='block'){
        $('.content1 :checkbox').each(function(){
          this.checked = !this.checked;
        });
      }
      // 두번째 탭에서 올 체크
      if($('.content2').css('display')=='block'){
        $('.content2 :checkbox').each(function(){
          this.checked = !this.checked;
        });
      }
    });


    // 서치바 포커스
    $('.content3 .search-box input').focus(function(){
      $('.select-all button, .select-all a').css('display','none');
    });
    $('.content3 .search-box input').blur(function(){
      $('.select-all button, .select-all a').css('display','block');
    });

      $('.tab nav li').click(function(){
        click('.content3');

      });

    function click(key){
      if(key == '.content3'){
        console.log('cc');
      }
      else{
        console.log('aa');
      }
    }
    
});


var editMenu = {
    init: function () {
        editMenu.tab();
        editMenu.accordion();
        editMenu.accordion2();
    },
    tab: function () {
        var navLi = $('.tab nav li');
        navLi.on('click',function () {
            var self = $(this),
                dataContent = self.data('content');
              $(dataContent).show().siblings().hide();
            //  다른 탭으로 이동시 체크한거 해제
              if($('.content1').css('display')=='none'){
                $('.content1 :checkbox').each(function(){
                this.checked = false;
                });
              }
              if($('.content2').css('display')=='none'){
              $('.content2 :checkbox').each(function(){
                this.checked = false;
                });
              }
        }).eq(0).trigger('click');
    },

    accordion: function () {
        //h3안에 a를 클릭했을 때 div(ans)가 아래로 슬라이드다운이 된다.
        $('.add-menu').on('click', function () {
            var self = $(this),
                closestLi = self.closest('li');
            if (closestLi.hasClass('is-active')){
              $(this).find('span').removeClass('glyphicon-chevron-up');
              $(this).find('span').addClass('glyphicon-chevron-down');
              closestLi.removeClass('is-active');
              self.next('.ans').slideUp();
            } else {
              $(this).find('span').removeClass('glyphicon-chevron-down');
              $(this).find('span').addClass('glyphicon-chevron-up');
                closestLi.addClass('is-active').siblings().removeClass('is-active');
                $('.ans').slideUp();
                self.next('.ans').slideDown();
            }
        }).eq(0).trigger('click');
        //
    },

    accordion2: function () {
        //h3안에 a를 클릭했을 때 div(ans)가 아래로 슬라이드다운이 된다.
        $('.add-menu2').on('click', function () {
            var self = $(this),
                closestLi = self.closest('li');
            if (closestLi.hasClass('is-active')){
              $(this).find('span').removeClass('glyphicon-chevron-up');
              $(this).find('span').addClass('glyphicon-chevron-down');
                closestLi.removeClass('is-active');
                self.next('.ans2').slideUp();
            } else {
              $(this).find('span').removeClass('glyphicon-chevron-down');
              $(this).find('span').addClass('glyphicon-chevron-up');
                closestLi.addClass('is-active').siblings().removeClass('is-active');
                $('.ans2').slideUp();
                self.next('.ans2').slideDown();
            }
        }).eq(0).trigger('click');
        //
    }
};

