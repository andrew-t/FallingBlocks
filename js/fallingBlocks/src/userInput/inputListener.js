var fallingBlocks = fallingBlocks || {};
fallingBlocks.userInput = fallingBlocks.game || {};

fallingBlocks.userInput.inputListener = function (inputSource) {
    return {
        startListening: function () {
            var me = this;

            inputSource.onInput = function (input){
                if (input.direction) {
                    me.onDirection(input.direction);
                }
                else if (input.rotation){
                    me.onRotation(input.rotation)
                }
            };
        },

        stopListening: function () {
            inputSource.onInput = function () {};
        },

        onDirection: function (direction) {},

        onRotation: function (rotation) {}
    };
};
