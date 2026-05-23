fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {

            const values = data.map((item) => item.amount);
            const maxValue = Math.max(...values);


            var barWrapper = document.createElement('div');
            barWrapper.classList.add('bar-wrapper');

            var bar = document.createElement('div');

            if (item.amount === maxValue) {
                bar.classList.add('max-bar');
            }            
            bar.style.height = item.amount * 2 + 'px';
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