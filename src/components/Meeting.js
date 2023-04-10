import React, { useState } from "react";
import Header from "./Header";
import "./Meeting.css";

function Meeting() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState([]);
  // const [sample, setSample] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newSchedule = { date: date, time: time };

    if (
      data.some(
        (item) =>
          item.date === newSchedule.date && item.time === newSchedule.time
      )
    ) {
      alert("Slot Full. Please Book another Slot");
    } else {
      alert(`Slot confirmed on ${date} ${time}`);
      setData([newSchedule, ...data]);
    }
  };

  return (
    <div className="meeting_container">
      <div className="meeting_header">
        <Header />
      </div>
      <form onSubmit={(e) => submitForm(e)} className="formContainer">
        <h2> Schedule Meeting Date & Time </h2>
        <div className="user_input_container">
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          {/* <input
            type="number"
            onChange={(e) => setTime(e.target.value)}
            // step="3600"
            required
            min="9"
            max="18"
          /> */}
          {/* <input
            type="time"
            onChange={(e) => setTime(e.target.value)}
            step="3600"
            required
            min="09:00"   disabled hidden
            max="18:00"
          /> */}
          <select
            className="select_container"
            required
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="" hidden>
              Select Time
            </option>
            <option disabled>04:00</option>
            <option disabled>05:00</option>
            <option disabled>06:00</option>
            <option disabled>07:00</option>
            <option disabled>08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option disabled>18:00</option>
            <option disabled>19:00</option>
            <option disabled>20:00</option>
            <option disabled>21:00</option>
          </select>
          <button type="submit" className="btn-1">
            check Schedule <br /> and confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default Meeting;
