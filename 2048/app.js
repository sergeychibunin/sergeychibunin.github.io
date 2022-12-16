window.boardState = {};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRndTileInitValue() {
    return getRndInteger(1, 2) == 1 ? 4 : 2;
}

function getRndTileNumbersInit() {
    let x = getRndTileInitValue();
    let y = getRndTileInitValue();
    if (x == y && x == 4) {
        return [2, 2];
    } else {
        return [x, y];
    }
}

function drawNewTile(tileValue) {
    if (Number.isInteger(tileValue) == false) {
        return "background-color: yellow; ";
    }
    return "background-color: aliceblue; ";
}

function addTile(tileValue, positionLeft, positionTop) {
    document.getElementById("board").innerHTML =
    document.getElementById("board").innerHTML +
    "<div class=\"tile\" style=\""+drawNewTile(tileValue)+"top: "+positionTop+"px; left: "+positionLeft+"px\">"
    +Math.round(tileValue)+"</div>";
}

function addRndTile() {

    do {
        var tilePositionNumber = getRndInteger(1, 16);
    } while (window.boardState[tilePositionNumber] != null);
    const tileValue = getRndTileInitValue();
    window.boardState[tilePositionNumber] = tileValue + 0.1;

    let isGameOver = true;
    for (let index = 1; index <= 16; index++) {
        let currentTileValue = Math.round(window.boardState[index]);
        let possibleTileIndex = index + 1;
        let possibleTileValue = Math.round(window.boardState[possibleTileIndex]);
        if (currentTileValue == 0 || possibleTileValue == 0 || currentTileValue == possibleTileValue) {
            isGameOver = false;
            break;
        }
        if (index <= 12) {
            let possibleTileIndex = index + 4;
            let possibleTileValue = Math.round(window.boardState[possibleTileIndex]);
            if (possibleTileValue == 0 || currentTileValue == possibleTileValue) {
                isGameOver = false;
                break;
            }
        }
    }
    return isGameOver;
}

function getTilesPositionCoordsInit() {
    let tile1PositionNumber = getRndInteger(1, 16);
    let tile2PositionNumber = getRndInteger(1, 16);
    while (tile1PositionNumber == tile2PositionNumber) {
        tile1PositionNumber = getRndInteger(1, 16);
        tile2PositionNumber = getRndInteger(1, 16);
    }
    return [
        getCoordsByNumber(tile1PositionNumber), getCoordsByNumber(tile2PositionNumber),
        tile1PositionNumber, tile2PositionNumber
    ];
}

function getCoordsByNumber(number) {
    let coords = {
        1: [0,0], 2: [53,00], 3: [105,0], 4: [157,0],
        5: [0,53], 6: [53,53], 7: [105,53], 8: [157,53],
        9: [0,105], 10: [53,105], 11: [105,105], 12: [157,105],
        13: [0,157], 14: [53,157], 15: [105,157], 16: [157,157]
    };
    return coords[number];
}

function addTilesInit() {
    for (let index = 1; index <= 16; index++) {
        window.boardState[index] = null;
    }
    let tileNumbers = getRndTileNumbersInit();
    let tilePositionCoords = getTilesPositionCoordsInit();
    window.boardState[tilePositionCoords[2]] = tileNumbers[0];
    window.boardState[tilePositionCoords[3]] = tileNumbers[1];
    addTile(tileNumbers[0], tilePositionCoords[0][0], tilePositionCoords[0][1]);
    addTile(tileNumbers[1], tilePositionCoords[1][0], tilePositionCoords[1][1]);
}

function addTileToBoard(tileNumber) {
    coords = getCoordsByNumber(tileNumber);
    positionLeft = coords[0];
    positionTop = coords[1];
    addTile(window.boardState[tileNumber], positionLeft, positionTop);
    window.boardState[tileNumber] = Math.round(window.boardState[tileNumber]);
}

function drawBoard() {
    let tiles = document.getElementsByClassName('tile');
    let tilesLength = tiles.length;
    for (let index = 0; index < tilesLength; index++) {
        tiles[0].remove();
    }

    for (let index = 1; index <= 16; index++) {
        tileValue = window.boardState[index];
        if (tileValue == null) continue;
        addTileToBoard(index);
    }
    console.log(window.boardState);
}

function sumTileValues(index, newTileNumber) {
    window.boardState[newTileNumber] = Math.round(window.boardState[newTileNumber]) + Math.round(window.boardState[index]);
    window.boardState[index] = null;
    if (Math.round(window.boardState[newTileNumber]) == 2028) {
        console.log('Win');
        alert('Win');
    }
}

