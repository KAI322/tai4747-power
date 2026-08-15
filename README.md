# 台電職員電機｜歷屆試題詳解刷題網站（GitHub Pages 版）

這是可直接部署到 GitHub Pages 的純前端版本，不需要 Node.js、資料庫或伺服器。

## 功能

- 108～114 年科目 A 題庫，共 350 題
- 108～112 年題目依題本內答案標記提供自動判分
- 年度、主題、作答狀態與關鍵字篩選
- 隨機刷題
- 錯題與收藏
- localStorage 保存個人作答進度
- 手機／桌面自適應

## 公開版差異

本版本不附原始歷屆試題 PDF，以降低公開 repository 夾帶整份試卷檔案的需求。
部分題目在原卷含電路圖、波形或示意圖，純文字題庫可能無法完整呈現，請搭配合法取得的原始試題閱讀。

## GitHub Pages 部署

1. 建立一個新的 GitHub repository，例如 `taipower-exam-quiz`。
2. 將本資料夾內所有檔案上傳到 repository 根目錄。
3. 到 `Settings` → `Pages`。
4. `Source` 選擇 `Deploy from a branch`。
5. Branch 選 `main`，Folder 選 `/ (root)`。
6. 儲存後即可由 GitHub Pages 網址開啟。

典型網址：

```text
https://YOUR-USERNAME.github.io/taipower-exam-quiz/
```

## 檔案結構

```text
.
├── index.html
├── style.css
├── app.js
├── data.js
├── .nojekyll
├── 404.html
└── README.md
```

## 題庫資料

題庫位於 `data.js`，前端程式位於 `app.js`。如果之後取得 113、114 年核對過的正式答案，可直接補進題庫資料結構，不需要改網站架構。
