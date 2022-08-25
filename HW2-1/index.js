const getUserRange = () => {
    const userRange = process.argv[2];
    if (!isNaN(userRange)) {
        return userRange;
    } else {
        return -1;
    }
}

const makeArray = (maxLengthArray) => {
    const results = [];
    let flag = 1;

    for (let i=2; i <= maxLengthArray; i++) {   
        flag = 1;
        for (let j = 2; (j <= i / 2) && (flag==1); j++) {
            if (i % j === 0) {
                flag = 0;
                }
            }
        if (flag === 1) {
            results.push(i);
        }    
    }

    return results;
}

const getResult = () => {
    const userRange = getUserRange();
    return (userRange !== -1) ? makeArray(userRange) : 'Arg incorrect';
}

console.time();
console.log(getResult());
console.timeEnd();