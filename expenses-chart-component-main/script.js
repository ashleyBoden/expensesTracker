let total = 0;
let numberOfBars = 0;
let chartWidth = document.querySelector('.chart-bars').offsetWidth;

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        const numberOfBars = data.length;
        const values = data.map((item) => item.amount);
        const maxValue = Math.max(...values);

        console.log(chartWidth, numberOfBars, ((chartWidth / numberOfBars) - 10))
        console.log(document.querySelector('.chart-bars').offsetWidth)

        data.forEach(item => {


            total = total + item.amount;
        
            document.getElementById('weekly-total').textContent = '$' + total;

            var barWrapper = document.createElement('div');
            barWrapper.classList.add('bar-wrapper');

            var bar = document.createElement('div');

            if (item.amount === maxValue) {
                bar.classList.add('max-bar');
            }            
            bar.style.height = item.amount * 2 + 'px';
            bar.style.width = ((chartWidth / numberOfBars) - 10) + 'px';
            bar.classList.add('bar');

            var dayLabel = document.createElement('p');
            dayLabel.textContent = item.day;
            dayLabel.classList.add('day-label');

            var amount = document.createElement('p');
            amount.textContent = '$' + item.amount;
            amount.classList.add('amount');

            barWrapper.appendChild(bar);
            barWrapper.appendChild(amount);
            barWrapper.appendChild(dayLabel);
            
            document.querySelector('.chart-bars').appendChild(barWrapper);
        });
    });