import Path from '@/models/Path'

export default class PathBuilder {
  constructor(amount) {
    this.amount = amount
  }
  withCategory(categ) {
    this.categ = categ
    return this
  }
  withDifficulty(difficulty) {
    this.difficulty = difficulty
    return this
  }
  withType(type) {
    this.type = type
    return this
  }
  build() {
    return new Path(
      this.amount,
      this.categ,
      this.difficulty,
      this.type
    )
  }
}