var fallingBlocks = fallingBlocks || {};
fallingBlocks.rendering = fallingBlocks.game || {};

fallingBlocks.rendering.gameAreaRenderer = function (blockSize, width, height, colours) {
    var giles;
    return {
        render: function (context, landedBlockLocations, fallingObjectLocations) {
            // load giles
            if (!giles) {
                giles = new Image();
                giles.src = 'img/giles.png';
                return;
            }

            // render background
            context.fillStyle = colours.background;
            context.fillRect(0, 0, width, height);
            //context.drawImage(giles, 0, 0, width, height);

            // render landed blocks
            landedBlockLocations.forEach(function (blockLocation) {
                context.drawImage(giles, 
                    blockLocation.x * blockSize,
                    height - blockSize - (blockLocation.y * blockSize),
                    blockSize,
                    blockSize);
            });

        // render falling object blocks
            fallingObjectLocations.forEach(function (blockLocation) {
                context.drawImage(giles, 
                    blockLocation.x * blockSize,
                    height - blockSize - (blockLocation.y * blockSize),
                    blockSize,
                    blockSize);
            });
        }
    };
};