function moveRightHandler(isInRecursion) {
    let isUpdated = false;
    for (let index = 1; index <= 16; index++) {
        if ([4,8,12,16].indexOf(index) != -1) continue;
        if (window.boardState[index] == null) continue;

        let newTileNumber = index + 1;
        if (window.boardState[newTileNumber] == null) {
            window.boardState[newTileNumber] = Math.round(window.boardState[index]);
            window.boardState[index] = null;
            isUpdated = true;
        } else {
            let tileValue = Math.round(window.boardState[index]);
            let newTileValue = Math.round(window.boardState[newTileNumber]);
            if (tileValue == newTileValue) {
                sumTileValues(index, newTileNumber);
                isUpdated = true;
            }
        }
    }
    if (isUpdated) {
        moveRightHandler(true);
        if (!isInRecursion) {
            return addRndTile();
        }
    }
    return false;
}

function moveLeftHandler(isInRecursion) {
    let isUpdated = false;
    for (let index = 16; index >= 1; index--) {
        if ([1,5,9,13].indexOf(index) != -1) continue;
        if (window.boardState[index] == null) continue;

        let newTileNumber = index - 1;
        if (window.boardState[newTileNumber] == null) {
            window.boardState[newTileNumber] = Math.round(window.boardState[index]);
            window.boardState[index] = null;
            isUpdated = true;
        } else {
            let tileValue = Math.round(window.boardState[index]);
            let newTileValue = Math.round(window.boardState[newTileNumber]);
            if (tileValue == newTileValue) {
                sumTileValues(index, newTileNumber);
                isUpdated = true;
            }
        }
    }
    if (isUpdated) {
        moveLeftHandler(true);
        if (!isInRecursion) {
            return addRndTile();
        }
    }
    return false;
}

function moveUpHandler(isInRecursion) {
    let isUpdated = false;
    for (let index = 16; index >= 1; index--) {
        if (index < 5) continue;
        if (window.boardState[index] == null) continue;

        let newTileNumber = index - 4;
        if (window.boardState[newTileNumber] == null) {
            window.boardState[newTileNumber] = Math.round(window.boardState[index]);
            window.boardState[index] = null;
            isUpdated = true;
        } else {
            let tileValue = Math.round(window.boardState[index]);
            let newTileValue = Math.round(window.boardState[newTileNumber]);
            if (tileValue == newTileValue) {
                sumTileValues(index, newTileNumber);
                isUpdated = true;
            }
        }
    }
    if (isUpdated) {
        moveUpHandler(true);
        if (!isInRecursion) {
            return addRndTile();
        }
    }
    return false;
}

function moveDownHandler(isInRecursion) {
    let isUpdated = false;
    for (let index = 1; index <= 16; index++) {
        if (index > 12) continue;
        if (window.boardState[index] == null) continue;

        let newTileNumber = index + 4;
        if (window.boardState[newTileNumber] == null) {
            window.boardState[newTileNumber] = Math.round(window.boardState[index]);
            window.boardState[index] = null;
            isUpdated = true;
        } else {
            let tileValue = Math.round(window.boardState[index]);
            let newTileValue = Math.round(window.boardState[newTileNumber]);
            if (tileValue == newTileValue) {
                sumTileValues(index, newTileNumber);
                isUpdated = true;
            }
        }
    }
    if (isUpdated) {
        moveDownHandler(true);
        if (!isInRecursion) {
            return addRndTile();
        }
    }
    return false;
}

function moveHandler(event) {
    const keyCode = event.code;
    let isGameOver = null;
    if (keyCode == "ArrowUp") {
        isGameOver = moveUpHandler(false);
    }
    if (keyCode == 'ArrowDown') {
        isGameOver = moveDownHandler(false);
    }
    if (keyCode == 'ArrowLeft') {
        isGameOver = moveLeftHandler(false);
    }
    if (keyCode == 'ArrowRight') {
        isGameOver = moveRightHandler(false);
    }
    drawBoard();
    if (isGameOver) {
        document.getElementById("body").removeEventListener("keyup", moveHandler);
        console.log('Game over');
        alertGameOver();
    }
}

function alertGameOver() {
    document.getElementById("board").innerHTML = "<h1 style=\"position: absolute; z-index: 999; color: red;\">Game over</h1>"
    + document.getElementById("board").innerHTML;
}

var loader = setInterval(function () {
    if(document.readyState !== "complete") return;
    clearInterval(loader);
    addTilesInit();
    document.getElementById("body").addEventListener("keyup", moveHandler);
}, 300);
