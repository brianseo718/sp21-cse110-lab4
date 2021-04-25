setInterval(printSeconds, 1000);
//1000 ms or 1 second delay time for each print
function printSeconds(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}