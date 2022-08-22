export enum EmailAnswers {
  CORRECT_EMAIL = "Почта удовлетворяет требованиям",
  INCORRECT_EMAIL = "Почта не удовлетворяет требованиям",
}

export enum PasswordAnswers {
  CORRECT_LENGTH = "Имеет больше 8 символов",
  INCLUDE_CAPITAL = "Содержит заглавные буквы",
  INCLUDE_SYMBOLS = "Включает специальные символы",
}

export const PasswordValidateAnswers = [
  PasswordAnswers.CORRECT_LENGTH,
  PasswordAnswers.INCLUDE_CAPITAL,
  PasswordAnswers.INCLUDE_SYMBOLS,
];
