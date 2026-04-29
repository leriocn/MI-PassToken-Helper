# Mi PassToken Helper

A simple, secure, and open-source browser extension designed to help users quickly and easily obtain their `userId` and `passToken` from the official Xiaomi account website (`account.xiaomi.com`). This is useful for `mi-gpt` and other third-party applications that require these credentials.

**English** | [中文](./README.md)

---

## ✨ Core Features

*   **One-Click Check**: Automatically detects your login status on the Xiaomi account website.
*   **Active Fetch**: If you are already logged in, the extension directly reads and displays your `userId` and `passToken` without any extra steps.
*   **Login Guidance**: If you are not logged in, the extension provides a convenient button to take you to the official login page.
*   **One-Click Copy**: Provides separate "Copy" buttons for `userId` and `passToken` for easy use.
*   **`.mi.json` Generation**: Generates and downloads the `.mi.json` configuration file required by older versions of `mi-gpt` with a single click.
*   **Secure & Reliable**:
    *   **Open Source**: All code is open-source for you to review.
    *   **Minimum Permissions**: Only requests the minimum necessary permissions for `cookies` and `tabs` on the `xiaomi.com` domain.
    *   **Purely Local**: All credential fetching and processing happens locally within your browser. No data is sent to any third-party servers.


## 🚀 Installation Guide

We recommend installing the extension via Developer Mode, which is a very simple process.

### Install via Developer Mode (Recommended)

1.  **Download the Extension**
    *   Click the **Code** button in the upper-right corner of this page, then select **Download ZIP**.
    *   Alternatively, if you have Git installed, you can run `git clone https://github.com/your-username/migpt-browser-extension.git`.

2.  **Unzip the File**
    *   Unzip the downloaded `migpt-browser-extension-main.zip` file to a **permanent location** on your computer that you will not delete (e.g., `D:\MyExtensions\migpt-helper`).

3.  **Load the Extension into Your Browser**
    *   Open your **Chrome** or **Edge** browser.
    *   Navigate to `chrome://extensions` (for Chrome) or `edge://extensions` (for Edge) in the address bar.
    *   On the extensions page, ensure that the "**Developer mode**" toggle in the top-right corner is **turned on**.
    *   Click the "**Load unpacked**" button that appears on the top-left.
    *   In the file selection window, select the **entire folder** that you unzipped in Step 2 (e.g., `migpt-helper` or `migpt-browser-extension-main`).

4.  **Done!**
    *   You should now see the "Mi PassToken Helper" in your list of extensions. We recommend clicking the **pin icon** next to it to keep it visible on your toolbar for quick access.

## 📖 How to Use

1.  **Log in to Xiaomi Account**
    *   In your browser, visit and log in to [https://account.xiaomi.com](https://account.xiaomi.com) as you normally would.

2.  **Get Credentials**
    *   After logging in successfully, click the "**Mi PassToken Helper**" icon on your browser's toolbar.
    *   The extension will automatically detect your login status and display your `userId` and `passToken`.
    *   Click the "Copy" button next to each field to use them in other applications.

3.  **(Optional) Generate `.mi.json` File**
    *   If your application requires a `.mi.json` configuration file, simply click the "**Generate mi.json File**" button in the extension popup after getting the credentials.
    *   The browser will immediately download a file named `mi.json`.
    *   **Important**: After downloading, you must **manually** rename the file from `mi.json` to **`.mi.json`** (add a dot at the beginning of the filename).

## 🔗 Related Links

*   **[Cyber AI Life (Blog)](https://cyber.lerio.cn)** - Explore more interesting articles about AI and daily life.
*   **[Cyber AI Life (Douyin/TikTok)](https://v.douyin.com/UOaKk_3iO6E/)** - Watch more fun and practical AI application videos.
*   **[Mi Speaker AI Platform](https://migpt.lerio.cn)** - The perfect companion for this extension! A zero-config SaaS platform to connect your Mi Speaker to powerful AI large language models.

## 🤝 Contributing

Pull requests and issues are welcome to help improve this project.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
