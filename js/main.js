document.addEventListener('DOMContentLoaded', function () {
    var myCanvas = document.getElementById('MyCanvas'),
        inputSource = window.fallingBlocks.userInput.keyboardInputSource(
        	myCanvas, window.fallingBlocks.settings.defaultKeyCodes),
        inputListener = window.fallingBlocks.userInput.inputListener(inputSource),
        game = window.fallingBlocks.game(
            myCanvas,
            inputListener,
            window.fallingBlocks.settings.defaultGameSettings,
            window.fallingBlocks.tetriminoFactory);

    game.start();
});
