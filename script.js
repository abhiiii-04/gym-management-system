document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cardio', 'Fitness', 'Sauna'],
            datasets: [{
                label: 'Total',
                data: [6, 9, 2],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const earningsBar = document.getElementById('earnings-bar');
    const expensesBar = document.getElementById('expenses-bar');

    // Set the bar width based on data
    const earningsValue = 280; // Replace with your data value
    const expensesValue = 800; // Replace with your data value

    earningsBar.style.width = `${earningsValue}px`;
    expensesBar.style.width = `${expensesValue}px`;
});


document.addEventListener('DOMContentLoaded', function() {
    // Gender Distribution Chart
    const genderCtx = document.getElementById('genderChart').getContext('2d');
    new Chart(genderCtx, {
        type: 'pie',
        data: {
            labels: ['Female', 'Male'],
            datasets: [{
                label: 'Registered Members by Gender',
                data: [50, 50], // Example data, replace with actual values
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + ' members';
                        }
                    }
                }
            }
        }
    });

    // Staff Designation Chart
    const designationCtx = document.getElementById('designationChart').getContext('2d');
    new Chart(designationCtx, {
        type: 'pie',
        data: {
            labels: ['Cashier', 'Trainer'],
            datasets: [{
                label: 'Staff Members by Designation',
                data: [3, 5], // Example data, replace with actual values
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + ' members';
                        }
                    }
                }
            }
        }
    });
});
