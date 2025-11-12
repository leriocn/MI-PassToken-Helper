// popup.js
const statusArea = document.getElementById('status-area');
const resultArea = document.getElementById('result-area');
const mainActionBtn = document.getElementById('main-action-btn');
const generateJsonBtn = document.getElementById('generateJsonBtn'); // <-- 【新增】
const userIdInput = document.getElementById('userId');
const passTokenInput = document.getElementById('passToken');
const copyUserIdBtn = document.getElementById('copyUserId');
const copyPassTokenBtn = document.getElementById('copyPassToken');

const XIAOMI_URL = "https://account.xiaomi.com/";

function showStatus(message, type = 'info') {
  statusArea.innerHTML = `<div class="status ${type}">${message}</div>`;
}

async function checkLoginStatus() {
  mainActionBtn.textContent = '检测中...';
  mainActionBtn.disabled = true;
  generateJsonBtn.style.display = 'none'; // 隐藏生成按钮

  try {
    const passTokenCookie = await browser.cookies.get({ url: XIAOMI_URL, name: "passToken" });
    const userIdCookie = await browser.cookies.get({ url: XIAOMI_URL, name: "userId" });

    if (passTokenCookie && userIdCookie) {
      showStatus('检测到有效的登录凭证！', 'success');
      resultArea.style.display = 'block';
      generateJsonBtn.style.display = 'block'; // <-- 【修改】: 显示生成按钮
      mainActionBtn.textContent = '重新获取';
      mainActionBtn.disabled = false;
      userIdInput.value = userIdCookie.value;
      passTokenInput.value = passTokenCookie.value;
    } else {
      showStatus('请先登录小米账号。', 'error');
      resultArea.style.display = 'none';
      mainActionBtn.textContent = '打开小米官网登录';
      mainActionBtn.disabled = false;
    }
  } catch (error) {
    showStatus(`检测失败: ${error.message}`, 'error');
    mainActionBtn.textContent = '重试';
    mainActionBtn.disabled = false;
  }
}

mainActionBtn.addEventListener('click', async () => {
  const [currentTab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (currentTab && currentTab.url.startsWith(XIAOMI_URL)) {
    checkLoginStatus();
  } else {
    browser.tabs.create({ url: XIAOMI_URL, active: true });
  }
});

copyUserIdBtn.addEventListener('click', () => { /* ... (保持不变) ... */ });
copyPassTokenBtn.addEventListener('click', () => { /* ... (保持不变) ... */ });

// --- 【核心修正】 START: 优化下载流程 ---
generateJsonBtn.addEventListener('click', () => {
    const passToken = passTokenInput.value;
    if (!passToken) { /* ... */ return; }

    const jsonContent = { /* ... */ };
    const blob = new Blob([JSON.stringify(jsonContent, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // --- 1. 使用一个“安全”的文件名 ---
    const safeFilename = 'mi.json';

    browser.downloads.download({
        url: url,
        filename: safeFilename, // <-- 修改
        saveAs: true
    }).then(() => {
        // --- 2. 下载成功后，给出重命名提示 ---
        showStatus('文件已下载！<br><strong>重要：</strong>请手动将 <code>mi.json</code> 重命名为 <code>.mi.json</code> (在文件名前加一个点)。', 'success');
    }).catch(() => {
        // 备用下载方法
        const a = document.createElement('a');
        a.href = url;
        a.download = safeFilename; // <-- 修改
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showStatus('文件已开始下载！<br><strong>重要：</strong>请手动将 <code>mi.json</code> 重命名为 <code>.mi.json</code>。', 'success');
    });
});
// --- 【核心修正】 END --

document.addEventListener('DOMContentLoaded', checkLoginStatus);

// --- 【新增】: 获取新链接的DOM引用 ---
const linkBlog = document.getElementById('link-blog');
const linkDouyin = document.getElementById('link-douyin');
const linkPlatform = document.getElementById('link-platform');

// --- 【新增】 START: 为链接添加安全的点击事件 ---
function openLink(url) {
    browser.tabs.create({ url: url, active: true });
}

linkBlog.addEventListener('click', (e) => {
    e.preventDefault();
    openLink('https://cyber.lerio.cn');
});

linkDouyin.addEventListener('click', (e) => {
    e.preventDefault();
    openLink('https://v.douyin.com/UOaKk_3iO6E/');
});

linkPlatform.addEventListener('click', (e) => {
    e.preventDefault();
    openLink('https://migpt.lerio.cn');
});

