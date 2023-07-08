import { useState } from "react";

const FormComponent = ({ setAge }) => {
  const today = formatDate();

  const [day, setDay] = useState("");
  const [dayError, setDayError] = useState({ error: false });
  const [month, setMonth] = useState("");
  const [monthError, setMonthError] = useState({ error: false });
  const [year, setYear] = useState("");
  const [yearError, setYearError] = useState({ error: false });

  const handleSetDay = (e) => {
    const value = parseInt(e.target.value);
    setDay(value);

    if (isNaN(value) || value < 1 || value > 31) {
      setAge({ years: "- -", months: "- -", days: "- -" });
      setDayError({ error: true, message: "Must be a valid day" });
      return;
    }
    setDayError({ error: false });

    if (month !== "" && year !== "")
      attemptSetNewAge(new Date(`${year}-${month}-${value}`));
  };

  const handleSetMonth = (e) => {
    const value = parseInt(e.target.value);
    setMonth(value);
    if (isNaN(value) || value < 1 || value > 12) {
      setAge({ years: "- -", months: "- -", days: "- -" });
      setMonthError({ error: true, message: "Must be a valid month" });
      return;
    }
    setMonthError({ error: false });
    if (day !== "" && year !== "")
      attemptSetNewAge(new Date(`${year}-${value}-${day}`));
  };

  const handleSetYear = (e) => {
    const value = parseInt(e.target.value);
    setYear(value);

    if (isNaN(value) || value < 1 || value > today[0]) {
      setAge({ years: "- -", months: "- -", days: "- -" });
      setYearError({ error: true, message: "Must be in the past" });
      return;
    }
    setYearError({ error: false });
    if (day !== "" && month !== "")
      attemptSetNewAge(new Date(`${value}-${month}-${day}`));
  };

  const attemptSetNewAge = (date) => {
    date = formatDate(date);

    // user still entering date
    if (date === false && (day !== "" || month !== "" || year !== "")) {
      setDayError({ error: true, message: "Must be a valid date" });
      setMonthError({ error: true, message: "" });
      setYearError({ error: true, message: "" });
      setAge({ years: "- -", months: "- -", days: "- -" });
      return false;
    }

    // dates entered but invalid
    if (date === false) return false;
    
    setDayError({ error: false });
    setMonthError({ error: false });
    setYearError({ error: false });
    setAge(calculateAge(`${date[0]}/${date[1]}/${date[2]}`));
  };

  return (
    <div className="date fl smokey-grey-color">
      <div className="date-item">
        <label htmlFor="day" className="fontFacePoppinsBold">DAY</label>
        <input
          id="day"
          name="day"
          type="number"
          onChange={handleSetDay}
          className={`off-black-color fontFacePoppinsBold ${dayError.error ? "error" : ""}`}
          placeholder="DD"
          value={day}
        />
        <span className="light-red-color">{dayError.message}</span>
      </div>
      <div className="date-item">
        <label htmlFor="month" className="fontFacePoppinsBold">MONTH</label>
        <input
          id="month"
          name="month"
          type="number"
          onChange={handleSetMonth}
          className={`off-black-color fontFacePoppinsBold ${monthError.error ? "error" : ""}`}
          placeholder="MM"
          value={month}
        />
        <span className="light-red-color">{monthError.message}</span>
      </div>
      <div className="date-item">
        <label htmlFor="year" className="fontFacePoppinsBold">YEAR</label>
        <input
          id="year"
          name="year"
          type="number"
          onChange={handleSetYear}
          className={`off-black-color fontFacePoppinsBold ${yearError.error ? "error" : ""}`}
          placeholder="YYYY"
          value={year}
        />
        <span className="light-red-color">{yearError.message}</span>
      </div>
    </div>
  );
};

const formatDate = (date) => {
  try {
    date = date ? date : new Date();
    const offset = date.getTimezoneOffset();
    if (isNaN(offset)) return false;

    date = new Date(date.getTime() - offset * 60 * 1000);
    return date.toISOString().split("T")[0].split("-");
  } catch (e) {
    console.log(e);
    return false;
  }
};

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += lastMonth.getDate();
    months--;
  }

  return { years, months, days };
};

export default FormComponent;
