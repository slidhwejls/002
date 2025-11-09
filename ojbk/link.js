 
var link = {
    kyH5   : 'http://ky5066.com',
    mkH5  : 'http://833mk.vip'
}

function clickFun(key) {
    let u = navigator.userAgent;
    let Agents = ["Android", "iPhone", "webOS", "BlackBerry", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let i = 0; i < Agents.length; i++) {
        if (u.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }
    }

    if (key === 'ky'){
      window.open(link['kyH5'])
    }else if(key === 'mk'){ 
        console.log(link['mkH5'])
      window.open(link['mkH5'])
    }
}
