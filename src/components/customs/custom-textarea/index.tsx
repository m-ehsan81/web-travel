import { CustomTextareaProps } from './type';

function CustomTextArea({ label, ...rest }: CustomTextareaProps) {
  return (
    <div className="flex gap-2">
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <textarea
        {...rest}
        className="block w-full rounded-lg border border-[#AEAEAE] bg-transparent p-2.5 text-sm text-gray-900 focus:border-black"
      />
    </div>
  );
}

export default CustomTextArea;
