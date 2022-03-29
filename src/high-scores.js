import React, { useState } from "react";

const HighScores = (props) => {
  const [sortOrder, setSortOrder] = useState(true);
  function changeOrder() {
    setSortOrder(!sortOrder);
  }
  let sorted;
  let people = [];
  return (
    <div>
      <h1>ALL HIGH SCORES</h1>
      <table>
        <thead>
          <tr>
            <td>Position</td>
            <td>Person</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {props.scores.forEach((country) => {
            country.scores.map((person) => {
              return people.push(person);
            });
          })}
          {people
            .sort((a, b) => (a.s === b.s ? 0 : a.s < b.s ? 1 : -1))
            .map((person, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{person.n}</td>
                  <td>{person.s}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <h1> HIGH SCORES BY COUNTRY</h1>
      <button className="sortButton" onClick={changeOrder}>
        Sort Scores
      </button>
      {props.scores
        .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
        .map((score) => {
          if (sortOrder === true) {
            sorted = score.scores.sort((a, b) => (a.s === b.s ? 0 : a.s < b.s ? 1 : -1));
          } else {
            sorted = score.scores.sort((a, b) => (a.s === b.s ? 0 : a.s > b.s ? 1 : -1));
          }
          return (
            <div>
              <h2>{`HIGH SCORES: ${score.name}`}</h2>
              <table>
                <thead>
                  <tr>
                    <td>Position</td>
                    <td>Person</td>
                    <td>Score</td>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((person, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{person.n}</td>
                        <td>{person.s}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default HighScores;
