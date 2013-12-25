fallingBlocks.game.transform = function () {
    var matrix = fallingBlocks.game.transformMatrixFactory.getIdentity();

    return {
        rotateQuarterTurns: function (quarterTurns) {
            var quarterTurnsMatrix = fallingBlocks.game.transformMatrixFactory.getQuarterTurns(quarterTurns);
            matrix = matrix.dotProduct(quarterTurnsMatrix);
        },

        translate: function (x, y) {
            var translationMatrix = fallingBlocks.game.transformMatrixFactory.getTranslation(x, y);
            matrix = matrix.translate(translationMatrix);
        },

        getTransformedLocation: function (location) {
            var locationMatrix = fallingBlocks.game.transformMatrixFactory.getLocation(location),
                newLocationMatrix = matrix.dotProduct(locationMatrix),
                newLocationLocationVector = newLocationMatrix.getColumnVector(0);

            return {
                x: newLocationLocationVector.getElement(0),
                y: newLocationLocationVector.getElement(1)
            };
        }
    };
};