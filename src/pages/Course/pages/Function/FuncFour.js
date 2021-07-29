import {React, Component } from "react";
import FuncOne from "./FuncOne";
import FuncTwo from "./FuncTwo";
import FuncThree from "./FuncThree";
export default class Func extends Component {
  render() {
    return (
      <div>
        <FuncOne />
        <FuncTwo />
        <FuncThree />
      </div>
    );
  }
}
