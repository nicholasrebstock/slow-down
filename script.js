function my_timer(time, redirect) {
    if (time == 0) {
        window.location.replace(redirect)
    } else {
        time = time - 1;
        document.getElementById("time").textContent=time;
        setTimeout(function(){my_timer(time, redirect)}, 1000);
    }
}

function getUrlVars() {
    let parts = window.location.href;
    let interval = [parts.indexOf("time="), parts.indexOf("&")]
    let end = parts.indexOf("redirect=");
    let time = parts.slice(interval[0] + 5, interval[1])
    let myurl = parts.slice(end + 9);
    return [myurl, time]
}


let deets = getUrlVars();
let originalurl = deets[0]
let time = parseInt(deets[1], 10)
my_timer(time, originalurl);

