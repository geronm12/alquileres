import * as db from "./inMemory.json";

const RecoveryAll = () => db;

function RecoveryByYear(año) {
  const db = JSON.parse(db);
  console.log(db);
}

export { RecoveryAll };
