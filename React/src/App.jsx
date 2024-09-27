

import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("My name is Nikhil")


  function Changetitle(){
    setTitle("My name is " + Math.random());
  }

return <div>
<button onClick={Changetitle}>Click here to change the first Title</button>
<Headers title={title}></Headers>
<Headers title={"My name is Nikhil"}></Headers>


</div>

}



function Headers({title}){
return <div>
  {title}
</div>
}

export default App

{/* In this the Whole app is getting Re-renders because we have used state in the whole app, now look below to know how we can save 
  Re-rendering*/}




import { useState } from "react";

function App2(){
return (
    <div>
        <Newhead></Newhead>
        <Head title= "My name is Nikhil"></Head>
    </div>
)

}



function Newhead(){
    const [title2, setTitle2] = useState("My name is Nikhil")

function Click(){
    setTitle2("My name is" + Math.random());
}

return <>
<button onClick={Click}>Click here to change</button>
<Head title={title2}></Head>

</>
}


function Head({title}){
    return <div>
        {title}
    </div>
};


export default App2;


{/* In this you can see that only Newhead is getting re-rendered and nothing else
  You can check this in the inspect on chrome through react developer tools */}