// 收樓王 EvictKing - 全站共用 Header 與 Footer 元件（模組化同步版）
// 日後若需修改導覽列順序、聯絡資料或頁尾文章連結，只需在此檔案修改一次，全站即刻同步生效！

(function() {
  // 自動判斷目前是否在首頁 index.html，以決定錨點連結格式
  const isHomePage = Boolean(document.getElementById('calculator') || document.getElementById('evictForm'));
  const prefix = isHomePage ? '' : 'index.html';

  // =========================================================================
  // 🧩 導覽列順序控制台 (NAV_ITEMS)
  // 日後如果你在 index.html 調動了區塊順序，只需將下方對應的一行「剪下、貼上」改變順序，
  // 電腦版頂部導覽列 與 手機版下拉選單 就會 100% 自動同步更新！
  // =========================================================================
  const NAV_ITEMS = [
    { id: 'calculator',    desktop: '止蝕試算',   mobile: '🧮 智能收樓止蝕試算 2.0', isHighlight: false },
    { id: 'pain-points',   desktop: '物業痛點',   mobile: '🏠 5大物業類型專屬方案', isHighlight: false },
    { id: 'market-data',   desktop: '法庭數據',   mobile: '📊 法庭數據洞察', isHighlight: false },
    { id: 'comparison',    desktop: '自辦vs代辦', mobile: '⚖️ 自辦延誤 (6-9個月) vs 專業代辦', isHighlight: false },
    { id: 'process',       desktop: '5大步驟',    mobile: '🛡️ 5大保密收樓步驟', isHighlight: false },
    { id: 'cases',         desktop: '實戰案例',   mobile: '📂 業主見證與實戰案例庫', isHighlight: false },
    { id: 'post-eviction', desktop: '翻新放盤',   mobile: '🔨 收樓後翻新・清潔・放盤一條龍', isHighlight: false },
    { id: 'pricing',       desktop: '分段收費',   mobile: '💎 透明分段收費', isHighlight: false },
    { id: 'knowledge-hub', desktop: '急救專欄',   mobile: '📚 業主收樓急救專欄 (5大攻略)', isHighlight: true }
  ];

  const desktopNavLinks = NAV_ITEMS.map(function(item) {
    if (item.isHighlight) {
      return '<a href="' + prefix + '#' + item.id + '" class="text-amber-700 hover:text-navy-900 transition py-1 flex items-center gap-1"><i class="fa-solid fa-book-open text-xs"></i>' + item.desktop + '</a>';
    }
    return '<a href="' + prefix + '#' + item.id + '" class="hover:text-navy-900 transition py-1">' + item.desktop + '</a>';
  }).join('\n        ');

  const mobileNavLinks = NAV_ITEMS.map(function(item) {
    if (item.isHighlight) {
      return '<a href="' + prefix + '#' + item.id + '" class="mobile-link block px-3 py-2.5 rounded-lg text-base font-bold text-amber-700 bg-amber-50/70 hover:bg-amber-100/70">' + item.mobile + '</a>';
    }
    return '<a href="' + prefix + '#' + item.id + '" class="mobile-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50">' + item.mobile + '</a>';
  }).join('\n      ');

  // 1. 頂部深藍信任條 ＋ 白底單行導覽列 ＋ 手機版選單
  const HEADER_HTML = `
  <!-- Top Trust Notification Bar -->
  <div class="bg-navy-950 text-slate-300 text-xs py-2.5 px-4 border-b border-white/10">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4 whitespace-nowrap overflow-x-auto no-scrollbar">
      <div class="flex items-center gap-2 shrink-0">
        <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-gold-500/20 text-gold-400 border border-gold-500/30">
          香港業主專線
        </span>
        <span class="text-xs sm:text-sm">專辦香港住宅、村屋及工商舖法定追租、收樓及單位翻新還原</span>
      </div>
      <div class="hidden lg:flex items-center gap-5 text-xs text-slate-400 shrink-0">
        <span><i class="fa-solid fa-shield-halved text-gold-400 mr-1.5"></i>100% 遵循香港法例</span>
        <span><i class="fa-solid fa-bolt text-gold-400 mr-1.5"></i>最快 24 小時內啟動開案</span>
        <span><i class="fa-brands fa-whatsapp text-emerald-400 mr-1.5"></i>全程 WhatsApp 專人跟進（免來電滋擾）</span>
      </div>
    </div>
  </div>

  <!-- Sticky Navigation Header (Guaranteed Single-Line Layout) -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
      
      <!-- Brand Logo -->
      <a href="${prefix}#top" class="flex items-center gap-3 group shrink-0 whitespace-nowrap">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 flex items-center justify-center border border-gold-500/50 shadow-md group-hover:border-gold-400 transition shrink-0">
          <svg class="w-6 h-6 text-gold-400" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 23L3 10L10.5 15L16 6L21.5 15L29 10L27 23H5Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" fill="rgba(197, 160, 89, 0.18)"/>
            <path d="M4 27H28" stroke="#DFB76C" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="16" cy="6" r="1.5" fill="#F0D59C"/>
            <circle cx="3" cy="10" r="1.3" fill="#F0D59C"/>
            <circle cx="29" cy="10" r="1.3" fill="#F0D59C"/>
          </svg>
        </div>
        <div class="whitespace-nowrap">
          <div class="flex items-center gap-1.5">
            <span class="text-xl sm:text-2xl font-black tracking-tight text-navy-900 leading-none">收樓王</span>
            <span class="text-[11px] font-extrabold tracking-widest uppercase px-1.5 py-0.5 rounded bg-navy-900 text-gold-400 border border-gold-500/40 leading-none">EVICTKING</span>
          </div>
          <p class="text-[11px] text-slate-500 font-semibold tracking-wide mt-1 leading-none">香港專業追租・法定收樓顧問</p>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden xl:flex items-center gap-3.5 2xl:gap-5 text-[13px] font-bold text-slate-700 whitespace-nowrap shrink-0">
        ${desktopNavLinks}
      </nav>

      <!-- Desktop CTA Buttons -->
      <div class="hidden md:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
        <a href="${prefix}#assessment" class="whitespace-nowrap px-3.5 py-2.5 rounded-xl text-xs lg:text-sm font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 transition">
          免費評估表單
        </a>
        <a href="https://wa.me/85244962400" data-wa-text="你好，我想查詢【收樓王 EvictKing】免費初步個案評估" target="_blank" rel="noopener" class="wa-track-btn dynamic-wa-link whitespace-nowrap inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs lg:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition">
          <i class="fa-brands fa-whatsapp text-base lg:text-lg"></i>
          <span>WhatsApp 即時諮詢</span>
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobileMenuBtn" class="xl:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none shrink-0" aria-label="開啟選單">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div id="mobileMenu" class="hidden xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
      ${mobileNavLinks}
      <a href="${prefix}#faq" class="mobile-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50">❓ 業主常見問題</a>
      <div class="pt-2">
        <a href="${prefix}#assessment" class="mobile-link block w-full text-center py-3 rounded-xl font-bold bg-navy-900 text-gold-400">
          填寫 30 秒個案評估表
        </a>
      </div>
    </div>
  </header>
  `;

  // 2. 12 格深藍頁尾（保留 id="footerPhoneDisplay" 連動）
  const FOOTER_HTML = `
  <footer class="bg-navy-950 text-slate-400 py-12 border-t border-white/10 relative z-10" id="footer">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- 上半部：品牌聯絡資訊 ＋ 5篇 SEO 專欄文章 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-2">
        
        <!-- 左側：品牌 Logo 與聯絡我們（佔 5 格） -->
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center border border-gold-500/40 shrink-0">
              <svg class="w-6 h-6 text-gold-400" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 23L3 10L10.5 15L16 6L21.5 15L29 10L27 23H5Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" fill="rgba(197, 160, 89, 0.18)"/>
                <path d="M4 27H28" stroke="#DFB76C" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <span class="text-white font-black text-lg">收樓王 EvictKing</span>
              <p class="text-xs text-slate-500">香港業主專業追租・收樓及單位翻新顧問</p>
            </div>
          </div>

          <!-- 聯絡資料列表 -->
          <ul class="space-y-2.5 text-xs text-slate-400 pt-1">
            <li class="flex items-start gap-2.5">
              <span class="text-gold-400 shrink-0 mt-0.5">📍</span>
              <span>辦事處地址：香港中環皇后大道中 99 號中環中心 28 樓 2808 室（預約制）</span>
            </li>
            <li class="flex items-center gap-2.5">
              <span class="text-gold-400 shrink-0">📱</span>
              <span>24小時收樓專線 / WhatsApp：<strong class="text-white"><span id="footerPhoneDisplay">+852 4496 2400</span></strong></span>
            </li>
            <li class="flex items-center gap-2.5">
              <span class="text-gold-400 shrink-0">✉️</span>
              <span>客戶服務電郵：info@evictking.hk</span>
            </li>
            <li class="flex items-center gap-2.5">
              <span class="text-gold-400 shrink-0">🕒</span>
              <span>辦公時間：星期一至六 09:30 - 19:30（緊急租霸諮詢 WhatsApp 全天候支援）</span>
            </li>
          </ul>
        </div>

        <!-- 右側：SEO 專欄文章與案例庫（佔 7 格，供 Google 爬蟲抓取） -->
        <div class="lg:col-span-7 lg:pl-8 lg:border-l lg:border-white/10 flex flex-col justify-between">
          <div>
            <h4 class="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-gold-400 rounded-full inline-block"></span>
              業主收樓實戰指南與案例庫
            </h4>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs text-slate-400">
              <li>
                <a href="blog-illegal-eviction.html" class="hover:text-gold-400 transition-colors flex items-start gap-1.5">
                  <span class="text-gold-400/70 shrink-0">01.</span>
                  <span>遇上無賴租霸，自行斷水斷電換鎖隨時被告入獄？</span>
                </a>
              </li>
              <li>
                <a href="blog-unstamped-tenancy.html" class="hover:text-gold-400 transition-colors flex items-start gap-1.5">
                  <span class="text-gold-400/70 shrink-0">02.</span>
                  <span>租約無打釐印、漏交 CR109 就不能追租？一招拆解退件危機</span>
                </a>
              </li>
              <li>
                <a href="blog-commercial-eviction.html" class="hover:text-gold-400 transition-colors flex items-start gap-1.5">
                  <span class="text-gold-400/70 shrink-0">03.</span>
                  <span>地舖租客失聯兼欠租？拆解「有限公司」收舖雙線送達秘訣</span>
                </a>
              </li>
              <li>
                <a href="blog-village-house.html" class="hover:text-gold-400 transition-colors flex items-start gap-1.5">
                  <span class="text-gold-400/70 shrink-0">04.</span>
                  <span>新界村屋收樓陷阱：自己貼通知被法庭判無效？</span>
                </a>
              </li>
              <li class="sm:col-span-2">
                <a href="blog-post-eviction.html" class="hover:text-gold-400 transition-colors flex items-start gap-1.5">
                  <span class="text-gold-400/70 shrink-0">05.</span>
                  <span>執達吏破門收樓後，租客留下一屋垃圾及欠款可以點處理？</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- 下半部：免責聲明與版權宣告 -->
      <div class="pt-6 border-t border-white/10 text-[11px] text-slate-500 leading-relaxed space-y-2">
        <p class="text-slate-400">
          *註：實際收樓時間須視乎司法機構及執法部門排期、文件齊備度及租客有否提出抗辯等因素而定，上述數據僅供一般參考。
        </p>
        <p>
          <strong>重要免責聲明及條款說明：</strong>本網站所載之所有內容、統計數據、案例分享、試算器結果及預計收樓時間線（包括但不限於各階段天數、週數及自辦對比數據）僅供一般資訊及市場參考之用，並不構成任何形式之時間保證、結果承諾或合約條款。每宗租務及收樓個案之實際處理時間，均受制於相關司法機構（如土地審裁處）、稅務部門及執法部門（如執達主任辦事處）當時之案件輪候量、排期進度、業主提供文件之完整性，以及租客或佔用人有否提出反對、抗辯或延期申請等客觀因素影響。
        </p>
        <p>
          本公司提供專業租務行政事務代辦、文件預審及收樓程序顧問服務，並非律師事務所，亦不提供正式法律意見。如個案涉及複雜法律抗辯或訴訟爭議，我們會協助轉介合作之香港執業律師跟進。
        </p>
        <div class="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500">
          <span>© 2026 收樓王 EvictKing. All Rights Reserved. 香港專業租務行政及收樓顧問服務</span>
          <div class="flex items-center gap-3">
            <a href="privacy-policy.html" class="hover:text-gold-400 transition-colors">私隱政策 (Privacy Policy)</a>
            <span class="text-white/20">|</span>
            <a href="terms.html" class="hover:text-gold-400 transition-colors">服務條款 (Terms of Service)</a>
          </div>
        </div>
      </div>

    </div>
  </footer>
  `;

  // 使用 outerHTML 直接替換佔位標籤，確保 sticky top-0 完美運作
  const headerContainer = document.getElementById('site-header');
  if (headerContainer) {
    headerContainer.outerHTML = HEADER_HTML;
  }

  const footerContainer = document.getElementById('site-footer');
  if (footerContainer) {
    footerContainer.outerHTML = FOOTER_HTML;
  }

  // 自動注入缺失的 HEAD 標籤 (Favicon, FontAwesome, Google Fonts)
  const head = document.head;
  if (!document.querySelector('link[rel="icon"]')) {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230B192C'/%3E%3Cpath d='M12 46h40l4-22-14 8-10-16-10 16-14-8 4 22z' fill='%23C5A059'/%3E%3Crect x='12' y='50' width='40' height='4' rx='2' fill='%23DFB76C'/%3E%3C/svg%3E";
    head.appendChild(favicon);
  }
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    head.appendChild(fa);
  }
  if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;500;600;700;900&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap';
    head.appendChild(fonts);
  }

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
})();