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
              cardStatus BOOLEAN NOT NULL
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
        `INSERT INTO cards (word, translation, cardStatus) VALUES (?, ?, ?)`,
        [card.word, card.translation, card.cardStatus],
        (_, result) => {
            console.log(result);
            resolve(result);
        },
        (_, err) => {
            console.log(err)
            reject(err);
        }
      );
    });
  });

  return promise;
}
