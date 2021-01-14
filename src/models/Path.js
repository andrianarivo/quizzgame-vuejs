export default class Path {
  constructor(
    amount,
    categ,
    difficulty,
    type
  ) {
    this.amount = amount
    this.categ = categ
    this.difficulty = difficulty
    this.type = type
  }

  getPath () {
    return "?amount=" + this.amount + "&category=" + this.categ + "&difficulty=" + this.difficulty + "&type=" + this.type
  }
}