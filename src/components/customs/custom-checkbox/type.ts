export interface CustomCheckbox
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}
