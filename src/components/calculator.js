import React from "react";
// import { Modal, Form, Button } from "react-bootstrap";
import "./styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faMinus } from "@fortawesome/free-solid-svg-icons";

class Calculator extends React.Component {
  
  render() {
    return (
      <div className="">
        <div class='Calculatorwrapper'>
        <div class="calculatorPage px-2">
            <h1 class="calculatorHead">CALC</h1>
            <div class="calculatorScreen" id='screen'></div>
            <button type="button" className="calcbutton" name="on" id='on' onclick="operation('on')">ON</button>
            <button type="button" className="calcbutton" name="%">%</button>
            <button type="button" className="calcbutton" name="off">OFF</button>
            <button type="button" className="calcbutton" name="one" id='one' onclick='display(one.innerHTML)'>1</button>
            <button type="button" className="calcbutton" name="two" id='two' onclick='display(two.innerHTML)'>2</button>
            <button type="button" className="calcbutton" name="three" id='three' onclick='display(three.innerHTML)'>3</button>
            <button type="button" className="calcbutton" name="four" id='four' onclick='display(four.innerHTML)'>4</button>
            <button type="button" className="calcbutton" name="five" id='five' onclick='display(five.innerHTML)'>5</button>
            <button type="button" className="calcbutton" name="six" id='six' onclick='display(six.innerHTML)'>6</button>
            <button type="button" className="calcbutton" name="seven" id='seven' onclick='display(seven.innerHTML)'>7</button>
            <button type="button" className="calcbutton" name="eight" id='eight' onclick='display(eight.innerHTML)'>8</button>
            <button type="button" className="calcbutton" name="nine" id='nine' onclick='display(nine.innerHTML)'>9</button>
            <button type="button" className="calcbutton" name="zero" id='zero' onclick='display(ten.innerHTML)'>0</button>
            <button type="button" className="calcbutton" name="plus" id='plus' onclick='display(plus.innerHTML)'>+</button>
            <button type="button" className="calcbutton" name="minus" id='minus' onclick='display(minus.innerHTML)'>-</button>
            <button type="button" className="calcbutton" name="divide" id='divide' onclick='display(divide.innerHTML)'>/</button>
            <button type="button" className="calcbutton" name="multiply" id= 'multiply' onclick='display(multiply.innerHTML)'>*</button>
            <button type="button" className="calcbutton" name="dot" id='dot' onclick='display(dot.innerHTML)'>.</button>
            <button type="button" className="calcbutton" name="del" id='del' onclick='display(del.innerHTML)'>del</button>
            <button className="equalto calcbutton" type="button" name="=" >=</button>
        </div>
        </div>
        <div className="copyr"> copyright @Erema 2019 </div>
    </div>
    );
  }
}
export default Calculator;