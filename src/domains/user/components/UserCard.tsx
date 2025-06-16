import React from 'react';

type UserCardProps = {
  name: string;
  email: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, email }) => (
  <div style={{ border: '1px solid #ccc', padding: 8, borderRadius: 4 }}>
    <strong>{name}</strong>
    <div>{email}</div>
  </div>
);

export default UserCard; 