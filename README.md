# 小米 passToken 获取助手 (Mi PassToken Helper)

这是一个简单、安全、开源的浏览器插件，旨在帮助用户快速、方便地从小米官网 (`account.xiaomi.com`) 获取 `userId` 和 `passToken`，以用于 `mi-gpt` 及其他需要此凭证的第三方应用。

[English](./README.en.md) | **中文**

---

## ✨ 核心功能

*   **一键检测**: 自动检测您在小米官网的登录状态。
*   **主动获取**: 如果您已登录，插件会直接读取并显示您的 `userId` 和 `passToken`，无需任何额外操作。
*   **引导登录**: 如果您未登录，插件会提供一个快捷按钮，引导您前往官方登录页面。
*   **一键复制**: 为 `userId` 和 `passToken` 提供单独的“复制”按钮，方便使用。
*   **`.mi.json` 生成**: 能够根据获取到的 `passToken`，一键生成并下载旧版 `mi-gpt` 所需的 `.mi.json` 配置文件。
*   **安全可靠**:
    *   **开源透明**: 所有代码均开源，您可以自行审查。
    *   **权限最小化**: 仅请求访问 `xiaomi.com` 域下 `cookies` 和 `tabs` 的最小必要权限。
    *   **纯本地操作**: 所有凭证的获取和处理都在您的浏览器本地完成，不经过任何第三方服务器。

## 🚀 安装指南

我们推荐通过开发者模式进行安装，过程非常简单。

### 通过开发者模式安装 (推荐)

1.  **下载插件**
    *   点击本页面右上角的 **Code** 按钮，然后选择 **Download ZIP**。
    *   或者，如果您安装了 Git，可以运行 `git clone https://github.com/your-username/migpt-browser-extension.git`。

2.  **解压文件**
    *   将下载的 `migpt-browser-extension-main.zip` 文件解压到一个**您不会删除**的永久位置（例如：`D:\MyExtensions\migpt-helper`）。

3.  **加载插件到浏览器**
    *   打开您的 **Chrome** 或 **Edge** 浏览器。
    *   在地址栏输入 `chrome://extensions` (Chrome) 或 `edge://extensions` (Edge) 并回车。
    *   在打开的扩展程序页面中，确保右上角的“**开发者模式**”开关是**打开**的。
    *   点击左上角的“**加载已解压的扩展程序**”按钮。
    *   在弹出的文件选择窗口中，选择您在第2步中**解压好的整个文件夹** (`migpt-helper` 或 `migpt-browser-extension-main`)。

4.  **完成！**
    *   您现在应该可以在浏览器的扩展程序列表中看到“小米 passToken 获取助手”了。建议点击它旁边的**图钉图标**，将其固定在工具栏上以便快速访问。

## 📖 使用方法

1.  **登录小米官网**
    *   在浏览器中正常访问并登录 [https://account.xiaomi.com](https://account.xiaomi.com)。

2.  **获取凭证**
    *   登录成功后，点击浏览器工具栏上的“**小米 passToken 获取助手**”图标。
    *   插件会自动检测您的登录状态，并显示您的 `userId` 和 `passToken`。
    *   点击相应字段旁的“**复制**”按钮，即可将其用于其他应用。

3.  **(可选) 生成 `.mi.json` 文件**
    *   如果您的应用需要 `.mi.json` 配置文件，只需在获取到凭证后，点击插件下方的“**生成 mi.json 文件**”按钮。
    *   浏览器会立即下载一个名为 `mi.json` 的文件。
    *   **重要**: 下载后，请**手动**将文件名从 `mi.json` 修改为 **`.mi.json`** (在文件名前加一个点)。

## 🔗 相关链接

*   **[赛博AI生活局 (博客)](https://cyber.lerio.cn)** - 探索更多关于AI与生活的有趣文章。
*   **[赛博AI生活局 (抖音)](https://v.douyin.com/UOaKk_3iO6E/)** - 观看更多好玩、实用的AI应用视频。
*   **[小米音箱AI接入平台](https://migpt.lerio.cn)** - 本插件的最佳搭档！一个无需服务器、零配置，即可将您的小爱音箱接入AI大模型的SaaS平台。

## 🤝 贡献

欢迎提交 Pull Requests 或 Issues 来帮助改进这个项目。

## 📄 许可证

本项目采用 [MIT License](./LICENSE)。
