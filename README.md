stacklife
=========

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_game_of_life) for a Stack Exchange profile. See a deployed implementation on [my Stack Overflow profile](http://www.stackoverflow.com/users/710446/apsillers).

While the client-side markdown is designed to fit inside of a Stack Exchange profile, this code could easily be used in any HTML environment that allows links and images.

## Example

[![](http://l.apsillers.com:8001/00)](http://l.apsillers.com:8001/w00)
[![](http://l.apsillers.com:8001/01)](http://l.apsillers.com:8001/w01)
[![](http://l.apsillers.com:8001/02)](http://l.apsillers.com:8001/w02)
[![](http://l.apsillers.com:8001/03)](http://l.apsillers.com:8001/w03)
[![](http://l.apsillers.com:8001/04)](http://l.apsillers.com:8001/w04)
[![](http://l.apsillers.com:8001/05)](http://l.apsillers.com:8001/w05)
[![](http://l.apsillers.com:8001/06)](http://l.apsillers.com:8001/w06)
&nbsp; **Controls:**<br>
[![](http://l.apsillers.com:8001/10)](http://l.apsillers.com:8001/w00)
[![](http://l.apsillers.com:8001/11)](http://l.apsillers.com:8001/w11)
[![](http://l.apsillers.com:8001/12)](http://l.apsillers.com:8001/w12)
[![](http://l.apsillers.com:8001/13)](http://l.apsillers.com:8001/w13)
[![](http://l.apsillers.com:8001/14)](http://l.apsillers.com:8001/w14)
[![](http://l.apsillers.com:8001/15)](http://l.apsillers.com:8001/w15)
[![](http://l.apsillers.com:8001/16)](http://l.apsillers.com:8001/w16)
&nbsp; [<kbd>Step</kbd>](http://l.apsillers.com:8001/s) [<kbd>Random Noise</kbd>](http://l.apsillers.com:8001/r)
<br>
[![](http://l.apsillers.com:8001/20)](http://l.apsillers.com:8001/w20)
[![](http://l.apsillers.com:8001/21)](http://l.apsillers.com:8001/w21)
[![](http://l.apsillers.com:8001/22)](http://l.apsillers.com:8001/w22)
[![](http://l.apsillers.com:8001/23)](http://l.apsillers.com:8001/w23)
[![](http://l.apsillers.com:8001/24)](http://l.apsillers.com:8001/w24)
[![](http://l.apsillers.com:8001/25)](http://l.apsillers.com:8001/w25)
[![](http://l.apsillers.com:8001/26)](http://l.apsillers.com:8001/w26)
&nbsp; [<kbd>Clear</kbd>](http://l.apsillers.com:8001/c) [<kbd>Random Feature</kbd></a>](http://l.apsillers.com:8001/f)<br>
[![](http://l.apsillers.com:8001/30)](http://l.apsillers.com:8001/w30)
[![](http://l.apsillers.com:8001/31)](http://l.apsillers.com:8001/w31)
[![](http://l.apsillers.com:8001/32)](http://l.apsillers.com:8001/w32)
[![](http://l.apsillers.com:8001/33)](http://l.apsillers.com:8001/w33)
[![](http://l.apsillers.com:8001/34)](http://l.apsillers.com:8001/w34)
[![](http://l.apsillers.com:8001/35)](http://l.apsillers.com:8001/w35)
[![](http://l.apsillers.com:8001/36)](http://l.apsillers.com:8001/w36)
&nbsp; Click a cell to toggle it.<br>
[![](http://l.apsillers.com:8001/40)](http://l.apsillers.com:8001/w40)
[![](http://l.apsillers.com:8001/41)](http://l.apsillers.com:8001/w41)
[![](http://l.apsillers.com:8001/42)](http://l.apsillers.com:8001/w42)
[![](http://l.apsillers.com:8001/43)](http://l.apsillers.com:8001/w43)
[![](http://l.apsillers.com:8001/44)](http://l.apsillers.com:8001/w44)
[![](http://l.apsillers.com:8001/45)](http://l.apsillers.com:8001/w45)
[![](http://l.apsillers.com:8001/46)](http://l.apsillers.com:8001/w46)
&nbsp; [View source](//github.com/apsillers/stacklife)<br>
[![](http://l.apsillers.com:8001/50)](http://l.apsillers.com:8001/w50)
[![](http://l.apsillers.com:8001/51)](http://l.apsillers.com:8001/w51)
[![](http://l.apsillers.com:8001/52)](http://l.apsillers.com:8001/w52)
[![](http://l.apsillers.com:8001/53)](http://l.apsillers.com:8001/w53)
[![](http://l.apsillers.com:8001/54)](http://l.apsillers.com:8001/w54)
[![](http://l.apsillers.com:8001/55)](http://l.apsillers.com:8001/w55)
[![](http://l.apsillers.com:8001/56)](http://l.apsillers.com:8001/w56)<br>
[![](http://l.apsillers.com:8001/60)](http://l.apsillers.com:8001/w60)
[![](http://l.apsillers.com:8001/61)](http://l.apsillers.com:8001/w61)
[![](http://l.apsillers.com:8001/62)](http://l.apsillers.com:8001/w62)
[![](http://l.apsillers.com:8001/63)](http://l.apsillers.com:8001/w63)
[![](http://l.apsillers.com:8001/64)](http://l.apsillers.com:8001/w64)
[![](http://l.apsillers.com:8001/65)](http://l.apsillers.com:8001/w65)
[![](http://l.apsillers.com:8001/66)](http://l.apsillers.com:8001/w66)

## Server setup

1. After downloading the code, run `npm install` inside the project directory to install Express.

2. In `lifeserver.js`, change the `profileUrl` variable to the URL of the HTML page that will display the Life grid.

3. Optionally, to enable HTTPS, copy your SSL cert/key files into the directory and uncomment the HTTPS code at the top of `lifeserver.js`.

3. Run `node ifeserver.js` (with `sudo` if necessary to listen on ports `80` and `443`).

## Client setup

1. In `client.txt`, replace `${host}` with the scheme and hostname of your server, with no trailing slash, e.g., `http://example.com`.

2. If deploying to Stack Exchange, ensure your hostname is short enough to fit in the 3000 character limit. Also, you can save space by using `//` as the scheme (e.e., `//example.com` instead of `http://example.com`) which will use the scheme of the containing page. (Note that this means that your server must support HTTPS whenever Stack Exchange upgrades to HTTPS, or if a user is using [HTTPS Everywhere](https://www.eff.org/https-everywhere).)

3. Copy the contents of `client.txt` to your profile or other page.

## How it works

The server maintains the global state of the Life game. The client HTML/markdown displays the state of each cell as an image in a grid. An HTTP server listens for requests with particular paths:

* `/00` (or any two numbers) - serve an image representing the state of the cell at that {row,col} position (black for live, white for dead)
* `/w00` (or any two numbers) - toggle the state of the cell at {row,col}
* `/c` - clear all cells
* `/r` - fill cells with random noise
* `/f` - clear cells and draw a random feature (glider, oscillator, etc.)
* `/s` - step into the next Life generation

All requests redirect back to the profile page after they perform their specified server-side action (except for the `/00` request, which serves an image instead of performing a redirect).

## Future work

Future modifications might include:

* using cookies to allow each user to have a separate game state
* using query strings in the profile URL (passed to the server via `Referer` header) to have saved states sharable via URL
* applying the general principles to a completely new game (chess, minesweeper, etc.). This would work especially well for a game with very few inputs and output that can be rendered as a single image, since multi-image output requires a high volume of separate HTTP requests. For example, a video game console simulator with a D-pad and a few buttons, plus a single screen image, rendered server-side with Imagemagick, would only require a few HTTP requests.
