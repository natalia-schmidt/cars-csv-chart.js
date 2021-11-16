chartIt();

async function chartIt() {
    const data = await getRandomCarData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.model,
            datasets: [{
                label: 'Random Cars Horsepower Grafic',
                data: data.horsePower,
                fill: true,
                backgroundColor: [
                    'rgba(255,224,230, 1)',
                    'rgba(214,236,251, 1)',
                    'rgba(255,245,221, 1)',
                    'rgba(219,243,243, 1)',
                    'rgba(235,224,255, 1)',
                    'rgba(255,236,217, 1)',
                    'rgba(255,226,246, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 209, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 30
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, values) {
                            return value + "HP";
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 15
                        }
                    }
                }
            }
        }
    });
}

async function getRandomCarData(){
    const response = await fetch('cars-data.csv');
    const data = await response.text();
    const carsArray = [];
    

    const table = data.split('\n').slice(2);

    const getRandomNumber = () => {
        let getRandom = Math.floor((Math.random() * 406) + 0);
        while (getRandom > 406) {getRandom = Math.floor((Math.random() * 406) + 0)}

        return getRandom
    }

    table.forEach(row => {
        const colums = row.split(';');
        carsArray.push(colums)
    })


    const validRandomIndex = []

    while (validRandomIndex.length < 7) {
        let carIndex = getRandomNumber();

        if (validRandomIndex.includes(carIndex)){
            continue
        }

        if (carsArray[carIndex][4] == 0) {
            continue
        }

        validRandomIndex.push(carIndex);
    }

    const validRandomCars = validRandomIndex.map(carIndex => carsArray[carIndex]);

    const model = [validRandomCars[0][0], validRandomCars[1][0], validRandomCars[2][0], validRandomCars[3][0], validRandomCars[4][0], validRandomCars[5][0], validRandomCars[6][0]]
    const horsePower = [validRandomCars[0][4], validRandomCars[1][4], validRandomCars[2][4], validRandomCars[3][4], validRandomCars[4][4], validRandomCars[5][4], validRandomCars[6][4]];

    return{ model, horsePower}
}
