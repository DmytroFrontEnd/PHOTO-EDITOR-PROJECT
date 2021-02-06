const Range = (props) => {
  return (
    <div className="range">
      <div>
        {props.array.map((el, index) => {
          return (
            <div key={index}>
              <div>{el.name}</div>
              <div>
                <label>{el.value}</label>
                <input
                  min={el.min}
                  max={el.max}
                  onChange={(e) => props.inputHandler(e, index)}
                  value={el.value}
                  type="range"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Range;
