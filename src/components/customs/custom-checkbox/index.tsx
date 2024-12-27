import { CustomCheckbox } from './type';

function CustomCheckBox(props: CustomCheckbox) {
  const { label, ...rest } = props;
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>

      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-[#FC5C04] focus:ring-0 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        {...rest}
      />
    </div>
  );
}

export default CustomCheckBox;
