/**
 * @param p - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(p = []) {
    let num = 0;

    p.map((x, i) => {
        const shift = 1;
        let y, z;

        if (x - shift !== i) {
            y = p[x - shift];
            if (p[y - shift] !== y) {
                z = p[y - shift];
                if (p[z - shift] !== z && i === z - shift) {
                    num += 1;
                }
            }
        }
    });
    return num / 3;
};
