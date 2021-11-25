# table.Yoo-Game.js
table.Yoo-Game.js is a plugin for Yoo-Game.js used to calculate positions in a table formation.

## Usage
table.Yoo-Game.js is relativly simple to use.

**First**, create a table:
```javascript
const table = new Table(x, y, rows, columns, width, height, padding);
```

**Next**, your table is ready to use. There are two functions available: `table.calculatePosition(row, column)` and `table.calculatePositionWithCell(cell)`.  
The first function, calculates the position of the cell at row `row` and column `column`. The second function, calculates the position of the cell specified.

## Examples
```javascript
// Initiate table
const table = new Table(
  300, // x
  450, // y
  4, // rows
  7, // columns
  96, // width
  96, // height
  10 // padding
);

// Get position
const pos = table.calculatePosition(3, 5);
console.log(pos.x); // 830
console.log(pos.y); // 768
console.log(pos.xy); // [830, 768]

// Get position with just the cell number
const pos2 = table.calculatePositionWithCell(3);
console.log(pos2.xy); // [618, 450]

const pos3 = table.calculatePositionWithCell(15);
console.log(pos3.xy); // [406, 662]
```

## Note
This class was made specifically for Yoo-Game.js, a 2d game library we're currently working on. Although it can be useful in other cases as well. Yoo-Game.js is not complete, hence there is no repoository yet.
