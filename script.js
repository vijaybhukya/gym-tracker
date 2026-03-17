const workout = {
  "Bench Press": "",
  "Squat": "",
  "Deadlift": "",
  "Overhead Press": ""
};

function loadWorkout() {
  const container = document.getElementById("workout");
  if (!container) return;

  for (let ex in workout) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <label>${ex}</label>
      <input type="number" id="${ex}" placeholder="kg">
    `;
    container.appendChild(div);
  }
}

function saveData() {
  let entry = {
    date: new Date().toLocaleDateString(),
    data: {}
  };

  for (let ex in workout) {
    entry.data[ex] = document.getElementById(ex).value;
  }

  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(entry);

  localStorage.setItem("history", JSON.stringify(history));
  alert("Saved");
}

loadWorkout();
