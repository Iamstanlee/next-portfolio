import { useState } from "react";

interface ITooltip {
  text?: string;
  isPrimary?: boolean;
  width?: string;
}

const Tooltip: React.FC<ITooltip> = ({ children, text, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="tooltip-container">
      <div className={show ? "tooltip-box visible" : "tooltip-box"}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
