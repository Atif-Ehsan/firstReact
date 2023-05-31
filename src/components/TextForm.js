import React,{useState} from 'react'
export default function TextForm(props) {
    const [text,setText] = useState("")
    const handleonchange = (event)=>{
        setText(event.target.value)
    }
    const upperCase = (event) =>{
        let a = text.toUpperCase();
        setText(a)
    }
    return(
        <div className='container mt-4'>
            <input name="testing" value={text} className="form-control" onChange={handleonchange}/>
            <button onClick={upperCase} className='mt-4 btn btn-primary'>
                Convert to UpperCase
            </button>
        </div>
    )
}