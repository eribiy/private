/**
 * Created by kate on 16.11.17.
 */
var brickGame = document.getElementById('brickGame');
var game = new BrickGame(brickGame);

function BrickGame(brickGame) {
    var width = 500;
    var height = width;
    var N = 10;
    var cellSize = width / N;
    var rect = [];
    var timerCreateRect;
    var minYposition = height;
    var count = 0;
    var playing = false;

    canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    canvas.setAttribute('style', 'border: 5px solid #000');

    start = document.createElement('button');
    start.id = 'start';
    start.className = 'btn';
    start.innerHTML = 'Start';
    start.setAttribute('style', 'font-size: 20px; padding: 5px 20px; background: green; color: #fff; border: none; margin-left: 5px; vertical-align: top;');

    stop = document.createElement('button');
    stop.id = 'stop';
    stop.className = 'btn';
    stop.innerHTML = 'Stop';
    stop.setAttribute('style', 'font-size: 20px; padding: 5px 20px; background: red; color: #fff; border: none; margin-left: 5px; vertical-align: top;');

    counter = document.createElement('span');
    counter.id = 'counter';
    counter.innerHTML = 'Score: 0';
    counter.setAttribute('style', 'font-size: 20px; padding: 5px 20px; vertical-align: top; display: inline-block; min-width: 100px;');

    brickGame.appendChild(canvas);
    brickGame.appendChild(counter);
    brickGame.appendChild(start);
    brickGame.appendChild(stop);

    var ctx = canvas.getContext('2d');

    drawCells();

    function createRect() {
        if (rect.length < N) {
            rect.push({
                x: cellSize * Math.round(Math.random() * 10),
                y: 0,
                speed: randomInteger(1, 5),
                color: getRandomColor()
            });
        } else {
            if (minYposition > cellSize) {
                rect.push({
                    x: cellSize * Math.round(Math.random() * 10),
                    y: 0,
                    speed: randomInteger(1, 5),
                    color: getRandomColor()
                });
            }
        }
    }

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function updateRect() {
        minYposition = height;
        for (var i in rect) {
            var r = rect[i];
            r.y += r.speed;
            if (r.y < minYposition) {
                minYposition = r.y;
            }
        }
    }

    function killRect() {
        for (var i in rect) {
            var r = rect[i];
            if (r.y > canvas.height) {
                rect.splice(i, 1);
            }
        }
    }

    function drawRect() {
        ctx.clearRect(0, 0, width, height);
        drawCells();
        for (var i in rect) {
            var r = rect[i];
            ctx.fillStyle = r.color;
            ctx.fillRect(r.x, r.y, cellSize, cellSize);
        }
    }

    function drawCells() {
        for (var i = 0; i < N; i++) {
            ctx.beginPath();
            ctx.moveTo(i * cellSize, 0);
            ctx.lineTo(i * cellSize, 500);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, i * cellSize);
            ctx.lineTo(500, i * cellSize);
            ctx.stroke();
        }
    }

    canvas.addEventListener('click', function (event) {
        var canvasCoordinate = canvas.getBoundingClientRect();
        var x = event.clientX - canvasCoordinate.left;
        var y = event.clientY - canvasCoordinate.top;
        for (var i = rect.length - 1; i >= 0; i--) {
            var r = rect[i];
            if (((x > r.x) && (x < (r.x + cellSize))) && ((y > r.y) && (y < (r.y + cellSize)))) {
                rect.splice(i, 1);
                count++;
                redrawCounter();
                break;
            }
        }
    });

    function redrawCounter() {
        counter.innerHTML = 'Score: ' + count;
    }

    function play() {
        createRect();
        drawRect();
        updateRect();
        killRect();
    }

    start.onclick = function () {
        if(!playing) {
            timerCreateRect = setInterval(play, randomInteger(30, 500));
            playing = !playing;
            count = 0;
            redrawCounter();
        }
    };

    stop.onclick = function () {
        if (playing) {
            clearTimeout(timerCreateRect);
            ctx.clearRect(0, 0, 500, 500);
            drawCells();
            rect.splice(0, rect.length);
            playing = !playing;
        }
    }
}


