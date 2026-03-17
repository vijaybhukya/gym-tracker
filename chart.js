const ctx = document.getElementById('chart');

let history = JSON.parse(localStorage.getItem("history")) || [];

let labels = history.map(h => h.date);
let benchData = history.map(h => h.data["Bench Press"] || 0);

new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Bench Press Progress',
      data: benchData,
      borderWidth: 2
    }]
  }
});
