import React, { useRef } from "react";

const FromSearch = () => {
  const textKw = useRef();
  const btOk = useRef();

  const onChangeKw = () => {
    if (textKw.current.value.trim() !== "") {
      btOk.current.disabled = false;
    } else {
      btOk.current.disabled = true;
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <form style={{ textAlign: "center" }}>
        <input
          type="text"
          name="kw"
          placeholder="ค้นหา"
          ref={textKw}
          onInput={onChangeKw}
        />
        &nbsp;
        <button ref={btOk} disabled>
          ตกลง
        </button>
      </form>
    </div>
  );
};

export default FromSearch;
