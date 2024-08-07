import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const IconsSocial = ({ icons }) => {
  return (
    <>
      {icons.map((item) => (
        <FontAwesomeIcon
          key={item.title}
          icon={item.icon}
          style={{
            border: `1px solid ${item.color}`,
            color: item.color,
            marginRight: "10px",
            "&:hover": { background: item.color },
          }}
          className="general-icon"
        />
      ))}
    </>
  );
}

export default IconsSocial
