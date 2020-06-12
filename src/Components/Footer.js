import React from "react";
import { Link } from "react-router-dom";

export default ({ history }) => {
  return (
    <footer>
      <ul>
        <li>&copy; {new Date().getFullYear()} James Tarpey</li>
      </ul>
    </footer>
  );
};
