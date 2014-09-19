var fallingBlocks = window.fallingBlocks = window.fallingBlocks || {};

fallingBlocks.game = function(canvas, inputListener, settings, tetriminoFactory) {
    var clock,
        gameState,
        engine,
        renderer;

    function gameOver () {
        clock.stop();
        inputListener.stopListening();
    }

    function gameStart () {
        inputListener.startListening();
        clock.start();
    }

    inputListener.onDirection = function(direction){
        if (direction === fallingBlocks.directions.down) {
            clock.restart();
        }
        engine.tryToMoveFallingObject(direction);
    };

    inputListener.onRotation = function(rotationDirection){
        engine.tryToRotateFallingObject(rotationDirection);
    };

    return {
        start: function () {
            function spawnTetrimino() {
                gameState.tetrimino = tetriminoFactory.createRandomTetriminoAtTopCentre(
                    settings.tetriminoDefinitions,
                    settings.rows,
                    settings.columns);
            }

            clock = fallingBlocks.clock(settings.initialDropInterval, settings.speedUpPercent);
            gameState = {
                landedBlocks: fallingBlocks.landedBlocksCollection(settings.columns, settings.rows),
                tetrimino: null,
                score: fallingBlocks.score()
            };
            spawnTetrimino();
            engine = fallingBlocks.engine(gameState);
            renderer = fallingBlocks.rendering.renderer(
                canvas.getContext('2d'),
                canvas.offsetWidth,
                canvas.offsetHeight,
                gameState,
                settings.spawnAreaRows,
                settings.colours,
                settings.layout);

            gameState.score.onLevelUp = function () {
                clock.speedUp();
            };

            clock.onTick = function(){
                engine.tryToMoveFallingObject(fallingBlocks.directions.down);
            };

            engine.onUpdated = function () {
                renderer.render();
            };

            engine.onTetriminoLanded = function () {
                spawnTetrimino();

                if (gameState.tetrimino.getBlockLocations().some(function (location) {
                    return gameState.landedBlocks.isLocationOccupied(location);
                })) {
                    gameOver();
                }
            };

            engine.onRemoveCompleteRows = function (rowCount) {
                gameState.score.addLines(rowCount);
            };

            gameStart();
            renderer.render();
        }
    };
};
