let total = 0;
const count = 800;
const token = 'mokumoki';
setInterval(async () => {
    const res = await fetch(`https://stats.popcat.click/pop?pop_count=${count}&captcha_token=${token}`);
    const data = await res.json();
    switch (res.status) {
        case 201:
            total += count;
            console.log(`%cSuccessfully sent ${count} pops！You sent ${total} pops in total！（Country：${data.Location.Name}）`, "color: #0f0");
            break;
        case 429:
            console.log("%cRespond too frequent, please wait at least 30 seconds.", "color: #a00");
            break;
        case 503:
            console.log("%cYour IP/device is blacklisted by CloudFlare, please wait for 24 hours", "color: #a00");
            break;
    }
}, 30000);
