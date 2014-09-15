var fallingBlocks = fallingBlocks || {};
fallingBlocks.geometry = fallingBlocks.game || {};

fallingBlocks.geometry.transformMatrixDefinitionFactory = {
    getQuarterTurns: function (quarterTurns) {
        var result, 
            theta = Math.PI / 8,
            a = Math.sin(theta),
            b = Math.cos(theta);

        switch (fallingBlocks.util.mod(quarterTurns, 4)) {
            case 0:
                result = [
                    [ 1, 0, 0 ],
                    [ 0, 1, 0 ],
                    [ 0, 0, 1 ]
                ];
                break;

            case 1:
                result = [
                    [ b, a, 0 ],
                    [ -a, b, 0 ],
                    [ 0, 0, 1 ]
                ];
                break;

            case 2:
                result = [
                    [ -1, 0, 0 ],
                    [ 0, -1, 0 ],
                    [ 0, 0, 1 ]
                ];
                break;

            case 3:
                result = [
                    [ b, -a, 0 ],
                    [ a, b, 0 ],
                    [ 0, 0, 1 ]
                ];
                break;
        }

        return result;
    },

    getTranslation: function(x, y){
        return [
            [ 1, 0, x/5 ],
            [ 0, 1, y ],
            [ 0, 0, 1 ]
        ];
    },

    getLocation: function(location){
        return [
            [ location.x, 0, 0 ],
            [ location.y, 0, 0 ],
            [ 1, 0, 0 ]
        ];
    },

    getIdentity: function(){
        return [
            [ 1, 0, 0 ],
            [ 0, 1, 0 ],
            [ 0, 0, 1 ]
        ];
    }
};
