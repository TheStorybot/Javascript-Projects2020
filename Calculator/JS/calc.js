const Calculator = {                 //creates and object to keep track of values
    Display_value: '0',              // this displays 0 on the screen
    First_Operand: null,            //this will hold the first operand for any expressions, we set it to null for now
    Wait_Second_Operand: false,     //this checks whether or not the second operand has been input
    operator: null,                 // this will hold the operator, we set it to null for now
};

function Input_Digit(digit) {                                                               // this modifies values eaach time a button is clicked
    const { Display_value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {                                                     //we are checking to see if wait_second_operand is true and set display_value to the key that was clicked
        Calculator.Display_value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_value = Display_value === '0' ? digit : Display_value + digit;   // this overwrites display_value if the current value is 0 otherwise it adds onto it
    }
}

function Input_Decimal(dot) {                                   // this section handles decimal points
    if (Calculator.Wait_Second_Operand === true) return;        // this ensures that accidentaly clicking on the decimal point doesnt case bugs in your operation
    if (!Calculator.Display_value.includes(dot)) {          
        Calculator.Display_value += dot;                        // we are saying that if the display_value does not contain a decimal point we want to add a decimal point
    }
}

function Handle_Operator(next_Operator) {                                           //this section handles operators
    const { First_Operand, Display_value, operator } = Calculator                   
    const Value_of_input = parseFloat(Display_value);                               // when an operator key is pressed, we convert the current number displayed on the screen to a number and then store the result in Calculator.First_Operand if if doesnt already exist
    if (operator && Calculator.Wait_Second_Operand) {                               //checks if an operator already exists and if wait-second-operand is true, then updates the operator and exits from the function
        Calculator.operator = next_Operator;                                        
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;                                       // check if an operator already exists
        let result = Preform_Calculation[operator] (Value_Now, Value_of_input);     //if an operator exists, property lookup is performed for the operator in the perform_calculation object and the function that matches the operator is executed
        result = Number(result).toFixed(9)                                          //here we add a fixed amount of numbers after the decimal
        result = (result * 1).toString()                                            // this will remove any trailing 0's
        Calculator.Display_value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = next_Operator;
}

const Preform_Calculation = {                                                       // handles straight forward calculation
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=': (First_Operand, Second_Operand) =>Second_Operand
};

function Calculator_Reset() {                               // restores all default start point values on the calculator
    Calculator.Display_value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {                                         // this function updates the screen with contents of display value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_value;
}

Update_Display();                                           // this section monitors button clicks
const keys = document.querySelector('.calculator-keys');    
keys.addEventListener('click', (event) => {
    const {target} = event;                                 // the target variable is an object that represents th element that was clicked
    if (!target.matches('button')) {                        // if the element clicked on was not a button, exit
        return;
    }
    if (target.classList.contains('operator')) {            // handles button clicks related to the operators
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {             // handles decimals added to the calculation
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {           // ensures everything is cleared and reset
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);   // takes input and displays on calculator-screen
    Update_Display();
})