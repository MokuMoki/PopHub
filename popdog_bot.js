/******************************************************************************************
* INSTRUCTIONS:
* 1 - Open "poppig.click" website.
* 2 - Open Console (Ctrl + Shift + I).
* 3 - Reload the website (F5).
* 4 - Copy from line 11 to 45, paste in Console and press Enter to run.
* 
* Additional info: https://github.com/MokuMoki/PopHub#popdog-bothack
 *******************************************************************************************/

const interval = 3_800;     //3.8 seconds per request
const clicksToSend = 2000;  //2000 is the maximum amount of clicks can be incremented per request, no point going higher

console.clear();
console.log(`%cBot will send ${clicksToSend} clicks every ${interval / 1000.0} seconds.`, "color: #ff77ff");
console.log(`%cYour UUID is ${uuid}.`, "color: #ff77ff");

const requester = async () => {
    try {
        const res = await fetch('/clicked/v2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                clicks: clicksToSend,
                uuid: uuid,
                username: username,
            }),
        });
        const data = await res.json();
        myClicks = data.clicks;
        console.log(`%cTotal clicks accumulated: ${myClicks}.`, "color: #6ea561")
        prevClicks = myClicks;
        prevUploadedClicks = myClicks;
    }
    catch (err)
    {
        console.log(err);
        console.log('%cWaiting for next run.', "color: #fbb40c");
    }
}

setInterval(requester, interval);
requester();
