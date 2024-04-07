import Tuple from '../util/Tuple'

interface SudokuTableProps {
    Grid: Tuple<number,81>
    isBase: Tuple<boolean,81>
}

enum CellType {
    Base, // If part of initial starting grid
    Filled, // If filled by player
    Empty, // If not yet filled by player
    Notes, // If notes added by player
}

interface SudokuCellProps {
    key: number,
    type: CellType,
    fill: number,
    notes?: Tuple<boolean,9>
}

function SudokuTable(props: SudokuTableProps) {
    return (
        <div className='grid grid-cols-9 w-1/3 h-1/3 aspect-square'>
            {props.Grid.map((cell, cellIdx) => (
                <SudokuCell 
                key={cellIdx} 
                type={props.isBase[cellIdx] ? CellType.Base : CellType.Empty}
                fill={cell}
                />
            ))}  
        </div>
    )
}

function SudokuCell(props: SudokuCellProps) {
    return (
        <div 
        className={
        'border-2 w-full h-full flex justify-center align-middle '
        +(props.type == CellType.Base ? 'bg-gray-400 text-2xl' : '')
        }
        key={props.key}>
            {props.fill != 0 ? props.fill : ''}
        </div>
    )
}

export default SudokuTable;