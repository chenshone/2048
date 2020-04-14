/*
 * @Description: 方法
 * @Author: CHENSHONE
 * @Date: 2019-09-25 18:19:31
 * @LastEditors: CHENSHONE
 * @LastEditTime: 2019-09-26 23:05:59
 */

// 初始化以及一次动作完成后随机位置出现2/4
let randomPieces = function (data, emptyGrids, isNew) {
    // let section = [2, 4]
    let len = emptyGrids.length
    let emptyLocal = Math.floor(Math.random() * len)
    let local = emptyGrids[emptyLocal]
    let row = Math.floor(local / 4)
    let col = local % 4
    let detail = 2 // section[Math.floor(Math.random() * 2)]
    data[row][col] = detail
    emptyGrids.splice(emptyLocal, 1)
    if (isNew)
        updateBoard(row, col, detail)
}

// 更新棋盘
let updateBoard = function (row, col, detail) {
    let pieceSet = document.getElementById('p' + row + col)
    pieceSet.innerHTML = detail
    pieceSet.className = 'pieces score' + detail
}