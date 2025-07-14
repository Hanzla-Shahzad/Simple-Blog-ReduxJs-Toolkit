import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../thunks/blogThunk";

export default function MainData() {
  const state = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      <ul>
        {state.data &&
          state.data.map((curElem) => (
            <li key={curElem.id}>
              <p>{curElem.id}</p>
              <div style={{ fontWeight: "bold" }}>{curElem.title}</div>
              <div>{curElem.body}</div>
            </li>
          ))}
      </ul>
    </>
  );
}
