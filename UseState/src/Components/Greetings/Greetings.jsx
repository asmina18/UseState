import {useState} from 'react';

export const  Greeting = () => {
  const [name, setName] = useState('Lajla');


  const ChangeName =(e)=>{
    setName(e.target.value);
  }

  const Delet = ()=>{
    setName('');
  }



  return (
    <> 
    <h1>Velkommen</h1>
    <h2>Hej , Mit navn er {name} {setName}</h2>

    <button onClick={()=> setName('Monika')}>Klik for at se hej til Monika</button>
    
    <input type="text" value={name} onChange = {ChangeName} />

    <button onClick={Delet}>Slet</button>

    </>
  )

}