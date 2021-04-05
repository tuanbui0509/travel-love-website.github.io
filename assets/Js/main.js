const standard = document.getElementById('AAAstandard')
const ceil = document.getElementById('AAAceil')
const floor = document.getElementById('AAAfloor')

const bP3 = document.getElementById('AAAbP3')
const bV3 = document.getElementById('AAAbV3')
const bP2 = document.getElementById('AAAbP2')
const bV2 = document.getElementById('AAAbV2')
const bP1 = document.getElementById('AAAbP1')
const bV1 = document.getElementById('AAAbV1')

const oP3 = document.getElementById('AAAoP3')
const oV3 = document.getElementById('AAAoV3')
const oP2 = document.getElementById('AAAoP2')
const oV2 = document.getElementById('AAAoV2')
const oP1 = document.getElementById('AAAoP1')
const oV1 = document.getElementById('AAAoV1')


function changeColor(numStock, tc, floor, ceil) {
    if (parseFloat(numStock) === parseFloat(ceil)) {
        return '#ff25ff';
    }
    if (parseFloat(numStock) === parseFloat(tc)) {
        return '#ffd900';
    }
    if (parseFloat(numStock) === parseFloat(floor)) {
        return '#1eeeee';
    }
    if (parseFloat(numStock) < parseFloat(tc)) {
        return '#ff3737';
    }
    if (parseFloat(numStock) > parseFloat(tc)) {
        return '#0f0';
    }

}


var stocks = document.getElementsByClassName('line-stock');


for (let i = 0; i < stocks.length; i++) {
    let line_stock = stocks[i].getElementsByTagName('td');
    let j = 0;
    for (; j < line_stock.length; j++) {
        console.log(j)
        let numStock = line_stock[j].getElementsByTagName('span')[0].innerHTML;
        let tc = line_stock[1].getElementsByTagName('span')[0].innerHTML;
        let ceil = line_stock[2].getElementsByTagName('span')[0].innerHTML;
        let floor = line_stock[3].getElementsByTagName('span')[0].innerHTML;
        if (j === 5 || j === 7 || j === 9 || j === 11 || j === 14 || j === 16 || j === 18) {
            console.log('curr: ', numStock)
            console.log('TC: ', tc)
            console.log('Ceil: ', ceil)
            console.log('Floor: ', floor)
            let strColor = changeColor(numStock, tc, floor, ceil);
            console.log(strColor)
            line_stock[j].getElementsByTagName('span')[0].style.color = strColor;
            line_stock[j + 1].getElementsByTagName('span')[0].style.color = strColor;

        }
    }
}

