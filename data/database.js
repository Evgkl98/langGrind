import * as SQLite from "expo-sqlite";
import { Card } from "../modal/card";

const database = SQLite.openDatabase("cards.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS cards (
              id INTEGER PRIMARY KEY NOT NULL,
              cardId TEXT NOT NULL,
              word TEXT NOT NULL,
              translation TEXT NOT NULL,
              cardStatus TEXT NOT NULL
          )`,
        [],
        () => {
          resolve();
        }, //callback for success

        (_, error) => {
          reject(error);
        } //callback for error
      );
    });
  });

  return promise;
}

export function insertCard(card) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO cards (cardId, word, translation, cardStatus) VALUES (?, ?, ?, ?)`,
        [card.cardId, card.word, card.translation, card.cardStatus],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, err) => {
          console.log(err);
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
          console.log(resolve);
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
          console.log(resolve)
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
  return promise;
}

export function editDbCard(cardWord, cardTranslation, cardId) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "UPDATE cards SET word = ?, translation = ? WHERE id = ?",
        [cardWord, cardTranslation, cardId],
        (_, result) => {
          resolve(result)
          console.log(resolve)
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
  return promise;
}

export function changeDbCardStatus(cardId, newCardStatus) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "UPDATE cards SET cardStatus = ? WHERE cardId = ?",
        [newCardStatus, cardId],
        (_, result) => {
          resolve(result)
          console.log(resolve)
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
  return promise;
}
