import React from "react";
import "./Detail.css";
import { useStateValue } from "../../StateProvider";
import uuid from "react-uuid";
import DetailInfo from "../Details/DetailInfo/DetailInfo";
function Detail() {
  const [{ detail }, dispatch] = useStateValue();

  return (
    <div className='Detail'>
      <h3 id='login__details'>your login Details</h3>
      {detail?.map((item, idx) => (
        <DetailInfo
          key={uuid()}
          id={idx}
          name={item.name}
          empId={item.empId}
          email={item.email}
          password={item.password}
        />
      ))}
    </div>
  );
}

export default Detail;
