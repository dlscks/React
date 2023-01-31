import { useEffect, useRef } from "react";

const MyuseRef002 = () => {
  const nameRef = useRef("");

  const handleBtn = () => {
    console.log(nameRef.current);
    console.log(nameRef.current.value);
    nameRef.current.value = "";
  };

  //포커스 맞추기
  //렌더링이 다 발생되고 나서 마지막으로 실행이 된다.
  useEffect(() => {
    nameRef.current.focus();
  });

  return (
    <div>
      <input type="text" placeholder="이름입력" ref={nameRef} />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
