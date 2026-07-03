import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
    const [length, setlength] = useState(1);
    const [numberAllowed, setnumberAllowed] = useState(false);
    const [charAllowed, setcharAllowed] = useState(false);
    const [password, setpassword] = useState("");
    const passwordref = useRef(null);
    const [copied, setcopied] = useState(false);

    const passwordgenerator = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str+="0123456789";
      if(charAllowed) str+="!'#$%&'()*+,-./:;`<=>?@[]^_{|}~/";
      for(let i=0; i<length; i++){
        let char = Math.floor(Math.random()*str.length);
        pass+=str.charAt(char);
      }
      setpassword(pass);
    },[length, numberAllowed, charAllowed, setpassword])
      useEffect(()=>{
        passwordgenerator()
      },
    [length,numberAllowed,charAllowed,passwordgenerator])

      const copypasswordToClipboard = useCallback(()=>{
        passwordref.current?.select();
        window.navigator.clipboard.writeText(password)
        setcopied(true);
        setTimeout(()=>setcopied(false),3000)
      },[password])

    return(
      <div className='bg-green-500 justify-center w-full max-w-md mx-auto py-8 shadow-md rounded-xl my-8 text-gray-800'>
        <h3 className='font-bold text-center pt-3 text-amber-5000'>Password Generator</h3>
        <div className='gap-1 flex justify-center overflow-hidden mb-4 py-3'>
            <input onChange={()=>{setlength(e.target.value)}} type="text" value={password} readOnly placeholder='Password' className='bg-amber-50 rounded outline-amber-50 py-1 px-3' />
            <button onClick={copypasswordToClipboard} className='text-amber-50 px-3 py-2 rounded bg-amber-500'>
              {copied ? "Copied": "Copy"}
            </button>
        </div>
        <div className='flex gap-x-3 justify-center'>
          <div className='gap-x-2 flex items-center'>
            <input value={length} onChange={(e)=>{setlength(e.target.value)}} type="range" min={1} max={100} value={length} className='cursor-pointer' />
            <label className='text-blue-900 font-bold'>Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" onClick={()=>{setnumberAllowed(a=>!a)}} defaultChecked={numberAllowed} />
            <label className='text-blue-900 font-bold'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input defaultChecked={charAllowed} onClick={()=>{setcharAllowed(a=>!a)}} type="checkbox" />
            <label className='text-blue-900 font-bold'>Characters</label>
          </div>
        </div>
      </div>

    )
}

export default App


