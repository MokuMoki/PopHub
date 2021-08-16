/************************************************************************************************************
 * An experimental autoclicker bot for popdog.clicks
 * Copy and paste the following codes to browser console and press enter.
 ***********************************************************************************************************/

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
