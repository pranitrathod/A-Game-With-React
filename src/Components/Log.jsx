export default function Log({turns})
{
    return (
        <ol id="log">
           {turns.map(turn=>(<li key={`${turn.row}${turn.col}`}>{turn.player} selected {turn.sqaure.row},{turn.sqaure.col}</li>))}
        </ol>
    );
}