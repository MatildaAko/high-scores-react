import React, { useState } from "react";

const HighScores = (props) => {
  const [sortOrder, setSortOrder] = useState(true);
  function changeOrder() {
    setSortOrder(!sortOrder);
  }
  let sorted;
  // let sortButton = document.querySelector(".sortButton");
// console.log(sortButton.innerHTML)
  return (
    <div>
      <h1> HIGH SCORES PER COUNTRY</h1>
      <button className="sortButton" onClick={changeOrder}>
        Sort Scores
      </button>
      {props.scores
        .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
        .map((score) => {
          if (sortOrder === true) {
            sorted = score.scores.sort((a, b) => (a.s === b.s ? 0 : a.s < b.s ? 1 : -1));
            // sortButton.innerHTML = "Sort Descending";
          } else {
            sorted = score.scores.sort((a, b) => (a.s === b.s ? 0 : a.s > b.s ? 1 : -1));
            // sortButton.innerHTML = "Sort Ascending";
          }
          return (
            <div>
              <h2>{`HIGH SCORES: ${score.name}`}</h2>
              <table>
                <thead>
                  {sorted.map((person, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {person.n}: {person.s}
                        </td>
                      </tr>
                    );
                  })}
                </thead>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default HighScores;
