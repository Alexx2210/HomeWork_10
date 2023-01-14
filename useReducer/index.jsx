import { useReducer } from "react";

const initialHolidays = [
  {
    id: 1,
    title: "Christmas",
    complete: true,
  },
  {
    id: 2,
    title: "8th March",
    complete: false,
  },
];

const reducer = (state, action) => {
    switch (action.type) {
      case 'COMPLETE':
        return state.map((holiday) =>
          holiday.id === action.id
            ? {
                ...holiday,
                complete: !holiday.complete,
              }
            : holiday,
        );
  
      default:
        return state;
    }
  };

function Holidays() {
  const [holidays, dispatch] = useReducer(reducer, initialHolidays);

  const handleComplete = (holiday) => {
    // В reducer передается такой объект:
    dispatch({ type: "COMPLETE", id: holiday.id });
  };

  return (
    <>
      {holidays.map((holiday) => (
        <div key={holiday.id}>
          <label>
            <input
              type="checkbox"
              checked={holiday.complete}
              onChange={() => handleComplete(holiday)}
            />
            {holiday.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default Holidays;
