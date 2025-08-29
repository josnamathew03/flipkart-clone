
import './Checkbox.css'

type checkboxProps ={
    name:string
    label: string
    checked: boolean
    
}

const Checkboxes = ({name,label, checked}: checkboxProps) => {
  return (
    <div className="checkbox-con">
      <label htmlFor="" className='checkbox-label'>
        <input type="checkbox" checked={checked} name={name}/>
        <div className='custom-checkbox'></div>
        <span className='checkbox-text'>{label}</span>
      </label>
    </div>
  )
}

export default Checkboxes
