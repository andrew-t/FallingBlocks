var fallingBlocks = window.fallingBlocks = fallingBlocks || {};
fallingBlocks.game = fallingBlocks.game || {};

fallingBlocks.geometry.transformVector = function (vectorDefinition) {
    var definition = [].concat(vectorDefinition);

    return {
        getElementCount: function () {
            return definition.length;
        },

        getElements: function () {
            return definition;
        },

        isEqualTo: function (objectVector) {
            return  this.getElementCount() === objectVector.getElementCount() &&
                    this.getElements().every(function (subjectElement, elementIndex) {
                        var objectElement = objectVector.getElements()[elementIndex];
                        return subjectElement === objectElement;
                    });
        },

        dotProduct: function(otherVector){
            var otherVectorElements = otherVector.getElements();
            return this.getElements().reduce(function (previousElement, currentElement, elementIndex) {
                return previousElement + currentElement * otherVectorElements[elementIndex];
            }, 0);
        }
    };
};
