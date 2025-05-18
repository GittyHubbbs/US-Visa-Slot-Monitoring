document.getElementById("start").addEventListener("click", () => {
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  chrome.runtime.sendMessage({ action: "startMonitoring", month, year });
});

document.getElementById("stop").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stopMonitoring" });
});

function updateStatus() {
  chrome.runtime.sendMessage({ action: "getStatus" }, (response) => {
    if (!response) return;
    document.getElementById("monitoringStatus").textContent = response.monitoring ? "Running" : "Stopped";
    document.getElementById("currentMonth").textContent = response.month || "N/A";
    document.getElementById("currentYear").textContent = response.year || "N/A";
    document.getElementById("checkCount").textContent = response.checks || 0;
  });
}

setInterval(updateStatus, 1000);
updateStatus();
