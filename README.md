stacklife
=========

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_game_of_life) for a Stack Exchange profile. See an deployed implementation on [my Stack Overflow profile](http://www.stackoverflow.com/users/710446/apsillers).

While the client-side markdown is designed to fit inside of a Stack Exchange profile, this code could easily be used in any HTML environment that allows links and images.

## Example

[![](http://l.apsillers.com/00)](http://l.apsillers.com/w00)
[![](http://l.apsillers.com/01)](http://l.apsillers.com/w01)
[![](http://l.apsillers.com/02)](http://l.apsillers.com/w02)
[![](http://l.apsillers.com/03)](http://l.apsillers.com/w03)
[![](http://l.apsillers.com/04)](http://l.apsillers.com/w04)
[![](http://l.apsillers.com/05)](http://l.apsillers.com/w05)
[![](http://l.apsillers.com/06)](http://l.apsillers.com/w06)
&nbsp; **Controls:**<br>
[![](http://l.apsillers.com/10)](http://l.apsillers.com/w00)
[![](http://l.apsillers.com/11)](http://l.apsillers.com/w11)
[![](http://l.apsillers.com/12)](http://l.apsillers.com/w12)
[![](http://l.apsillers.com/13)](http://l.apsillers.com/w13)
[![](http://l.apsillers.com/14)](http://l.apsillers.com/w14)
[![](http://l.apsillers.com/15)](http://l.apsillers.com/w15)
[![](http://l.apsillers.com/16)](http://l.apsillers.com/w16)
&nbsp; [<kbd>Step</kbd>](http://l.apsillers.com/s) [<kbd>Random Noise</kbd>](http://l.apsillers.com/r)
<br>
[![](http://l.apsillers.com/20)](http://l.apsillers.com/w20)
[![](http://l.apsillers.com/21)](http://l.apsillers.com/w21)
[![](http://l.apsillers.com/22)](http://l.apsillers.com/w22)
[![](http://l.apsillers.com/23)](http://l.apsillers.com/w23)
[![](http://l.apsillers.com/24)](http://l.apsillers.com/w24)
[![](http://l.apsillers.com/25)](http://l.apsillers.com/w25)
[![](http://l.apsillers.com/26)](http://l.apsillers.com/w26)
&nbsp; [<kbd>Clear</kbd>](http://l.apsillers.com/c) [<kbd>Random Feature</kbd></a>](http://l.apsillers.com/f)<br>
[![](http://l.apsillers.com/30)](http://l.apsillers.com/w30)
[![](http://l.apsillers.com/31)](http://l.apsillers.com/w31)
[![](http://l.apsillers.com/32)](http://l.apsillers.com/w32)
[![](http://l.apsillers.com/33)](http://l.apsillers.com/w33)
[![](http://l.apsillers.com/34)](http://l.apsillers.com/w34)
[![](http://l.apsillers.com/35)](http://l.apsillers.com/w35)
[![](http://l.apsillers.com/36)](http://l.apsillers.com/w36)
&nbsp; Click a cell to toggle it.<br>
[![](http://l.apsillers.com/40)](http://l.apsillers.com/w40)
[![](http://l.apsillers.com/41)](http://l.apsillers.com/w41)
[![](http://l.apsillers.com/42)](http://l.apsillers.com/w42)
[![](http://l.apsillers.com/43)](http://l.apsillers.com/w43)
[![](http://l.apsillers.com/44)](http://l.apsillers.com/w44)
[![](http://l.apsillers.com/45)](http://l.apsillers.com/w45)
[![](http://l.apsillers.com/46)](http://l.apsillers.com/w46)
&nbsp; [View source](//github.com/apsillers/stacklife)<br>
[![](http://l.apsillers.com/50)](http://l.apsillers.com/w50)
[![](http://l.apsillers.com/51)](http://l.apsillers.com/w51)
[![](http://l.apsillers.com/52)](http://l.apsillers.com/w52)
[![](http://l.apsillers.com/53)](http://l.apsillers.com/w53)
[![](http://l.apsillers.com/54)](http://l.apsillers.com/w54)
[![](http://l.apsillers.com/55)](http://l.apsillers.com/w55)
[![](http://l.apsillers.com/56)](http://l.apsillers.com/w56)<br>
[![](http://l.apsillers.com/60)](http://l.apsillers.com/w60)
[![](http://l.apsillers.com/61)](http://l.apsillers.com/w61)
[![](http://l.apsillers.com/62)](http://l.apsillers.com/w62)
[![](http://l.apsillers.com/63)](http://l.apsillers.com/w63)
[![](http://l.apsillers.com/64)](http://l.apsillers.com/w64)
[![](http://l.apsillers.com/65)](http://l.apsillers.com/w65)
[![](http://l.apsillers.com/66)](http://l.apsillers.com/w66)

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
