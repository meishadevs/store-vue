/***
 * 可以设置多个属性的动画框架
 * @param obj 对象
 * @param json json(属性用json表示)
 * @param time 动画的播放时间
 * @param callback 回调函数
 */
function animate(obj, json, time, callback)
{
    //清除定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {

        //用于判断是否关闭定时器
        //true: 表示关闭定时器
        //false: 表示不关闭定时器
        var flag = true;

        //遍历json
        for(var attr in json)
        {
            //设置当前的值
            var current = 0;

            //如果attr中存在opacity属性
            if(attr == "opacity")
            {
                current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
            }
            else
            {
                current = parseInt(getStyle(obj,attr));
            }

            //计算步长
            //步长 = 目标位置 - 当前位置
            var step = ( json[attr] - current) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            //判断透明度
            if(attr == "opacity")
            {
                //如果当前的浏览器支持opacity
                if("opacity" in obj.style)
                {
                    obj.style.opacity = (current + step) /100;
                }
                //如果当前浏览器不支持opacity
                else
                {
                    // obj.style.filter = alpha(opacity = 30)
                    obj.style.filter = "alpha(opacity = "+(current + step)* 10+")";
                }
            }
            else if(attr == "zIndex")
            {
                obj.style.zIndex = json[attr];
            }
            else
            {
                obj.style[attr] = current  + step + "px" ;
            }

            //只要其中有一个条件不满足,就不应该停止定时器
            if(current != json[attr])
            {
                flag =  false;
            }
        }

        //判断是否停止定时器
        if(flag)
        {
            //停止定时器
            clearInterval(obj.timer);

            //如果存在回调函数
            if(callback)
            {
                //调用回调函数
                callback();
            }
        }
    }, time);
}


/**
 * 获得对象中属性的值
 * @param obj 对象
 * @param attr 属性
 * @returns {*} 属性的值
 */
function getStyle(obj,attr)
{
    //如果是在IE浏览器上
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    //如果是在标准浏览器上
    else
    {
        return window.getComputedStyle(obj,null)[attr];
    }
}