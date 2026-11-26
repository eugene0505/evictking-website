# 收樓王 EvictKing — 官網原始碼

靜態網站（8 頁），部署於 **Cloudflare Workers Static Assets**。
線上：https://evictking.com｜完整交接文件：`D:\Website\EvictKing-docs\HANDOFF.md`

## 檔案結構

```
index.html                 首頁（FAQ、止蝕計算機、ProfessionalService／FAQPage schema）
blog-*.html                5 篇實戰文章（各含 BlogPosting JSON-LD）
privacy-policy.html        私隱政策
terms.html                 服務條款
404.html                   自訂 404（純 inline CSS，不依賴 Tailwind）
components.js              全站互動腳本（手機選單、Cookie 橫幅、WhatsApp 連結）
assets/tailwind.css        Tailwind 編譯產物（必 commit）
src/input.css              Tailwind 進入點
tailwind.config.js         自訂色／字型／content 掃描清單
wrangler.jsonc             Cloudflare Workers 設定
_headers                   快取與安全標頭
.assetsignore              唔應該公開嘅檔案清單
sitemap.xml / robots.txt
```

## 本地預覽

任何支援 clean URL 嘅靜態 server 都可以：

```bash
npx serve .
# 或
python -m http.server 8000
```

> 唔好直接開 `file://`：`/assets/tailwind.css` 同 `/#anchor` 會失效。

## 改 CSS（最重要）

本專案**唔用 Tailwind CDN**，樣式係預先編譯：

```bash
npm install          # 首次或依賴變更
npm run build:css    # 改完任何 HTML／components.js 之後必跑
```

- **新增未用過的 Tailwind class → 必須重新編譯**，否則該 class 冇樣式。
- `assets/tailwind.css` 係編譯產物，**要同 HTML 一齊 commit**。
- **禁止加回 `cdn.tailwindcss.com`**（第 6 批已移除；Play CDN 唔可以用喺生產環境）。
- 自訂色（`navy-*`／`gold-*`）只可以在 `tailwind.config.js` 加，唔可以硬寫 hex 落 HTML。

## 部署

```bash
git add -A && git commit -m "..." && git push origin main
```

Push 後 Cloudflare Workers（`evictking-website`）自動部署。`wrangler.jsonc` 已設定
`assets.directory: "./"`、`not_found_handling: "404-page"`。

部署後建議驗證：

```bash
curl -s -o /dev/null -w '%{http_code} %{size_download}\n' https://evictking.com/random-xyz   # 404 4836
curl -sI https://evictking.com/assets/tailwind.css | head -3                                 # 200 text/css
curl -s -o /dev/null -w '%{http_code}\n' https://evictking.com/.git/config                   # 404
```

## 安全：唔可以公開嘅檔案

`.assetsignore` 已排除：`.git/`、`wrangler.jsonc`、`.gitignore`、`README.md`、
`package.json`、`package-lock.json`、`tailwind.config.js`、`node_modules/`、`src/`。

**新增任何建置／設定檔，記得同步加入 `.assetsignore`**，否則會連 `.git` 一齊被公開
（2026-11-26 曾發生，已修）。

## 內容規則

- 內部連結、canonical、sitemap 一律**無 `.html`**（Cloudflare clean URL）。
- 每頁必須有：`<title>`、`meta description`、`rel=canonical`、`og:*` 同 `twitter:*`。
- 文章必須有 `BlogPosting` JSON-LD；首頁 `<head>` 的 `FAQPage` schema 要同頁面
  可見 FAQ **逐字一致**（改了其中一邊要同步另一邊）。
- 新增頁面除上述外，要手動複製 header／footer 區塊（`components.js` 已不再注入），
  詳見 `HANDOFF.md` §9。
