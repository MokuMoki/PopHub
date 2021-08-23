# PopHub
Public repo for PopAnimals JavaScript hacks. Periodically updated by [MokuMoki](https://github.com/MokuMoki).

# PopCat bot/hack
Our first PopAnimals script, kick started by social media trend in Taiwan and Malaysia.

* Website: [popcat.click](https://popcat.click/)
* Script: [popcat_bot.js](/popcat_bot.js)

## Features
This simple script have few "features" compared to other shorter alternatives:
* **Tracks** how many pops you sent
* **Notifies** you if there's issue with sending pops
* **Ban-proof** (rate limited to 800 every 30 seconds)
* Shows which **country** you are contributing to
* **Light** on system resources
* Works even if you got marked as bot (yes, works even if the cat is shooting laser)

![Screenshot 2021-08-17 022153](https://user-images.githubusercontent.com/14260598/129611627-5a98da4e-c049-4020-9862-9911785beb78.png)

## Website Logic

### Bot detection
* Before sending your clicks to server, it will check how much clicks you performed for the past 30 seconds.
* If you accumulated more than 800 clicks for the past 30 seconds, it will increment the variable `sequential_max_pops`.
* If you did not accumulate more than 800 clicks even once, the `sequential_max_pops` will reset to 0.
* If the variable `sequential_max_pops` reaches 10, you will be given a `bot = true` cookie and the cat eyes will light up. The cookie lasts for 12 hours.
* While the `bot = true` cookie in place, it will ignore sending your clicks to server.
* You may clear the website cookies to remove the bot status.

### Submitting clicks
* Sends your clicks to server every 30 seconds (Accepts maximum of 800 clicks).
* Sending additional requests within the 30 seconds cooldown will trigger the rate limiter, which responds with HTTP status code 429.
* You can't bypass the rate limiter by using different tab, browser, or even device that uses the same public IP address.

# PopDog bot/hack
Second PopAnimals script.

* Website: [popdog.click](https://popdog.click/)
* Script: [popdog_bot.js](/popdog_bot.js)

## Features
Our PopDog script have following features:
* **Optimized** for highest efficiency per UUID (approx 2000 clicks per 3.8 seconds)
* **Notifies** and tracks amount of clicks sent
* **Light** on system resources
* Silent

![Screenshot 2021-08-17 022301](https://user-images.githubusercontent.com/14260598/129612530-ff081088-09f1-4ca4-97a4-a6cb1f341e73.png)

# PopAss bot/hack
Third PopAnimals (PopHuman?) script.

* Website: [popass.click](https://popass.click/)
* Script: [popass_bot.js](/popass_bot.js)

## Features
Our PopAss script have following features:
* **Optimized** for highest efficiency per IP (approx 1000 clicks per 0.6 seconds)
* **Notifies** and tracks amount of clicks sent
* Considerably **less resource intensive** compared to using keyDown event
* Works even if you got marked as bot

![Screenshot 2021-08-17 191113](https://user-images.githubusercontent.com/14260598/129716707-755534d7-807e-4e6a-bf40-b651c2438137.png)

# PopPig bot/hack
Most ~~efficient~~ powerful hack for poppig.click.

* Website: [poppig.click](https://poppig.click/)
* Script: [poppig_bot.js](/poppig_bot.js)

## Feature
Our PopPig script have few features:
* **High efficiency** (800 clicks per request)
* Light on system resources (on lower values)
* **Scalable** (scale your attack according to system ability)

# Other PopAnimals/PopHumans

| Website | Link | Bot script | Remarks |
|---|---|---|---|
| PopKing | [popking.click](https://popking.click/) | N/A | A click game written to inform public about some of the controversies about the King of Thailand. <br>Click on "Close POPKING" will present you a quiz. The correct answers for the quiz are: False, True, True, True, False, True, False, True, False, True. |
| PopDin | [popdin.politician.world](https://popdin.politician.world/) | [PopDin_hack.js](https://gist.github.com/MokuMoki/) (Private) | A simple click game designed to mock Muhyiddin Yassin, Malaysia's 8th Prime Minister. <br>Hack courtesy of [NRockhouse](https://github.com/NRockhouse). 🙏|
| PopBri | [popbri.politician.world](https://popbri.politician.world/) | N/A | A simple click game designed to mock Ismail Sabri Yaakob, Malaysia's 9th Prime Minister. |
| Popyut | [prayut.click](https://prayut.click/) | N/A | Similar to PopDin, this PopCat spin off is created to mock Thailand Prime Minister, Prayut Chan-o-cha. |
| PopXi | [popxi.click](https://popxi.click/) | N/A | PopCat spinoff made by [Taiwanese meme page](https://www.instagram.com/_taiwanmeme_/) that allow you to pop the greatest supreme leader in the world. |
| PopRick | [poprick.click](https://poprick.click) | [poprick_bot.js](/poprick_bot.js) | Pop Rick Ashley and get yourself rickrolled in 2021. |

# FAQ

## How do I use these scripts on an Android Chrome browser?
You may run the script by connecting to a PC with Chrome and use the **remote debugging** feature:
https://developer.chrome.com/docs/devtools/remote-debugging/
