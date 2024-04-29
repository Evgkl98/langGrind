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
        title: "How to play?",
        subtitle:
          "Tap on a card and translate the word on it. Swipe right to edit the word. Swipe left to delete the card.",
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
      aboutText: {},
      languagesText: {
        languageTitle: "Language",
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
        cardExists2: "Try to add another card",
        feedBackSent: "Thank you for your feedback!",
        feedBackEmptyTitle: "Empty input field",
        feedBackEmptyComment: "Please check your feedback message",
      },
      feedbackText: {
        title: "Tell me something :)",
        comment:
          "Here you can freely write about bugs, improvements and your ideas",
        placeholder: "Write about your experience with this app",
        button: "Send feedback",
      },
    },
    Deutsch: {
      sectionsText: {
        firstSection: "Karten",
        secondSection: "Übersetzer",
        secondSectionSoon: "Kommt bald...",
        thirdSection: "Einstellung",
      },
      gameStartText: {
        title: "Wie spielen?",
        subtitle:
          "Drücken Sie auf die Karte und übersetzen Sie das Wort. Um das Wort zu bearbeiten, wischen Sie die Karte nach rechts. Um zu löschen - wischen Sie nach links.",
      },
      buttons: {
        backButton: "Zurück",
        addButton: "Hinzufügen",
        cancelButton: "Abbrechen",
        confirmButton: "Bestätigen",
        editButton: "Bearbeiten",
        deleteButton: "Löschen",
      },
      gameText: {
        noCards: "Keine Karten vorhanden",
      },
      modalText: {
        newCard: "Neue Karte",
        editCard: "Karte bearbeiten",
        playCard: "Übersetzen Sie das Wort",
        wordPlaceholder: "Wort",
        translationPlaceholder: "Übersetzung",
      },
      settingsText: {
        settingsTitle: "Einstellungen",
        preferencesTitle: "Einstellungen",
        helpTitle: "Hilfe",
        languageSection: "App-Sprache",
        aboutSection: "Über die App",
        feedbackSection: "Feedback",
      },
      aboutText: {},
      languagesText: {
        languageTitle: "Sprache",
      },
      alerts: {
        noTextAndTranslation: "Leere Felder",
        noTextAndTranslation2:
          "Bitte geben Sie ein Wort und seine Übersetzung ein",
        noWord: "Leeres Feld",
        noWord2: "Bitte geben Sie ein Wort ein",
        noTranslation: "Leeres Feld",
        noTranslation2: "Bitte geben Sie die Übersetzung des Wortes ein",
        wrongAnswer: "Falsch!",
        wrongAnswer2: "Falsche Übersetzung. Bitte versuchen Sie es erneut.",
        cardExists: "Diese Karte existiert bereits",
        cardExists2: "Versuchen Sie eine neue zu erstellen",
        feedbackSent: "Vielen Dank für Ihr Feedback!",
        feedbackEmptyTitle: "Leeres Feld",
        feedbackEmptyComment: "Bitte schreiben Sie Ihr Feedback",
      },
      feedbackText: {
        title: "Erzählen Sie mir etwas :)",
        comment: "Hier können Sie frei über Fehler, Verbesserungen und Ihre Ideen schreiben",
        placeholder: "Schreiben Sie über Ihre Erfahrung mit der App...",
        button: "Feedback senden"
      }
    },
    Русский: {
      sectionsText: {
        firstSection: "Карточки",
        secondSection: "Переводчик",
        secondSectionSoon: "Скоро...",
        thirdSection: "Настройки",
      },
      gameStartText: {
        title: "Как играть?",
        subtitle:
          "Нажмите на карточку и переведите слово. Чтобы отредактировать слово, смахните карточку вправо. Чтобы удалить - смахните влево.",
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
      aboutText: {},
      languagesText: {
        languageTitle: "Язык",
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
        feedbackSent: "Спасибо за ваш отзыв!",
        feedbackEmptyTitle: "Пустое поле",
        feedbackEmptyComment: "Пожалуйста напишите свой отзыв",
      },
      feedbackText: {
        title: "Напишите что-нибудь :)",
        comment:
          "Здесь вы можете свободно оставить свой отзыв, сообщить об ошибках или написать о том, что бы вы улучшили в приложении",
        placeholder: "Расскажите о своем опыте использования приложения",
        button: "Отправить отзыв",
      },
    },
    Český: {
      sectionsText: {
        firstSection: "Karty",
        secondSection: "Překladač",
        secondSectionSoon: "Brzy...",
        thirdSection: "Nastavení",
      },
      gameStartText: {
        title: "Jak na to?",
        subtitle:
          "Tapněte kartu a přeložtě slovo. Posunem vrpavo upravtě obsah karty. Posunem vlevo ji odstraňte.",
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
        languageTitle: "Jazyk",
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
        feedbackSent: "Děkuji za zpětnou vazbu!",
        feedbackEmptyTitle: "Prazdné pole",
        feedbackEmptyComment: "Prosím, napiště svůj feedback",
      },
      feedbackText: {
        title: "Napiště něco :)",
        comment:
          "Zde můžete napsát o chybách, vylepšeních a svých nápadech",
          placeholder: "Napište o svých zkušenostech s aplikací...",
          button: "Odeslat zpětnou vazbu"
      },
    },
  };
  return translations[language] || translations["English"];
}
