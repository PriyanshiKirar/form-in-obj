// import React from 'react'

// const App = () => {
// const submited=(e)=>{
// e.preventDefault();
// const [lastname,firstname, username,email]=e.target;
// const user={
//   firstname:firstname.value,
//   lastname:lastname.value,
//   username:username.value,
//   email:email.value,
// }
// console.log(user);
// }

//   return (
//     <div className='w-[80%] mt-10 p-5'>
//       <form onSubmit={submited} >
//         <input type="text" placeholder='firstname' name='firstname'/>
//         <input type="text"placeholder='lastname'name='lastname' />
//         <input type="text"placeholder='username'name='username' />
//         <input type="text"placeholder='email'name='email' />;
// <input className='bg-blue-600 px-3 py-2 rounded-md' type="submit" />

//       </form>
//     </div>
//   )
// }

// export default App

import { useState } from "react"

const App = () => {
  const [username, setusername] = useState("");
  const [error, seterror] = useState(false);
  const [gender, setgender] = useState("others")

  const sumbited = (e) => {
    e.preventDefault();
    console.log(username, gender)
  }
  return (
    <div className='m-20 p-5 w-[80%] mx-auto bg-purple-400'>
      <form onSubmit={sumbited} >
        <input onChange={(e) => setusername(e.target.value)}
          type="text" placeholder='username' name='username'
          value={username}
          onInput={(e) => e.target.value.length < 5 ? seterror(true) : seterror(false)}
        />

        {error && (
          <p className=" text-red-700">Username must be least 5 characterr</p>
        )}

        <input className='px-3 py-2 rounded-md bg-blue-850 ' type="submit" />
        <br /> <br />

        <input type="radio"
          name="gender"
          checked={gender === "others" ? true : false}
          defaultValue="others"
          onChange={(e) => setgender(e.target.value)}
        />others
        <br /><br />

        <input type="radio"
          name="gender"
          checked={gender === "female" ? true : false}
          defaultValue="female"
          onChange={(e) => setgender(e.target.value)}
        />female
        
        <br /><br />
        <input type="radio"
          name="gender"
          checked={gender === "male" ? true : false}
          defaultValue="male"
          onChange={(e) => setgender(e.target.value)}
        />male
      </form>
    </div>
  )
}

export default App






















