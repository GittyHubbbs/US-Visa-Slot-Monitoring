# US Visa Slot Monitoring - Chrome Extension

This Chrome extension helps users monitor the availability of US visa appointment slots on [usvisascheduling.com](https://www.usvisascheduling.com/). It sends a desktop notification as soon as an appointment slot becomes available based on your selected month and year.

## 🔍 Features

- Allows **manual login** for better bot protection compliance
- Monitors available **visa appointment slots**
- Sends **Chrome desktop notifications** when a slot is found
- Supports **email notifications** (Yahoo & others)
- Lets users select **specific month and year** for monitoring
- Shows **status and count** of monitoring checks
- Designed to run **in the background** as long as the browser tab stays active

## 🧠 How It Works

1. You log in manually to [usvisascheduling.com](https://www.usvisascheduling.com/)
2. After login, you open the extension popup and start monitoring
3. The extension checks the appointment page repeatedly
4. If an available slot is found, it notifies you on-screen and via email
5. (Optional) You can respond to the email to auto-confirm the slot *(feature under development)*

## 🚀 Installation

1. Clone or download this repository

    ```bash
    git clone https://github.com/GittyHubbbs/US-Visa-Slot-Monitoring.git
    ```

2. Open `chrome://extensions` in your Chrome browser
3. Enable **Developer mode** (top right)
4. Click **"Load unpacked"** and select the folder containing the extension
5. The extension should now appear in your Chrome toolbar

## 🛠 Configuration

### ✅ Before Monitoring

1. Log in manually to your account on [usvisascheduling.com](https://www.usvisascheduling.com/)
2. Open the extension popup
3. Choose your desired **Month** and **Year**
4. Click **"Start Monitoring"**

### 📧 Enable Email Notifications

1. Open `popup.js` and configure the Yahoo email SMTP settings and your target email address
2. Save and reload the extension
3. Make sure Chrome notifications are enabled on your device

> For email functionality, a backend or external service (like a webhook or Firebase Function) is typically used. This feature is under active enhancement.

## 📦 Project Structure

