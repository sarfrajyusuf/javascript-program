const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(2, 4, 6));

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphns wins ${avgDolphins} vs ${avgKoalas}`)
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`kolas wins ${avgKoalas} vs ${avgDolphins}`)
    }

    else {
        console.log('no teams wins...')
    }

}


checkWinner(scoreDolphins, scoreKoalas)
checkWinner(576, 111)


//TEST 2

// scoreDolphins = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(23, 34, 27)

// checkWinner(scoreDolphins, scoreKoalas)

