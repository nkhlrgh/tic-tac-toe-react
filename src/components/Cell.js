export const Cell = ({ id, cell, setCells, go, setGo, cells }) => {
    const clickHandler = (e) => {
        const taken =
            e.target.firstChild.classList.contains("circle") ||
            e.target.firstChild.classList.contains("cross");

        if (!taken) {
            if (go === "circle") {
                e.target.firstChild.classList.add("circle");
                cellChangeHandler("circle");
                setGo("cross");
            }

            if (go === "cross") {
                e.target.firstChild.classList.add("cross");
                cellChangeHandler("cross");
                setGo("circle");
            }
        }
    };

    const cellChangeHandler = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className;
            } else {
                return cell;
            }
        });
        setCells(nextCells);
    };

    return (
        <div className="square" id={id} onClick={clickHandler}>
            <div className={cell}></div>
        </div>
    );
};
