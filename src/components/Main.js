import React, { useState } from "react";

export default function Main(props) {
 
  const handleOnChange = (event) => {
   setText(event.target.value);
   setWordCount(text.split(' ').length);  
  }
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  return (
    <>
      <div className="flex justify-center flex-col items-center h-[100vh] ">
        <span className="text-3xl  mb-10 font-bold text-white">{props.heading}</span>
        <div className="show flex">
        <textarea  rows="10" cols="90" className="textArea p-3 focus:outline-none mr-5" onChange={handleOnChange} placeholder="Enter text here"></textarea>
        <div className="res flex flex-col">
        <div className="words w-44 h-fit bg-white  m-3 pt-2 pb-2 text-center">
          <span className="text-md">WORDS</span>
            <hr className="bg-black h-0.5"/>
        <span className="word text-xl text-blue-800 font-bold">{wordCount}</span>  
        </div>
        <div className="words w-44 h-fit bg-white  m-3 pt-2 pb-2 text-center">
          <span className="text-md">CHARACTERS</span>
            <hr className="bg-black h-0.5"/>
        <span className="text-xl text-blue-800 font-bold">{text.split(' ').join('').length}  </span>  
        </div>
        <div className="words w-44 h-fit bg-white  m-3 pt-2 pb-2 text-center">
          <span className="text-md">SENTENCES</span>
            <hr className="bg-black h-0.5"/>
        <span className="text-xl text-blue-800 font-bold">{text.split(/[.?!]+/g).length-1}</span> 
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
