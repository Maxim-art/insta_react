import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="https://avatars.mds.yandex.net/get-pdb/25978/6e9e4698-0863-4dfd-a25b-25b759cbcc2b/s1200?webp=false"
        alt="Man"
        name="some_name" />
      <Palette/>
    </div>
  )
}

export default Profile;