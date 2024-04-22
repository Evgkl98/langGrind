import { useSelector } from "react-redux";

export default function landAppLogic() {
  const language = useSelector((state) => state.languageReducer);

  const translations = {
    English: {
      sectionsText: {
        firstSection: "Cards",
        secondSection: "Translator",
        secondSectionSoon: "Coming soon...", // written under the second section
        thirdSection: "Settings",
      },
      gameStartText: {
        title: "Instructions",
        subtitle: "Tap on a card and translate the word on it",
      },
      buttons: {
        backButton: "Back",
        addButton: "Add Card",
        cancelButton: "Cancel",
        confirmButton: "Confirm",
        editButton: "Edit",
        deleteButton: "Delete",
      },
      gameText: {
        noCards: "No cards found",
      },
      modalText: {
        newCard: "New card",
        editCard: "Edit card",
        playCard: "Translate the word",
        wordPlaceholder: "Word",
        translationPlaceholder: "Translation",
      },
      settingsText: {
        settingsTitle: "Settings",
        preferencesTitle: "Preferences",
        helpTitle: "Help",
        languageSection: "Language",
        aboutSection: "About",
        feedbackSection: "Feedback",
      },
      aboutText: {

      },
      languagesText: {
        languageTitle: "Language"
      },
      alerts: {
        noTextAndTranslation: "Empty input fields",
        noTextAndTranslation2: "Please write your word and its translation",
        noWord: "Empty input field",
        noWord2: "Please write your word",
        noTranslation: "Empty input field",
        noTranslation2: "Please write a translation for the word",
        wrongAnswer: "Wrong translation",
        wrongAnswer2: "Oops... Try once again!",
        cardExists: "Card already exists",
        cardExists2: "Try to add another card"
      },
    },
    Deutsch: {
      firstSection: "Karten",
      secondSection: "Übersetzer",
      secondSectionSoon: "Kommt bald...",
      thirdSection: "Einstellung"
    },
    Russian: {
      sectionsText: {
        firstSection: "Карточки",
        secondSection: "Переводчик",
        secondSectionSoon: "Скоро...",
        thirdSection: "Настройки",
      },
      gameStartText: {
        title: "Правила игры",
        subtitle: "Нажмите на карточку и переведите слово",
      },
      buttons: {
        backButton: "Назад",
        addButton: "Добавить",
        cancelButton: "Отмена",
        confirmButton: "Подтвердить",
        editButton: "Изменить",
        deleteButton: "Удалить",
      },
      gameText: {
        noCards: "Карточки отсутствуют",
      },
      modalText: {
        newCard: "Новая карточка",
        editCard: "Изменить карточку",
        playCard: "Переведите слово",
        wordPlaceholder: "Слово",
        translationPlaceholder: "Перевод",
      },
      settingsText: {
        settingsTitle: "Настройки",
        preferencesTitle: "Предпочтения",
        helpTitle: "Помощь",
        languageSection: "Язык приложения",
        aboutSection: "О приложении",
        feedbackSection: "Обратная связь",
      },
      aboutText: {

      },
      languagesText: {
        languageTitle: "Язык"
      },
      alerts: {
        noTextAndTranslation: "Незаполненные поля",
        noTextAndTranslation2: "Пожалуйста, напишите слово и его перевод",
        noWord: "Незаполненное поле",
        noWord2: "Пожалуйста, напишите слово",
        noTranslation: "Незаполненное поле",
        noTranslation2: "Пожалуйста, напишите перевод слова",
        wrongAnswer: "Неверно!",
        wrongAnswer2: "Неверный перевод. Попробуйте еще раз.",
        cardExists: "Такая карточка уже существует",
        cardExists2: "Попробуйте создать новую",
      },
    },
    Czech: {
      sectionsText: {
        firstSection: "Karty",
        secondSection: "Překladač",
        secondSectionSoon: "Brzy...",
        thirdSection: "Nastavení",
      },
      gameStartText: {
        title: "Pravidla hry",
        subtitle: "Tapněte kartu a přeložtě slovo",
      },
      buttons: {
        backButton: "Zpátky",
        addButton: "Přidat",
        cancelButton: "Zrušit",
        confirmButton: "Potvrdit",
        editButton: "Změnit",
        deleteButton: "Smazat",
      },
      gameText: {
        noCards: "Nebyly nalezeny žádné karty",
      },
      modalText: {
        newCard: "Nová karta",
        editCard: "Změnit kartu",
        playCard: "Přeložte slovo",
        wordPlaceholder: "Slovo",
        translationPlaceholder: "Překlad",
      },
      settingsText: {
        settingsTitle: "Nastavení",
        preferencesTitle: "Předvolby",
        helpTitle: "Pomoc",
        languageSection: "Jazyk aplikace",
        aboutSection: "O aplikaci",
        feedbackSection: "Zpětná vazba",
      },
      languagesText: {
        languageTitle: "Jazyk"
      },
      alerts: {
        noTextAndTranslation: "Prazdná pole",
        noTextAndTranslation2: "Prosím, napiště slovo a jeho překlad",
        noWord: "Prazdné pole",
        noWord2: "Prosím napiště slovo",
        noTranslation: "Prazdné pole",
        noTranslation2: "Prosím napiště překlad slova",
        wrongAnswer: "Chyba!",
        wrongAnswer2: "Překlad není spravný. Zkustě ještě jednou.",
        cardExists: "Tato karta už existuje",
        cardExists2: "Zkustě vytvořit jinou.",
      },
    },
  };
  return translations[language] || translations["English"];
}
