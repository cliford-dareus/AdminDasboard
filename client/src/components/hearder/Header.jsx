import React from 'react';

const Header = ({ title, subTitle }) => {
  return (
    <div>
        <p>{title}</p>
        <p>{subTitle}</p>
    </div>
  )
}

export default Header;