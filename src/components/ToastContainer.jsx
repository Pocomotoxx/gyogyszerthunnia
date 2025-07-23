import React from 'react';
import ToastNotification from './ToastNotification';

const ToastContainer = ({ notifications }) => {
  return (
    <div className="toast-container">
      {notifications.map((notification) => (
        <ToastNotification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default ToastContainer;
