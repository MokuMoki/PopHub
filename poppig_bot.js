let totalSent = 0;
const clicksToSend = 800;
const sendInterval = 5_000;
const sendClicks = async () => {
    accumulated = window.localStorage.getItem('accumulated');
    clicked = clicksToSend;

    if(accumulated == null) {
        accumulated = 0;
    }

    accumulated = parseInt(accumulated);
    accumulated += clicked;
    const clickToPost = clicked;
    clicked = 0;
    window.localStorage.setItem('accumulated', parseInt(accumulated));

    console.log(`Sending ${clicksToSend} clicks...`);
    const res = await fetch('/submitscore', {
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body : JSON.stringify({token:token,clicked:clickToPost})
    })
    const data = await res.json();

    switch (data.status) {
        case 0:
            token = data.token;
            totalSent += clicksToSend;
            console.log(`Succesfully sent ${clicksToSend} clicks! Total clicks sent this run: ${totalSent}`);
            break;
        case 429:
            console.log(`Too many request for ${clicksToSend}!`);
            break;
        case 102:
            console.log(`Server still in cooling phase, retry at next run!`);
            break;
    }
}

setInterval(sendClicks, sendInterval);