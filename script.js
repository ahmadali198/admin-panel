// Menu toggle script
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// Sidebar navigation script
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#sidebar-wrapper .list-group a');
    const sections = document.querySelectorAll('.content section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));

            sections.forEach(section => {
                section.classList.remove('active');
            });

            targetSection.classList.add('active');
        });
    });

    // Simulate a click on the first link to display the dashboard initially
    links[0].click();
});

// Chart.js setup
const salesCtx = document.getElementById('salesChart').getContext('2d');
const ordersCtx = document.getElementById('ordersChart').getContext('2d');

const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Sales',
            data: [1200, 1900, 3000, 5000, 2000, 3000, 4000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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

const ordersChart = new Chart(ordersCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Orders',
            data: [20, 30, 50, 70, 40, 60, 80],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
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
