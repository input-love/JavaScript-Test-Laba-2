function main(count, arrayWord) {
    output = [];
    try {
        let n = +count;
        if (isNaN(n)) {
            throw new Error('ValueError');
        }
        if (n < 1 || n > 100) {
            throw new Error('RangeError');
        }

        for (let i = 0; i < n; i++) {
            if (arrayWord[i].length >= 1 && arrayWord[i].length <= 100) {
                if (/^[a-z]+$/.test(arrayWord[i])) {
                    if (arrayWord[i].length > 10) {
                        output.push(arrayWord[i][0] + (arrayWord[i].length - 2) + arrayWord[i][arrayWord[i].length - 1]);
                    } else {
                        output.push(arrayWord[i]);
                    }
                } else {
                    throw new Error('ValueError');
                }
            } else {
                throw new Error('RangeError');
            }
        }
        
    } catch (error) {
        output.splice(0, output.length, error.message);
    } finally {
        return output;
    }
}

module.exports = main;