/* 
1 - Open "popcat.click" website.
2 - Open Console (Ctrl + Shift + I).
3 - Copy from line 9 to 31, paste in Console and press Enter to run.

Additional info: https://github.com/MokuMoki/popcat_bot
*/

let total = 0;
const count = 800;
const token = 'mokumoki';

console.clear();
console.log("%cYour bot have started.", "color: #ff77ff");

setInterval(async () => {
    const res = await fetch(`https://stats.popcat.click/pop?pop_count=${count}&captcha_token=${token}`);
    switch (res.status) {
        case 201:
            const data = await res.json();
            total += count;
            console.log(`%cSuccessfully sent ${count} pops！You sent ${total} pops in total！（Country：${data.Location.Name}）`, "color: #6ea561");
            break;
        case 429:
            console.log("%cRespond too frequent, please wait at least 30 seconds.", "color: #fbb40c");
            break;
        case 503:
            console.log("%cYour IP/device is blacklisted by CloudFlare, please wait for 12 hours.", "color: #de2910");
            break;
    }
}, 30000);
