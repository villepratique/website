import { Input } from "../input";

function AppInput({formik ,name,label, type,className} : {formik : any ;name : string;label : string; type : string,className: string} ) {
    return (
        <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm text-black "
      >
        {label}
      </label>
      <Input
      id={name}
             name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                type={type} 
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
            {formik.touched[name] && formik.errors[name] ? (
            <div className="p-2 bg-red-900 text-white" role="alert">
                 {formik.errors[name]}
            </div>
          ) : null}
    </div>
    )
}

AppInput.defaultProps = {
  type : "text",
  label : "label",
  className : "",
}

export default AppInput


// const AppCheckbox = ({ label, name, formik }) => (
//   <div className="mb-4">
//     <label className="inline-flex items-center">
//       <input
//         className="form-checkbox"
//         id={name}
//         name={name}
//         type="checkbox"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         checked={formik.values[name]}
//       />
//       <span className="ml-2">{label}</span>
//     </label>
//   </div>
// );

export const AppSelect = ({ label, name, formik, options } : {formik : any ;name : string;label : string; type : string,className: string,options:string[]}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700" htmlFor={name}>{label}</label>
    <select
      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      id={name}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
    >
      <option value="">Sélectionnez</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    {formik.touched[name] && formik.errors[name] ? (
      <div className="text-red-500 text-sm mt-2">{formik.errors[name]}</div>
    ) : null}
  </div>
);

// const AppTextarea = ({ label, name, formik }) => (
//   <div className="mb-4">
//     <label className="block text-sm font-medium text-gray-700" htmlFor={name}>{label}</label>
//     <textarea
//       className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//       id={name}
//       name={name}
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       value={formik.values[name]}
//     />
//     {formik.touched[name] && formik.errors[name] ? (
//       <div className="text-red-500 text-sm">{formik.errors[name]}</div>
//     ) : null}
//   </div>
// );
