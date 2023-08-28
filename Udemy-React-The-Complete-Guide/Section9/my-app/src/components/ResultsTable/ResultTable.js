import React from "react";
import styles from "./ResultTable.module.css"
const ResultTable = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>{props.text1}</th>
          <th>{props.text2}</th>
          <th>{props.text3}</th>
          <th>{props.text4}</th>
          <th>{props.text5}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
