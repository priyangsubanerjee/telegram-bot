const { Telegraf } = require("telegraf");
const bot = new Telegraf("6005874620:AAE2ilM3xpnglJg70OmhG6JFsB9yvxx214Y");

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "hello there! Welcome to my new telegram bot.",
    {}
  );
});

bot.hears("animals", (ctx) => {
  console.log(ctx.from);
  let animalMessage = `great, here are pictures of animals you would love`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "dog",
            callback_data: "dog",
          },
          {
            text: "cat",
            callback_data: "cat",
          },
        ],
      ],
    },
  });
});

bot.hears("phone", (ctx, next) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Can we get access to your phone number?",
    requestPhoneKeyboard
  );
});

const requestPhoneKeyboard = {
  reply_markup: {
    one_time_keyboard: true,
    keyboard: [
      [
        {
          text: "My phone number",
          request_contact: true,
          one_time_keyboard: true,
        },
      ],
      ["Cancel"],
    ],
  },
};

bot.launch();

// https://good-blue-fish-tux.cyclic.app
// 6005874620:AAE2ilM3xpnglJg70OmhG6JFsB9yvxx214Y

// https://api.telegram.org/bot6005874620:AAE2ilM3xpnglJg70OmhG6JFsB9yvxx214Y/setWebhook?url=https://good-blue-fish-tux.cyclic.app
