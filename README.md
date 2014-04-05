stacklife
=========

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_game_of_life) for a Stack Exchange profile. See an deployed implementation on [my Stack Overflow profile](http://www.stackoverflow.com/users/710446/apsillers).

While the client-side markdown is designed to fit inside of a Stack Exchange profile, this code could easily be used in any HTML environment that allows links and images.

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
