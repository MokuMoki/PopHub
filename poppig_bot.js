/******************************************************************************************
* INSTRUCTIONS:
* 1 - Open "poppig.click" website.
* 2 - Open Console (Ctrl + Shift + I).
* 3 - Reload the website (F5).
* 4 - Copy line 12, paste in Console and press Enter to run.
* 
* Additional info: https://github.com/MokuMoki/PopHub#poppig-bothack
 *******************************************************************************************/

//setInterval(function(){ clicked2 = 800; }, 5000);   dev changed the code, use the below script as temporary solution (need to focus on the page)
setInterval(() => document.dispatchEvent(new KeyboardEvent('keydown')), 35);
