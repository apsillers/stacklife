var express = require("express");
var app = express();
var http = require("http");
var https = require("https");
var fs = require("fs");

var height = 7;
var width = 7;
var profileUrl = "http://stackoverflow.com/users/710446";

/* // Uncomment to enable HTTPS (must add cert and private key file)
var httpsSettings = {
    cert: fs.readFileSync("server.crt"),
    key: fs.readFileSync("server.key")
};
https.createServer(httpsSettings, app).listen(443);
*/

http.createServer(app).listen(80);

// init blank grid
var grid = {};
for(var i=0; i<width; ++i) {
    for(var j=0; j<height; ++j) {
        grid[i.toString(36)+","+j.toString(36)] = 0;
    }
}

// step into next turn
app.get("/s", function(req, res) {
    var newGrid = {};

    for(var i=0; i<width; ++i) {
        for(var j=0; j<height; ++j) {
            var count = neighborCount(i,j);
            if(count <= 1) { newGrid[i+","+j] = 0; }
            else if(count == 3) { newGrid[i+","+j] = 1; }
            else if(count > 3) { newGrid[i+","+j] = 0; }
            else { newGrid[i+","+j] = grid[i+","+j]; }
        }
    }

    grid = newGrid;

    res.redirect(profileUrl);
});

// clear grid
app.get("/c", function(req, res) {
    clearGrid();
    res.redirect(profileUrl);
});

// fill board with pure random noise
app.get("/r", function(req, res) {
    for(var i=0; i<width; ++i) {
        for(var j=0; j<height; ++j) {
            grid[i+","+j] = Math.floor(Math.random() * 2 );
        }
    }
    res.redirect(profileUrl);
});

// place a random construct on the board (glider, blinker, mold, etc.)
app.get("/f", function(req, res) {
    clearGrid();
    var types = Object.keys(features);
    features[types[Math.floor(Math.random()*types.length)]]();

    res.redirect(profileUrl);
});

function clearGrid() {
    for(var i=0; i<width; ++i) {
        for(var j=0; j<height; ++j) {
            grid[i+","+j] = 0;
        }
    }
}

// count live neighbors of the cell at (x,y)
function neighborCount(x,y) {
    var count = 0;

    for(var i=-1; i<=1; ++i) {
        for(var j=-1; j<=1; ++j) {
            if(i==0 && j==0) { continue; }

	    if(grid[(x+i)+","+(y+j)]) { count++; }
        }
    }

    return count;
}

app.use(function(req, res){
    var coords = req.url.split("");

    // if the path begins with a `w`, it's a write instruction
    if(coords[1] == "w") {
        // toggle the square at [row,col] and reload the profile
        var state = grid[coords[3]+","+coords[2]];
        grid[coords[3]+","+coords[2]] = state?0:1;
        res.redirect(profileUrl);
    } else {
        // otherwise, it's an image; render the square at [row,col] as white or black
        var state = grid[coords[2]+","+coords[1]];
        res.sendfile(state?"img/black.png":"img/white.png");
    }
});

var features = {

    drawGlider: function() {
        grid["1,0"] = 1;
        grid["2,1"] = 1;
        grid["0,2"] = 1;
        grid["1,2"] = 1;
        grid["2,2"] = 1;
    },

    drawBlinkers: function() {
        grid["1,0"] = 1;
        grid["1,1"] = 1;
        grid["1,2"] = 1;
        grid["3,4"] = 1;
        grid["4,4"] = 1;
        grid["5,4"] = 1;
    },

    drawSpaceship: function() {
        grid["3,0"] = 1;
        grid["6,0"] = 1;
        grid["2,1"] = 1;
        grid["2,2"] = 1;
        grid["2,3"] = 1;
        grid["3,3"] = 1;
        grid["4,3"] = 1;
        grid["5,3"] = 1;
        grid["6,2"] = 1;
    },

    drawMazing: function() {
        grid["3,0"] = 1;
        grid["4,0"] = 1;
        grid["1,1"] = 1;
        grid["3,1"] = 1;
        grid["0,2"] = 1;
        grid["6,2"] = 1;
        grid["1,3"] = 1;
        grid["5,3"] = 1;
        grid["6,3"] = 1;
        grid["3,5"] = 1;
        grid["5,5"] = 1;
        grid["4,6"] = 1;
    }
}
