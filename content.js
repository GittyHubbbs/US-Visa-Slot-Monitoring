chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "slotAvailable") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Visa Slot Available!",
      message: "A visa slot is available for your selected month and year!"
    });

    fetch("http://localhost:3000/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ to: "your-email@gmail.com" })
    });
  }
});
