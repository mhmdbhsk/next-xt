import { FC } from 'react';

const Profile: FC = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className='bg-gray-300' key={item}>
          <input type='checkbox' value={item} />
        </div>
      ))}
    </div>
  );
};

export default Profile;
