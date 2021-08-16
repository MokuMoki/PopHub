/************************************************************************************************************
 * An experimental autoclicker bot for popdog.clicks
 * Copy and paste the following codes to browser console and press enter.
 ***********************************************************************************************************/
const interval = 5_000;
const clicksToSend = 2000;

setInterval(async () => {
    try {
        console.log(`Sending ${clicksToSend} clicks...`);
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
        console.log(`Total clicks sent ${myClicks}.`)
        prevClicks = myClicks;
        prevUploadedClicks = myClicks;
    }
    catch (err)
    {
        console.log(err);
        console.log('Waiting for next run...');
    }
}, interval);
