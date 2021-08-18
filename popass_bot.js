/************************************************************************************************************
    IMPORTANT: YOU NEED TO KEEP THE WEBSITE FOCUSED EVERY 5 MINUTES TO ALLOW THE SCRIPT RUN CONTINUOUSLY 
    https://developer.chrome.com/blog/timer-throttling-in-chrome-88/
 ***********************************************************************************************************/

let total = 0;
const count = 1000;    //1000 is the maximum amount of clicks can be incremented per request, no point going higher
const timer = 1_000;   //you may try to optimize this, too fast will get you rate limited. 600 is lowest without getting timeout

console.clear();
console.log("%cYour bot have started.", "color: #ff77ff");

await document.getElementById("app").__vue_app__.config.globalProperties.$recaptchaLoaded;
const recaptchaResponseToken = await document.getElementById("app").__vue_app__.config.globalProperties.$recaptcha('pop');

const callAPI = async () => {
    let url = `https://api.popass.click/api/stats?count=${count}&captcha_token=${recaptchaResponseToken}`;
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
    });
    switch (res.status) {
        case 204:
            total += count;
            console.log(`%cSuccessfully sent ${count} pops！You sent ${total} pops in total!`, "color: #6ea561");
            break;
        case 429:
            console.log("%cServer have rate limited your IP.", "color: #fbb40c");
            break;
    }
}

callAPI();
setInterval(callAPI, timer);
