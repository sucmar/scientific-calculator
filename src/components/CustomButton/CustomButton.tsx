import Button from '@mui/material/Button';

interface Props {
  label: string,
  isDisabled: boolean,
  isExpression: boolean,
  typeOfButton: string,
  value?: number | string,
  onClick: (isExpression: boolean, label: string, value: number | string) => void
}

const CustomButton: React.FC<Props> = ({ typeOfButton, isExpression, label, isDisabled, value, onClick }) => {

  const color: any = {
    operator: '#757575',
    reseter: '#FB8C00',
    operando: '#039BE5',
  }

  return (
    <Button
      variant="outlined"
      disabled={isDisabled}
      style={{
        margin: '2px',
        maxWidth: 10,
        justifyContent: 'center',
        backgroundColor: color[typeOfButton],
        opacity: isDisabled ? 0.5 : 1,
        color: '#fff'
      }}
      onClick={() => onClick(isExpression, label, value ? value : '')}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
