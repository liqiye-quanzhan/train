$(function(){
    $('.topbtn').click(function(){
        if($('.topnrnr').hasClass('nrnr')){
            $('.topnrnr').removeClass('nrnr'),
            $('.topy').removeClass('nryounr'),
            $('.topy').css('display','none'),  
            $('.topnr a').css('margin-top','0')  
        }else{
            $('.topnrnr').addClass('nrnr'),
            $('.topy').addClass('nryounr'),
            $('.topy').css('display','flex'),
            $('.topnrnr a').css('margin-top','10px')
        }
        
    })
})

const imgs = document.querySelectorAll('.lazy')

            window.addEventListener('scroll',(e)=>{//scroll是鼠标滚动事件
                imgs.forEach(image=>{//forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
                    const imgTop = image.getBoundingClientRect().top //getBoundingClientRect()用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
                    if(imgTop<=window.innerHeight){//innerheight 返回窗口的文档显示区的高度。
                        if(window.innerWidth<900){
                            const zjsrc = "./aisi.webp"
                            image.setAttribute('src',zjsrc)
                        }else{
                            const src = image.getAttribute('data-src')//getAttribute() 方法通过名称获取属性的值。
                            image.setAttribute('src',src)
                        }
                        
                    }
                })
            })
            