/******************************************************************************************
* INSTRUCTIONS:
* 1 - Open "poppig.click" website.
* 2 - Open Console (Ctrl + Shift + I).
* 3 - Reload the website (F5).
* 4 - Copy from line 11 to 54, paste in Console and press Enter to run.
* 
* Additional info: https://github.com/MokuMoki/PopHub#poppig-bothack
 *******************************************************************************************/

let loop = 0, ok = 0, err = 0;
const loopAmount = 100;        //amount of requests to send (recommended: 100)
const loopInterval = 30;       //time to wait before sending the requests (recommended: 30)

async function fetchTokens() {
    let jsonToken;
    try {
        let getUUID = await fetch('/getuuid');
        let jsonData = await getUUID.json();
        let uuid = jsonData.uuid;
        let getToken = await fetch('/gettoken?uuid=' + uuid);
        jsonToken = await getToken.json();
        setTimeout(() => { spamClicks(jsonToken.token) }, loopInterval * 1000);
    } catch (err) {
        fetchTokens();
    }
}

async function spamClicks(tokenkey) {
    loop++;
    let submitScore = await fetch('/submitscore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: tokenkey, clicked2: 800 })
    });
    let jsonScore = await submitScore.json();
    (jsonScore.status == 0) ? ok++ : err++;
    fetchTokens();        //fetch new token for every response
}

function displayStatus() {
    console.clear();
    console.log(`%cAdministered: ${loop}, %cSuccess: ${ok} (${ok * 800} clicks), %cRejected: ${err}`, "color: aqua", "color: lime;", "color: orange;");
}

for (let i = 0; i < loopAmount; i++) {
    fetchTokens();          //fetch the first batch of tokens
}

console.clear();
console.warn("To save resources, please disable network recording by going to Network (top row, next to Console) and click on the red button (first icon) to stop recording.");
if (loopAmount > 250) { console.warn(`You have set a high loopAmount (${loopAmount}), which will cause the system to lag when bot is running. Consider using a lower value if you experiencing lag.`) }

setInterval(() => { displayStatus() }, 3000);
