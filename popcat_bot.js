/* 
INSTRUCTIONS:
1 - Open "popcat.click" website.
2 - Open Console (Ctrl + Shift + I).
3 - Reload the website (F5).
4 - Copy from line 14 to 54, paste in Console and press Enter to run.

IT IS NORMAL TO SEE THE POP COUNTER NOT INCREASING, THIS SCRIPT BYPASSED
THE NEED TO TAP BY LYING TO THE SERVER THAT YOU HAVE TAPPED.

Additional info: https://github.com/MokuMoki/popcat_bot
*/

var vue = document.getElementById('app').__vue__;
let total = 0, error = 0, token = '';
const count = 800;
const thirty_seconds = 30 * 1000;

console.clear();
console.log("%cYour bot have started.", "color: #ff77ff");

const callAPI = async () => {
    await vue.$recaptchaLoaded();
    const recaptchaResponseToken = await vue.$recaptcha('pop');
    token = token ? `&token=${token}` : '';
    let url = `https://stats.popcat.click/pop?pop_count=${count}&captcha_token=${recaptchaResponseToken}${token}`;
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
    });
    switch (res.status) {
        case 201:
            total += count;
            error = 0;
            const data = await res.json();
            token = data.Token ? data.Token : token;
            console.log(`%cSuccessfully sent ${count} pops！You sent ${total} pops in total！（Country：${data.Location.Name}）`, "color: #6ea561");
            break;
        case 429:
            console.log("%cServer rejected the pops. Please avoid running multiple instances of popcat if you are doing it.", "color: #fbb40c");
            break;
        case 503:
            error++;
            if (error < 10) {
                console.log("%cThere is an issue. Retrying...", "color: #fbb40c");
            } else {
                console.log("%cYour IP/device might have been blacklisted by CloudFlare, please wait for 12 hours.", "color: #de2910");
            }
            break;
    }
}

callAPI();
setInterval(callAPI, thirty_seconds);
