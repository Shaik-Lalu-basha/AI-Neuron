// Simulating EEG Signal Data
let ctx = document.getElementById('eegChart').getContext('2d');
let eegChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: Array.from({ length: 50 }, (_, i) => i),
    datasets: [{
      label: 'EEG Signal',
      borderColor: '#4f46e5',
      borderWidth: 2,
      fill: false,
      data: Array(50).fill(0)
    }]
  },
  options: {
    animation: false
  }
});

// Function to Update EEG Chart with Random Data
setInterval(() => {
  let data = eegChart.data.datasets[0].data;
  data.shift();
  data.push(Math.random() * 100);
  eegChart.update();
}, 500);

// Thought-to-Speech Conversion
function simulateThought(thought) {
  const utterance = new SpeechSynthesisUtterance(thought);
  speechSynthesis.speak(utterance);
}

// Brain Cancer Detection Simulation
function detectCancer() {
  let abnormal = Math.random() > 0.7; // 30% chance of detection
  let message = abnormal ? "⚠️ Abnormal Brainwave Detected! Seek Medical Attention." : "✅ No Abnormalities Detected.";
  document.getElementById('cancerAlert').innerText = message;
}

// Smart Device Control
let deviceStates = {
  Light: false,
  Door: false
};

function controlDevice(device) {
  deviceStates[device] = !deviceStates[device];
  document.getElementById('deviceStatus').innerText = `${device} is now ${deviceStates[device] ? 'ON' : 'OFF'}`;
}


