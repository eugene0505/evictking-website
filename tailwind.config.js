/** 收樓王 EvictKing — Tailwind 設定
 *  由原本 8 個頁面的 inline tailwind.config 合併而成（取 superset）：
 *   - navy: index 有 700，其餘頁只有 800/900/950
 *   - fontFamily.sans: index 版本含 -apple-system / BlinkMacSystemFont 回退
 *  content 只列正式上線頁面，刻意排除 舊*.html 備份（避免 CSS 膨脹）。
 */
module.exports = {
  content: [
    "./index.html",
    "./blog-unstamped-tenancy.html",
    "./blog-illegal-eviction.html",
    "./blog-village-house.html",
    "./blog-commercial-eviction.html",
    "./blog-post-eviction.html",
    "./privacy-policy.html",
    "./terms.html",
    "./404.html",
    "./components.js"
  ],
  // JS 以 classList.toggle() 動態切換的 class，確保不會被 Purge 誤刪
  safelist: ["hidden", "rotate-180", "translate-y-full"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#07111E", 900: "#0B192C", 800: "#132642", 700: "#1B365D" },
        gold: { 600: "#A68038", 500: "#C5A059", 400: "#DFB76C", 300: "#F0D59C", 100: "#FBF6EB" }
      },
      fontFamily: {
        sans: ['"Noto Sans HK"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ['"Plus Jakarta Sans"', '"Noto Sans HK"', "sans-serif"]
      }
    }
  }
};
