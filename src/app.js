// src/app.js

/**
 * Функция подсчитывает общую сумму баллов по объектам вида { имя: балл }
 *
 * @param {Object} scores - Объект с парами "имя: балл"
 * @returns {number} Сумма всех баллов
 */
function getScore(scores) {
  let total = 0;
  for (let key in scores) {
    total += scores[key];
  }
  return total;
}

const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
};

console.log(getScore(scores));