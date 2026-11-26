// 收樓王 EvictKing - 全站互動腳本
// Header 與 Footer 已於 2026-11-26（batch-3）靜態化直接寫入各頁 HTML，
// 此檔只保留互動功能：手機版選單、WhatsApp 連結、Cookie 同意橫幅。

(function() {
  // 首頁的導航與 WhatsApp 由 index.html 內嵌腳本處理；內頁才由此檔綁定
  const isHomePage = Boolean(document.getElementById('calculator') || document.getElementById('evictForm'));

  // 若在 Blog 內頁，自動綁定手機版漢堡選單與 WhatsApp 連結
  if (!isHomePage) {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
      document.querySelectorAll('.mobile-link').forEach(function(link) {
        link.addEventListener('click', function() {
          mobileMenu.classList.add('hidden');
        });
      });
    }
    const waNum = (window.SITE_CONFIG && window.SITE_CONFIG.whatsappNumber) ? window.SITE_CONFIG.whatsappNumber : '85244962400';
    document.querySelectorAll('.dynamic-wa-link').forEach(function(link) {
      const text = link.getAttribute('data-wa-text') || '你好，我想查詢【收樓王 EvictKing】免費初步個案評估';
      link.href = 'https://wa.me/' + waNum + '?text=' + encodeURIComponent(text);
    });
  }

  // =========================================================================
  // 3. Google Ads 專用 Cookie 同意橫幅 (Consent Mode 準備)
  // =========================================================================
  window.addEventListener('DOMContentLoaded', function() {
    const consentStatus = localStorage.getItem('evictking_cookie_consent');
    if (!consentStatus) {
      const bannerHtml = `
      <div id="cookie-banner" class="fixed bottom-0 sm:bottom-6 sm:left-6 inset-x-0 sm:inset-x-auto z-[100] sm:max-w-sm bg-navy-950/95 backdrop-blur-md border-t sm:border border-gold-500/30 sm:rounded-2xl p-4 sm:p-5 shadow-2xl transform translate-y-full transition-transform duration-500 ease-out">
        <div class="flex items-start gap-3">
          <i class="fa-solid fa-cookie-bite text-gold-400 text-xl mt-0.5 shrink-0"></i>
          <div>
            <h4 class="text-white text-sm font-bold mb-1">我們使用 Cookies</h4>
            <p class="text-[11px] sm:text-xs text-slate-300 leading-relaxed mb-3">
              為提升您的瀏覽體驗及協助精準的廣告投放（如 Google 及 Meta Ads），本網站使用了 Cookies 及相關追蹤技術。繼續瀏覽即表示您同意我們的私隱政策。
            </p>
            <div class="flex items-center gap-3">
              <button id="accept-cookies" class="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold rounded-lg transition-colors cursor-pointer">
                同意及繼續
              </button>
              <a href="/privacy-policy" class="text-[11px] sm:text-xs font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-2">
                查看私隱政策
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
      document.body.insertAdjacentHTML('beforeend', bannerHtml);

      // 延遲滑入動畫 (提升高級感)
      setTimeout(() => {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.remove('translate-y-full');
      }, 800);

      // 點擊同意按鈕
      document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('evictking_cookie_consent', 'accepted');
        const banner = document.getElementById('cookie-banner');
        banner.classList.add('translate-y-full');
        
        // 觸發 Google Consent Mode Update (如 GTM 內有設定)
        if (typeof gtag === 'function') {
          gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
          });
        }
        
        // 隱藏後移除 DOM
        setTimeout(() => {
          if (banner) banner.remove();
        }, 500);
      });
    }
  });

})();
