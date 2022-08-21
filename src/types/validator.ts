export enum EmailAnswers {
  CORRECT_EMAIL = "Почта удовлетворяет требованиям",
}

export const EmailValidateAnswers = [EmailAnswers.CORRECT_EMAIL];

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
