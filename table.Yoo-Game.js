/**
 * table.Yoo-Game.js
 * An official Yoo-Game.js plugin developed by Yoo-Babobo (https://www.yoo-babobo.com)
 */

"use strict";

/**
 * @class TableError
 * @classdesc Error constructor for plugin
 */
class TableError extends Error {
    constructor(message) {
        super(message);
        this.name = "TableError";
    }
}

/**
 * @class Table
 * @classdesc table.Yoo-Game.js is a plugin for Yoo-Game.js used to calculate positions in a table formation.
 * @property {Number} this.x X coordinate of table.
 * @property {Number} this.y Y coordinate of table.
 * @property {Number} this.rows Number of table rows.
 * @property {Number} this.columns Number of table columns.
 * @property {Number} this.width Width of each table cell.
 * @property {Number} this.height Height of each table cell.
 * @property {Number} this.padding Padding of each table cell.
 * @param {Number} x X coordinate of table supplied to `this.x`.
 * @param {Number} y Y coordinate of table supplied to `this.y`.
 * @param {Number} rows Number of table rows supplied to `this.rows`.
 * @param {Number} columns Number of table columns supplied to `this.columns`.
 * @param {Number} width Width of each table cell supplied to `this.width`.
 * @param {Number} height Height of each table cell supplied to `this.height`.
 * @param {Number} padding Padding of each table cell supplied to `this.padding`.
 */
function Table(x = 0, y = 0, rows = 0, columns = 0, width = 0, height = 0, padding = 0) {
    this.x = x || 0;
    this.y = y || 0;
    this.rows = rows || 0;
    this.columns = columns || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.padding = padding || 0;
    
    /**
     * @function calculatePosition
     * @description Calculates the position for the table cell at row `row` column `column`.
     * @param {Number} row The table cells at row `row`.
     * @param {Number} column The table cells at column `column`.
     * @returns {Object} Returns `x`, `y`, and an array with `x` and `y` as `xy`.
     */
    this.calculatePosition = (row, column) => {
        if (row > this.rows - 1) throw new TableError("Invalid row number '" + row + "' the maximum is '" + (this.rows - 1) + "'.");
        else if (column > this.columns - 1) throw new TableError("Invalid column number '" + column + "' the maximum is '" + (this.columns - 1) + "'.");
        var x = this.x;
        var y = this.y;
        const width = this.width;
        const height = this.height;
        const padding = this.padding;
        x += (width + (column > 0 ? this.padding : 0)) * column;
        y += (height + (row > 0 ? this.padding : 0)) * row;
        return {
            x: x,
            y: y,
            xy: [x, y]
        };
    };
    
    /**
     * @function calculatePositionWithCell
     * @description Calculates the position for the table cell specified.
     * @param {Number} cell The table cell number.
     * @returns {Object} Returns `x`, `y`, and an array with `x` and `y` as `xy`.
     */
    this.calculatePositionWithCell = cell => {
        var row = 0;
        var column = 0;
        var parsedCells = 0;
        if (cell >= this.columns) {
            parsedCells += this.columns;
            for (var i = 1; i < this.rows; i++) {
                if (cell < parsedCells + this.columns) {
                    row = i;
                    for (var ii = 0; ii < this.columns; ii++) {
                        if (cell === parsedCells + ii) column = ii;
                        else if (ii === this.columns) throw new TableError("Invalid cell value '" + cell + "'.");
                    }
                    break;
                }
                else if (i === this.rows) throw new TableError("Invalid cell value '" + cell + "'.");
                parsedCells += this.columns;
            }
        } else column = cell;
        const position = this.calculatePosition(row, column);
        return position;
    };
}