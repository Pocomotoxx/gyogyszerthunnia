const notificationService = {
  getNotifications: () => {
    // In a real application, you would fetch notifications from a server
    return [
      { id: 1, message: 'Your medication request has been approved.' },
      { id: 2, message: 'You have a new message from your caregiver.' },
    ];
  },
};

export default notificationService;
