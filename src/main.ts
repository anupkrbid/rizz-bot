import { Markup, Telegraf } from "telegraf";
import * as dotenv from "dotenv";

import {
  getRandomPickUpLineByCategory,
  getRandomPickUpLine,
} from "./models/pickup-line.repository.js";
import {
  getQuitConfirmKeyboard,
  getCategoryKeyboard,
  getStartButton,
} from "./ui/keyboards.js";

// Load environment variables
dotenv.config();

// Initialize bot with your token
const bot = new Telegraf(process.env.BOT_TOKEN || "");

// Bot commands and handlers
bot.start((ctx) => {
  ctx.reply(
    `👋 Welcome to the Ultimate Pickup Line Bot!\n\nClick the button below to start:`,
    getCategoryKeyboard()
  );
});

// Handle the start button click
bot.action("start_button", (ctx) => {
  ctx.deleteMessage().catch((e) => console.log("Could not delete message", e));
  ctx.reply(
    `Hello ${
      ctx.from?.first_name || "there"
    }! 😊\n\nI'm your pickup line assistant. Choose a category to get a pickup line:`,
    getCategoryKeyboard()
  );
});

bot.help((ctx) => {
  ctx.reply(
    "This bot sends you pickup lines based on your chosen category.\n\n" +
      "Use the buttons to select a category, or type /random to get a random line from any category.\n\n" +
      "Type /start to restart the bot or click ❌ Quit to exit."
  );
});

// Handle quit confirmation
bot.action("confirm_quit", (ctx) => {
  ctx.deleteMessage().catch((e) => console.log("Could not delete message", e));
  ctx
    .reply(
      "Thanks for using the Pickup Line Bot! Type /start to begin again.",
      Markup.removeKeyboard()
    )
    .then(() => {
      getStartButton();
    });
});

// Handle quit cancellation
bot.action("cancel_quit", (ctx) => {
  ctx.deleteMessage().catch((e) => console.log("Could not delete message", e));
  ctx.reply("Great! Let's continue. Choose a category:", getCategoryKeyboard());
});

// Handle button clicks for each category
bot.hears("✨ Best", (ctx) => {
  const line = getRandomPickUpLineByCategory("best");
  ctx.reply(`✨ *Best*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("😂 Funny", (ctx) => {
  const line = getRandomPickUpLineByCategory("funny");
  ctx.reply(`😂 *Funny*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("😎 Smooth", (ctx) => {
  const line = getRandomPickUpLineByCategory("smooth");
  ctx.reply(`😎 *Smooth*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("🧠 Clever", (ctx) => {
  const line = getRandomPickUpLineByCategory("clever");
  ctx.reply(`🧠 *Clever*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("😊 Cute", (ctx) => {
  const line = getRandomPickUpLineByCategory("cute");
  ctx.reply(`😊 *Cute*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("🧀 Cheesy", (ctx) => {
  const line = getRandomPickUpLineByCategory("cheesy");
  ctx.reply(`🧀 *Cheesy*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("🔥 Sexy", (ctx) => {
  const line = getRandomPickUpLineByCategory("sexy");
  ctx.reply(`🔥 *Sexy*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("💕 Flirty", (ctx) => {
  const line = getRandomPickUpLineByCategory("flirty");
  ctx.reply(`💕 *Flirty*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("🌽 Corny", (ctx) => {
  const line = getRandomPickUpLineByCategory("corny");
  ctx.reply(`🌽 *Corny*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("💾 Database", (ctx) => {
  const line = getRandomPickUpLineByCategory("database");
  ctx.reply(`💾 *Database*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("👨‍💻 Programmer", (ctx) => {
  const line = getRandomPickUpLineByCategory("programmer");
  ctx.reply(`👨‍💻 *Programmer*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

bot.hears("🎲 Random", (ctx) => {
  const line = getRandomPickUpLine();
  ctx.reply(`🎲 *Random*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

// Command handlers
bot.command("random", (ctx) => {
  const line = getRandomPickUpLine();
  ctx.reply(`🎲 *Random*: ${line}`, {
    parse_mode: "Markdown",
    ...getCategoryKeyboard(),
  });
});

// Handle quit button
bot.hears("❌ Quit", (ctx) => {
  ctx.reply("Are you sure you want to quit?", getQuitConfirmKeyboard());
});

// Launch the bot
// const PORT = Number(process.env.PORT) || 3000;
// const WEBHOOK_URL = process.env.WEBHOOK_URL;

// if (WEBHOOK_URL) {
//   bot.launch({
//     webhook: {
//       domain: WEBHOOK_URL,
//       hookPath: '/webhook-path',
//       port: PORT
//     }
//   })
//   .then(() => {
//     console.log("Webhook bot listening on port", PORT);
//   })
//   .catch((err) => {
//     console.error("Error starting bot:", err);
//   });
// } else {
//   bot.launch()
//     .then(() => {
//       console.log("Bot started in polling mode");
//     })
//     .catch((err) => {
//       console.error("Error starting bot:", err);
//     });
// }

const PORT = Number(process.env.PORT) || 8443;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

bot.launch(
  {
    webhook: {
      // Public domain for webhook; e.g.: example.com
      domain: WEBHOOK_URL as string,

      // Port to listen on; e.g.: 8080
      port: PORT,
    },
  },
  () => {
    console.log(`Bot started in webhook mode at ${WEBHOOK_URL}`);
  }
);

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
