//点击按钮切换图片
let allButtons = $('#buttons > button')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        // 这里要注意allButton[i]是DOM 对象，是没有.on()方法的；
        // 用DOM 的话，要使用.onclick()方法，所以这里要用$()来封装，变成jQuery对象
        let p = index * -300 //因为index 取值为[0,1,2]乘上图片大小就能到达相应位置
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

//设置自动轮播
let n = 0
let size = allButtons.length
allButtons.eq(n % size).trigger('click')
let timerId = setTimer()
function setTimer() {
    return setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
    }, 1500)
}


//点击按钮图片切换时，激活class
function activeButton($button) {
    $button.addClass('red').siblings('.red').removeClass('red')
}


//当鼠标进入轮播时，停止轮播
$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})

//当鼠标离开轮播时，进行进行轮播
$('.window').on('mouseleave', function () {
    timerId = setTimer()
})