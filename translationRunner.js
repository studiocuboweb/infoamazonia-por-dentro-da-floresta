const { default: manageTranslations } = require('react-intl-translations-manager');

manageTranslations({
  messagesDirectory: './build/messages',
  translationsDirectory: './src/locales/',
  languages: ['pt'],
  singleMessagesFile: true
});
