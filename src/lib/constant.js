export const TechStackList = Object.freeze([
  { id: 1, name: "React", imageUrl: "icon/react.svg" },
  { id: 2, name: "Next.js", imageUrl: "icon/next-js.svg" },
  { id: 3, name: "Typescript", imageUrl: "icon/typescript.svg" },
  { id: 4, name: "Javascript", imageUrl: "icon/javascript.svg" },
  { id: 5, name: "CSS", imageUrl: "icon/css.svg" },
  { id: 6, name: "Tailwind CSS", imageUrl: "icon/tailwind-css.svg" },
  { id: 7, name: "Git", imageUrl: "icon/git.svg" },
  { id: 8, name: "RainbowKit", imageUrl: "icon/rainbowkit.svg" },
  { id: 9, name: "Three.js", imageUrl: "icon/threejs.svg" },
  { id: 10, name: "Redux", imageUrl: "icon/redux.svg" },
  { id: 11, name: "Zustand", imageUrl: "icon/zustand.svg" },
  { id: 12, name: "ffmpeg.wasm", imageUrl: "icon/ffmpeg-wasm.webp" },
  { id: 13, name: "A-Frame", imageUrl: "icon/a-frame.svg" },
  { id: 14, name: "Framer Motion", imageUrl: "icon/motion.svg" },
]);

export const profileList = Object.freeze([
  {
    id: "Jump_Cross",
    title: "Jump Cross",
    description:
      "一款區塊鏈遊戲，玩家可以擔任關主，高度自由的編輯地圖並發布供所有玩家遊玩，也可單純地擔任一名闖關者，挑戰其他玩家發布的地圖。",
    feature: [
      "Matter.js開發遊戲與編輯器的物理效果",
      "Pixi.js開發地圖物件渲染與動畫效果。",
      "前端框架採用Next。",
      "RainbowKit處理加密錢包連結與智能合約互動。",
    ],
    tech: [
      "Next.js",
      "Zustand",
      "Matter.js",
      "Pixi.js",
      "RainbowKit",
      "WebSocket",
      "Axios",
      "i18n",
      "React-hook-form",
      "zod",
      "Shad-cn",
      "Tailwind",
      "Typescript",
      "Jest",
    ],
    update: [],
    video: [{ type: "video", src: "video/profile/jump-cross/1.webm" }],
    image: [
      { type: "image", src: "image/profile/jump-cross/1.webp" },
      { type: "image", src: "image/profile/jump-cross/2.webp" },
    ],
    url: null,
    github: null,
  },
  {
    id: "water-time",
    title: "Webgl Water Simulation",
    description: "WebGL實作，模擬水流波紋效果。",
    feature: ["模擬水流波紋效果"],
    tech: ["Three.js", "next.js", "Typescript"],
    update: [],
    video: [{ type: "video", src: "video/profile/water-time/1.webm" }],
    image: [],
    url: "https://water-time-jade.vercel.app/",
    github: "https://github.com/TyyyHo/water-time",
  },
  {
    id: "kingcard",
    title: "Kingcard",
    description: "一個金融平台，提供USDT金融卡及匯兌服務。",
    feature: ["即時交易紀錄", "即時匯兌"],
    tech: ["next.js", "Typescript", "Tailwind", "React Hook Form", "Zod"],
    update: [],
    video: [],
    image: [
      { type: "image", src: "image/profile/kingcard/1.webp" },
      // { type: "image", src: "image/profile/kingcard/2.webp" },
    ],
    url: "https://kingcard.vip/",
    github: null,
  },
  {
    id: "matsu-tourism",
    title: "馬祖藝術島-觀光網站",
    description: "馬祖藝術島的觀光網站。",
    feature: [
      "透過Three.js建立馬祖仿真實景，並根據當下天氣變化場景",
      "透過Next.js的SSR優化SEO",
      "串接公開API取得天氣及交通資訊",
      "串接外部團隊已建立的API，取得景點資訊",
      "RWD",
    ],
    tech: ["Next.js", "Zustand", "Three.js", "Tween.js", "Tailwind", "Typescript"],
    update: [],
    video: [],
    image: [
      { type: "image", src: "image/profile/matsu-tourism/1.webp" },
      { type: "image", src: "image/profile/matsu-tourism/2.webp" },
      { type: "image", src: "image/profile/matsu-tourism/3.webp" },
    ],
    url: "https://matsu-tourism.vercel.app/",
    github: null,
  },
  {
    id: "udb",
    title: "Undecember遊戲資料庫",
    description: "惡月十三的資料庫，提供遊戲機制、物品與技能的資料彙整。",
    feature: ["攻略彙整", "技能篩選器", "一鍵切換技能中英文名稱", "RWD"],
    tech: [
      "使用預處理器SASS編輯樣式",
      "採用React Router來進行路由設定",
      "React.lazy對未立即用到的頁面進行JS檔案拆分以及緩讀取，提高初次載入速度",
      "圖片設定lazy loading，提高畫面載入速度",
      "React.helmet優化SEO",
    ],
    update: ["根據使用者回饋新增及修改資料"],
    video: [],
    image: [
      { type: "image", src: "image/profile/udb/1.webp" },
      { type: "image", src: "image/profile/udb/2.webp" },
      { type: "image", src: "image/profile/udb/3.webp" },
    ],
    url: "https://undecemberdb.web.app/",
    github: "https://github.com/TyyyHo/Udb",
  },
  {
    id: "ud-simulator",
    title: "Undecember屬性模擬器",
    description: "惡月十三的屬性加點模擬器。",
    feature: ["模擬遊戲內的設置，使用者可反覆調整自身屬性", "一鍵匯入/匯出，便於分享", "RWD"],
    tech: [
      "使用預處理器SASS編輯樣式",
      "設計一鍵匯入/匯出功能，將核心狀態編寫為字串型態，再透過URI編碼將字串轉為瀏覽器網址列可接收的字元，方便使用者從網址列直接匯入",
      "因背景圖片較大，壓縮後仍可能影響使用者體驗，加入Loading page來優化",
    ],
    update: [
      "根據使用者回饋新增使用說明以及提示標語",
      "根據配置點數時的限制來優化UI，令使用者能一眼明白當前限制",
    ],
    video: [],
    image: [
      { type: "image", src: "image/profile/ud-simulator/1.webp" },
      { type: "image", src: "image/profile/ud-simulator/2.webp" },
      { type: "image", src: "image/profile/ud-simulator/3.webp" },
    ],
    url: "https://ud-simulator.web.app/",
    github: "https://github.com/TyyyHo/U-Simulator",
  },
]);
