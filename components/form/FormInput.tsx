import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export interface FormInputProps {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
}

const FormInput = ({
  name,
  label,
  type,
  defaultValue,
  placeholder,
}: FormInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
export default FormInput;
