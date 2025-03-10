import { Markup } from "telegraf";

// Create category selection keyboard
export function getCategoryKeyboard() {
  return Markup.keyboard([
    ["🎲 Random", "😂 Funny", "😎 Smooth"],
    ["🧠 Clever", "😊 Cute", "🧀 Cheesy"],
    ["🔥 Sexy", "💕 Flirty", "🌽 Corny"],
    ["💾 Database", "👨‍💻 Programmer", "❌ Quit"],
    [],
  ]).resize();
}

// Create start button (inline keyboard)
export function getStartButton() {
  return Markup.inlineKeyboard([
    Markup.button.callback("🚀 Start", "start_button"),
  ]);
}

// Create quit confirmation keyboard
export function getQuitConfirmKeyboard() {
  return Markup.inlineKeyboard([
    Markup.button.callback("Yes, quit", "confirm_quit"),
    Markup.button.callback("No, go back", "cancel_quit"),
  ]);
}
