import React from 'react';
import User from './User';

export default function Users() {
  return(
    <div className="right">
      <User
        src="http://lager.капитаны-россии.рф/images/man.png"
        alt="prince"
        name="Name_prince"
      />
      <div className="users__block">
        <User
          src="http://lager.капитаны-россии.рф/images/man.png"
          alt="prince"
          name="Name prince"
          min
        />
        <User
          src="http://lager.капитаны-россии.рф/images/man.png"
          alt="prince"
          name="Name prince"
          min
        />
        <User
          src="http://lager.капитаны-россии.рф/images/man.png"
          alt="prince"
          name="Name prince"
          min
        />
      </div>
    </div>
  );
}