import React from "react";

const HighScores = (props) => {
  console.log(props.scores);
  return (
    <div>
      <h1> HIGH SCORES PER COUNTRY</h1>
      {props.scores
        .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
        .map((score) => {
          return (
            <div>
              <h2>{`HIGH SCORES: ${score.name}`}</h2>
              <table>
                <thead>
                  {score.scores.map((person, index) => {
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
      {/* {console.log(props.scores.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1))} */}
    </div>
  );
}

export default HighScores;
