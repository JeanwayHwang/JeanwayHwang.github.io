$(function () {
    var Blog = {
        backgroundToggle: function() {
            var i = parseInt(Math.random() * (6 - 1 + 1) + 1);
            $("#sidebar-bg").attr("class", 'background-n'+ i +'');
            setInterval(function() {
                $("#sidebar-bg").attr("class", 'background-n'+ i +'');
                i++;
                if (i == 7) {
                    i = 1;
                }
            }, 20000);
        },
        navBar: function() {
            $('#nav-btn').on('click', function () {
                if ($(this).parent().hasClass('show')) {
                    $(this).parent().removeClass('show');
                } else {
                    $(this).parent().addClass('show');
                }
            });
        },
        screen: function() {
            $('#expand').on('click', function () {
                $(this).css("display", "none");
                $('#smaller').css("display", "inline-block")
                var el = document.documentElement;
                var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
                if (typeof rfs != "undefined" && rfs) rfs.call(el);
                return;
            });
            $('#smaller').on('click', function () {
                $(this).css("display", "none");
                $('#expand').css("display", "inline-block")
                if (document.exitFullscreen) {  
                    document.exitFullscreen();  
                }  
                else if (document.mozCancelFullScreen) {  
                    document.mozCancelFullScreen();  
                }  
                else if (document.webkitCancelFullScreen) {  
                    document.webkitCancelFullScreen();  
                }  
                else if (document.msExitFullscreen) {  
                    document.msExitFullscreen();  
                } 
                if(typeof cfs != "undefined" && cfs) {
                    cfs.call(el);
                }
            });
        },
        gallery: function() {
            var img = $('#gallery > p > img'),
                brNull = $('#gallery > p >br');
                brNull.each(function () {
                    brNull.remove();
                });

                img.each(function () {
                    if ($(this).parent().prop('tagName') !== 'A') {
                        $(this).wrap('<a href="' + this.src + '" title="' + this.alt + '" data-fancybox="gallery" data-caption="' + this.alt + '" class="gallery-item"></a>');
                        $(this).after('<div class="img-mask"></div>');
                    }
                });
        },
        layout: function() {
            var sidebarW = $('.sidebar').width(),
                main = $('.main-wrap'),
                footerM = $('.footer-fixed'),
                mainW = $('.main-wrap').width();
                screenW = $(window).width();
            main.width(screenW - sidebarW);
            main.css('margin-left', sidebarW);
            footerM.css({'left': sidebarW, 'width': mainW});
        },
        reward: function() {
            var reward = $('#reward'),
                close = $('#reward-close'),
                rewardCode = $('#rewardCode'),
                rewardCheck = $('.reward-select-item'),
                mask = $('.mask');
            if (reward) {
                var rewardBtn = $('#rewardBtn');
                rewardBtn.click(function() {
                    reward.addClass('in ready');
                    mask.addClass('in');
                });
                rewardCheck.click(function () {
                    $(this).addClass('checked').siblings(rewardCheck).removeClass('checked');
                    rewardCode.attr('src', $(this).attr('data-id') === 'wechat' ? this.dataset.wechat : this.dataset.alipay);
                });
                close.click(function () {
                    Blog.hideMask(reward);
                });
                mask.click(function () {
                    Blog.hideMask(reward);
                });
            }
        },
        hideMask: function (target) {
            var mask = $('.mask');
            mask.removeClass('in');
            if (target) {
                target.removeClass('in')
            }
        },
        postImg: function () {
            var add  = '?imageView2/0/interlace/1/q/90|watermark/2/text/QCBTdGF1bmNoS2Fp/font/YXJpYWw=/fontsize/400/fill/I0YzNDU0NQ==/dissolve/38/gravity/SouthWest/dx/10/dy/10';
            $.each($('.post-content').find('img'), function() {
                $(this).attr('src', this.src + add);
            });
        }
    };
    Blog.backgroundToggle();
    Blog.navBar();
    Blog.screen();
    Blog.gallery();
    Blog.layout();
    Blog.reward();
    Blog.postImg();
});