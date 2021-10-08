const ciudades = ['Tepic', 'Monterrey', 'Valladolid', 'Guadalajara', 'Mexico', 'Rusia', 'Tijuana'];
const dataChart = {
    labels: ciudades,
    datasets: [{
        label: '° Celsius',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: dataChart,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const getClima = async (cities) => {
    const weathers = [];
    for (let i = 0; i < cities.length; i++) {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=616629f9acdc3b22b8b09553e632e5da`);
        weathers.push((response.data.main.temp - 273).toFixed(2))
    }
    dataChart.datasets[0].data = weathers;
    myChart.update();
}

getClima(ciudades);