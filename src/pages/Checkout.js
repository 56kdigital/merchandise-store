import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import CartContext from "../context/cart";

import ShippingForm from "../components/ShippingForm";
import ConfirmDetails from "../components/ConfirmDetails";
import ThankYou from "../components/ThankYou";
import createPalette from "@material-ui/core/styles/createPalette";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: theme.spacing(6),
  },
}));

function getSteps() {
  return ["Shipping Details", "Confirm details", "Thank you"];
}
function getStepContent(step, handleChange, state) {
  switch (step) {
    case 0:
      return <ShippingForm handleChange={handleChange} state={state} />;
    case 1:
      return <ConfirmDetails state={state} />;
    case 2:
      return <ThankYou state={state} />;
    default:
      return "Unknown step";
  }
}
function checkoutReducer(state, action) {
  if (action.type === "changed") {
    return {
      ...state,
      [action.key]: action.value,
    };
  }
}
export default function Checkout() {

  const history = useHistory();
  const cart = React.useContext(CartContext);
  const [state, dispatch] = React.useReducer(checkoutReducer, {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      cart.clearAll();
      history.push("/");
      //history.push("/thankyou");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleChange = ({ name, value }) => {
    dispatch({ type: "changed", key: name, value });
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, handleChange, state)}
            <div className={classes.buttonContainer}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button variant="contained" color="primary" size="large" onClick={handleNext} className={classes.button}>
                {activeStep === steps.length - 2 ? "Place order" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
