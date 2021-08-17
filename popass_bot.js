/* IMPORTANT: YOU NEED TO OCCASIONALLY KEEP THE WEBSITE FOCUSED TO ALLOW THE SCRIPT RUN CONTINUOUSLY */

let total = 0;
const count = 1000;   //maximum is 1000 pops per request
const timer = 1 * 1000;   //one request per second, you may try to optimize this, too fast will get you rate limited.

console.clear();
console.log("%cYour bot have started.", "color: #ff77ff");

const callAPI = async () => {
    await document.getElementById("app").__vue_app__.config.globalProperties.$recaptchaLoaded;
    const recaptchaResponseToken = await document.getElementById("app").__vue_app__.config.globalProperties.$recaptcha('pop');
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
