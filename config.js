/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "雷莉",
  photo: "./img/irene.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "嗨",
      subtitle: "雷莉宝宝，今天是你的生日",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "我研究了很久，才弄好这个网站 :P ",
    },
    {
      type: "chatbox",
      message:
        "我是不是很蠢，到现在才弄好给你",
      buttonText: "点它",
    },
    {
      type: "ideas",
      lines: [
        "虽然是慢了点😋",
        "但是我真的很用心",
        "今天是你的<strong>生日</strong>.",
        "所以你今天要开开心心的",
        "把所有的烦恼都抛开<span>😉</span>",
      ],
      bigLetters: "你要知道",
    },
    {
      type: "quote",
      text: "生日不只是一个节日，也是一个开始，希望它带给你改变、梦想与勇气",
      author: "柴可夫斯基",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "生日快乐，宝宝!",
      wishText: "以后的每个生日我都会陪你的，不离不弃😘",
    },
    {
      type: "fireworks",
      count: 22,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "嘿嘿，不知道你会不会喜欢这个网页",
      replayText: "如果喜欢，你可以再看一遍😎",
    },
  ],
};
