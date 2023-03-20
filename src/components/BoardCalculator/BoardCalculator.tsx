import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { evaluate } from 'mathjs';
import { useSelector, useDispatch } from 'react-redux';

import CustomLabel from '../CustomLabel/CustomLabel';
import CustomButton from '../CustomButton/CustomButton';

import { setResult, resetResult, setResultEntry, deleteResultEntry, removeAllResultEntries } from '../../redux/ResultSlice';
import { setInput, resetInput, setInputEntry, deleteInputEntry, removeAllInputEntries } from '../../redux/InputSlice';
import { RootState } from '../../store/store';

const BoardCalculator = () => {

  const result = useSelector((state: RootState) => state.result.value)
  const input = useSelector((state: RootState) => state.input.value)
  const resultEntry = useSelector((state: RootState) => state.result.resultEntry)
  const inputEntry = useSelector((state: RootState) => state.input.inputEntry)
  const dispatch = useDispatch()

  const [showError, setShowError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const handleClick = (isExpression: boolean, label: string, value: number | string) => {
    if (isExpression) {
      dispatch(setInputEntry(label + '('))
      dispatch(setResultEntry(value + '('))
      dispatch(setInput(label + '('))
      dispatch(setResult(value + '('))
    } else {
      dispatch(setInputEntry(label))
      dispatch(setResultEntry(value + ''))
      dispatch(setInput(label))
      dispatch(setResult(value + ''))
    }
  }

  const handleResult = () => {
    if (input) {
      try {
        const response = evaluate(result);
        dispatch(resetResult())
        dispatch(resetInput())
        dispatch(setResult(response))
        dispatch(removeAllInputEntries())
        dispatch(removeAllResultEntries())
        setIsButtonDisabled(true)
      } catch (error) {
        setShowError(true)
        dispatch(resetInput())
        dispatch(resetResult())
        dispatch(removeAllInputEntries())
        dispatch(removeAllResultEntries())
        dispatch(setInput('Syntax ERROR'))
      }
    } else {
      setShowError(true)
      dispatch(resetInput())
      dispatch(resetResult())
      dispatch(setInput('Syntax ERROR'))
    }
  }

  const removeLastPosition = () => {
    dispatch(deleteResultEntry())
    dispatch(deleteInputEntry())
  }

  const resetValues = () => {
    dispatch(resetInput())
    dispatch(resetResult())
    dispatch(removeAllInputEntries())
    dispatch(removeAllResultEntries())
    setShowError(false)
    setIsButtonDisabled(false)
  }

  const card = (
    <React.Fragment>
      <CardContent>
        <CustomLabel>
          Scientific Calculator
        </CustomLabel>

        <div style={{ textAlign: 'center' }}>
          <TextField
            error={showError}
            style={{ minWidth: 330, margin: 5, backgroundColor: '#EEEEEE' }}
            id="outlined-basic"
            variant="outlined"
            value={input ? input : result} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="PI" value="3.141592653589793" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="(" value="(" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label=")" value=")" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="^" value="^" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="!" value="!" onClick={handleClick} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={true} label="sin" value="sin" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={true} label="cos" value="cos" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={true} label="tan" value="tan" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={true} label="log" value="log" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="^2" value="^2" onClick={handleClick} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="7" value="7" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="8" value="8" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="9" value="9" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="reseter" isExpression={false} label="DEL" onClick={removeLastPosition} />
          <CustomButton isDisabled={false} typeOfButton="reseter" isExpression={false} label="AC" onClick={resetValues} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="4" value="4" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="5" value="5" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="6" value="6" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="x" value="*" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="/" value="/" onClick={handleClick} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="1" value="1" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="2" value="2" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="3" value="3" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="+" value="+" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="-" value="-" onClick={handleClick} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operando" isExpression={false} label="0" value="0" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="." value="." onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="%" value="%" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={true} label="√" value="sqrt" onClick={handleClick} />
          <CustomButton isDisabled={showError || isButtonDisabled} typeOfButton="operator" isExpression={false} label="=" onClick={handleResult} />
        </div>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 400, maxWidth: 200 }}>
      <Card elevation={3} style={{ backgroundColor: '#CFD8DC' }}>{card}</Card>
    </Box>
  );
}

export default BoardCalculator;
