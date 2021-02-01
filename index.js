// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(value => value * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(value => value)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(value => value * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(value => value*value)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce(
        (total, value) => total + value, startingPoint 
    )
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(
        (state, value) => {
            if (value === false) return state = false
            else {return state = true}
        })
}

function reduceToAnyTrue(src) {
    return src.reduce(
        (state, value) => {
            if (value === true) return state = true 
            else {return state = false}
        }

    )
}