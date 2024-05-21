import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("cards.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS cards (
              id INTEGER PRIMARY KEY NOT NULL,
              word TEXT NOT NULL,
              translation TEXT NOT NULL,
              cardStatus TEXT NOT NULL
          )`,
        [],
        () => {
          resolve();
        }, //success

        (_, error) => {
          reject(error);
        } //error
      );
    });
  });

  return promise;
}

export function insertCard(card) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO cards (word, translation, cardStatus) VALUES (?, ?, ?)`,
        [card.word, card.translation, card.cardStatus],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
}

export function fetchCards() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM cards",
        [],
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function deleteCard(cardId) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM cards WHERE id = (?)",
        [cardId],
        (_, result) => {
          resolve(result)
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
  return promise;
}

export function editCard(cardWord, cardTranslation, cardId) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "UPDATE cards SET word = ?, translation = ? WHERE id = ?",
        [cardWord, cardTranslation, cardId],
        (_, result) => {
          resolve(result)
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
  return promise;
}

export function changeCardStatus(cardId, newCardStatus) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "UPDATE cards SET cardStatus = ? WHERE id = ?",
        [newCardStatus, cardId],
        (_, result) => {
          resolve(result)
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
  return promise;
}



