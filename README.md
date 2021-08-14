# popcat_bot
popcat.click auto pop sender with feedback.

# "Features"
This simple script have few features compared to other shorter alternatives:
* Tracks how many pops you sent
* Notifies you if there's issue with sending pops
* Ban-proof (rate limited to 800 per 30 seconds)

# Known restrictions
It is known that popcat.click can only accept 800 pops per 30 seconds, and you cannot request API again during the 30 seconds cooldown. 

If the API realized that you have sent more than 800 pops every seconds repeatedly, you will be flagged as bot and the cat eyes will light up. 
You may clear the website cookies or use incognito to unflag yourself.

![Screenshot 2021-08-14 184105](https://user-images.githubusercontent.com/14260598/129443727-7e95a17c-06b9-49e7-894b-2d2da5ff8a25.png)


# Solving Error 503
Popcat will sometimes respond with an error "503 - Haven't found your country code yet (try again later)". Despite what the error describing, it is most likely not to do with detecting your country, but rather CloudFlare have flagged you as a bot, and the API call failed. Unfortunately, you might need to wait it out.

AdBlocker is known to cause issue as well, simply disable them and see if it works.
