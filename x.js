let clay_yay = null

class Medium {
  constructor(clay_body, glaze) {
    this.clay_body = clay_body
    this.glaze = glaze
  }
}

class Dimension {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

class Piece {
  constructor(title, medium, year, dimension) {
    this.title = title
    this.medium = medium
    this.year = year
    this.dimension = dimension
  }
}

// amazeBALLS, we've defined classes for the piece, dimension, and medium
// a single instantiated piece object will have thjis structure
/*
let piece = {
  title = 'son of a serpent',
  medium = {
    clay_body = 'porcelain',
    glaze = 'celedon'
  },
  year = '3005',
  dimension = {
    height = '666in',
    width = '-666in'
  }
}
*/

let piece = new Piece(
  /* title : */ 'son of a serpent',
  /* year : */ 2017,
  /* medium : */ new Medium(
  /* clay_body : */ 'porcelain',
  /* glaze */ 'celedon'
),
  /* dimension : */ new Dimension(
    /* height */ '666in',
    /* width : */ '666in'
  )
)

console.log(piece);
