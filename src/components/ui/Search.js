import React , {useState} from 'react';
import App from '../../App';

const Search = ({getQuery}) => {

    const [text ,setText] = useState("")
    const onChange =(q) => {
        setText(q)
        getQuery(q)
    }
  return (
    <section className='search'>
        <form>
            <input type='text' className='form-control' 
             autoFocus placeholder='search characters'
             value={text}
             onChange={(e) => onChange(e.target.value)} 
             />
            
        </form>
    </section>
  )
}

export default Search