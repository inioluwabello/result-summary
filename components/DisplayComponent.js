const DisplayComponent = ({ age }) => {
  return (
    <>
      <div className="space-between mt-3">
        <hr className="line" />
        <div className="icon purple-bg">
          <img src="/assets/images/icon-arrow.svg" alt="icon" />
        </div>
      </div>
      <div className="relative">
        <div className="icon-mobile purple-bg">
          <img src="/assets/images/icon-arrow.svg" alt="icon" />
        </div>
      </div>

      <div className="age-display fontFaceRobotoExtraBoldItalic">
        <h1>
          <div className="fl">
            <div className="purple-color">{age.years}</div>
            <div className="label">{setText(age.years, 'years')}</div>
          </div>
        </h1>
        <h1>
          <div className="fl">
            <div className="purple-color">{age.months}</div>
            <div className="label">{setText(age.months, 'months')}</div>
          </div>
        </h1>
        <h1>
          <div className="fl">
            <div className="purple-color">{age.days}</div>
            <div className="label">{setText(age.days, 'days')}</div>
          </div>
        </h1>
      </div>
    </>
  );
};

const setText = (value, text) => {
  if (parseInt(value) === 1) return text.substr(0, text.length - 1);
  return text;
}
export default DisplayComponent;
