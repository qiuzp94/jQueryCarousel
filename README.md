# 用jQuery做一个轮播

## 制作思路 
将图片一字排开，通过js移动位置，把对应的图片呈现在视图中。

## 知识点总结
### jQuery知识点

* event.currentTarget 属性是在事件冒泡阶段内的当前 DOM 元素，通常等于 this。这里是监听的那个按钮
    * 例子`let index = $(x.currentTarget).index()`
* trigger() 方法触发被选元素上指定的事件以及事件的默认行为（比如表单提交）。这里是用户点击的那个按钮
    * 例子`allButtons.eq(n % size).trigger('click')`

* eq() 方法返回带有被选元素的指定索引号的元素。索引号从 0 开头，所以第一个元素的索引号是 0（不是 1）。
    * 例子`activeButton(allButtons.eq(n))`

* siblings() 方法返回被选元素的所有同级元素。
    * 例子`$button.addClass('red').siblings('.red').removeClass('red')`

### DOM知识点
* setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
* clearInterval() 方法可取消由 setInterval() 函数设定的定时执行操作。

### CSS知识
* transform属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。
    * transform:  vt. 改变；改观；变换；
* translate 允许你单独指定 transforms 中的平移，并独立于 transform 属性。这可以更好地反映到典型的用户界面用法，并节省了在指定transform 值时必须记住的转换函数的确切顺序。
    * translat  - vt. 翻译；转化；解释；转变为；调动