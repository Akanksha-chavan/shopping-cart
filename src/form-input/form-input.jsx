import './form-input.scss';

const FormInput=({label,...otherProps})=>{
 return(
    <div className='form-group'>
        <input className='form-input' {...otherProps}/>
        {label && (
            <label 
                className={`${
                    otherProps.value && otherProps.value.length?'shrink':''
                    } form-input-label`}
            >
                {label}
            </label>
        )}
        </div>
 )
}
export default FormInput;
