function CustomInput({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${className} block w-full rounded-lg border border-[#AEAEAE] bg-transparent p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
      {...rest}
    />
  );
}

export default CustomInput;
