
/**
 * 足し算します。
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}


/**
 * 足し算します(非同期)。
 * @param {number} a 
 * @param {number} b 
 * @returns {Promise<number>}
 */
function addAsync(a, b) {
    return Promise.resolve(a + b)
}

module.exports = {
    add,
    addAsync
}