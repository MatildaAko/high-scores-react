import React from "react";

const HighScores = (props) => {
  console.log(props.scores)
  return <div><h1> HIGH SCORES PER COUNTRY</h1>
{   (props.scores.map((score) => {
    return (
      <div>
        <h2>{`HIGH SCORES: ${score.name}`}</h2>
        <table>
          <thead>
            {score.scores.map((person, index) => {
              // console.log(person)
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
  }))}
    </div>
}

export default HighScores;
