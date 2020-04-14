/*
 * @Description: 
 * @Author: CHENSHONE
 * @Date: 2019-09-25 16:54:28
 * @LastEditors: CHENSHONE
 * @LastEditTime: 2019-09-26 12:12:47
 */
// 手指滑动操作

let touchEvent = (function () {
    let start = []
    let end = []
    let touchFun = {}
    touchFun.touchstart = function (e) {
        e = e || event
        let touchC = e.targetTouches[0]
        start = [touchC.pageX, touchC.pageY]
        end = [touchC.pageX, touchC.pageY]
    }
    touchFun.touchmove = function (e) {
        e = e || event
        e.preventDefault()
        let touchC = e.targetTouches[0]
        end = [touchC.pageX, touchC.pageY]
    }
    touchFun.touchend = function () {
        let moveX = end[0] - start[0]
        let moveY = end[1] - start[1]
        if (Math.abs(moveX) < 50 && Math.abs(moveY) < 50) return false
        else {
            if (Math.abs(moveX) >= Math.abs(moveY)) {
                return moveX > 0 ? 'right' : 'left'
            } else {
                return moveY > 0 ? 'down' : 'up'
            }
        }
    }
    return touchFun
})()