
import './Checkbox.css'

type checkboxProps ={
    name:string
    label: string
    checked: boolean
    value: number | string 
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void
    
}

const Checkboxes = ({name,label, checked,value,handleChange}: checkboxProps) => {
  return (
    <div className="checkbox-con">
      <label htmlFor="" className='checkbox-label'>
        <input type="checkbox" checked={checked} name={name} value={value} onChange={handleChange}/>
        <span className='custom-checkbox'></span>
        <span className='checkbox-text'>{label}</span>
      </label>
    </div>
  )
}

export default Checkboxes
