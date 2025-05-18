let monitoring = false;
let month = null;
let year = null;
let checkCount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startMonitoring") {
    monitoring = true;
    month = message.month;
    year = message.year;
    checkCount = 0;

    // Clear existing alarm
    chrome.alarms.clear("monitorCheck", () => {
      chrome.alarms.create("monitorCheck", { periodInMinutes: 0.1 }); // Every 6 seconds
    });

    sendResponse({ status: "started" });

  } else if (message.action === "stopMonitoring") {
    monitoring = false;
    chrome.alarms.clear("monitorCheck");
    sendResponse({ status: "stopped" });

  } else if (message.action === "getStatus") {
    sendResponse({
      monitoring,
      month,
      year,
      checks: checkCount
    });
    return true;
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "monitorCheck" && monitoring) {
    checkCount++;
    console.log(`Alarm Check #${checkCount} for ${month} ${year}`);
    // 🔍 Your slot-checking logic would go here
  }
});
chrome.notifications.create({
  type: "basic",
  iconUrl: "icon.png",  // Optional: Add this to your folder or use a default one
  title: "Visa Slot Available",
  message: `A slot is available for ${month} ${year} — check now!`,
  priority: 2
});
