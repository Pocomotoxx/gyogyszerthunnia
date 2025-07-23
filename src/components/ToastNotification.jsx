import React from 'react';

const ToastNotification = ({ notification }) => {
  return (
    <div>
      <p>{notification.message}</p>
    </div>
  );
};

export default ToastNotification;
