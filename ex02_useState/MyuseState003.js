import { useState } from "react";

const MyuseState003 = () => {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");
  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    setNames([input, ...names]); //최근 입력한값이 위에서부터 출력
    //setNames([input, ...names]); // 최근 입력한 값이 아래부터 출력
    setInput("");
  };

  return (
    <div>
      <input type="text" id="fname" onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/* {names.map((value, index) => {
        //{}할 시 return이 필요, ()할 시 return 필요없음
        return <p key={index}>{value}</p>;
      })} */}

      {names.map((value, index) => (
        //{}할 시 return이 필요, ()할 시 return 필요없음
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default MyuseState003;
