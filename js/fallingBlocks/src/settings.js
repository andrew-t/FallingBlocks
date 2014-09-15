var fallingBlocks = fallingBlocks || {};

fallingBlocks.settings = {
    defaultGameSettings: {
        rows: 18,
        columns: 10,
        initialDropInterval: 750,
        speedUpPercent: 10,
        spawnAreaRows: 5,
        colours: {
            landedBlock: 'yellow',
            background: 'black',
            tetrimino: 'yellow',
            scoreBoardText: 'yellow',
            scoreBoardWell: 'black',
            scoreboardBackground: 'yellow'
        },
        layout: {
            scoreBoardPadding: 5,
            scoreBoardWellPadding: 5,
            scoreBoardWellGap: 5,
            scoreBoardTextHeight: 17,
            scoreBoardWidth: 100
        },
        tetriminoDefinitions: [
            {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 3, y: 0 }
                ]
            },
            {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            {
                rotationOffset: { x: 0.5, y: 0.5 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 0, y: 1 },
                    { x: 1, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            {
                rotationOffset: { x: 0, y: 1 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 0, y: 1 },
                    { x: 1, y: 1 },
                    { x: 1, y: 2 }
                ]
            },
            {
                rotationOffset: { x: 1, y: 1 },
                blockOffsets: [
                    { x: 0, y: 1 },
                    { x: 0, y: 2 },
                    { x: 1, y: 0 },
                    { x: 1, y: 1 }
                ]
            },
            {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 2, y: 1 }
                ]
            },
            {
                rotationOffset: { x: 1, y: 0 },
                blockOffsets: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 2, y: 0 },
                    { x: 0, y: 1 }
                ]
            }
        ]
    },

    defaultKeyCodes: {
        moveLeft: 37,
        moveRight: 39,
        moveDown: 40,
        rotateAntiClockwise: 65,
        rotateClockwise: 83
    }
};
