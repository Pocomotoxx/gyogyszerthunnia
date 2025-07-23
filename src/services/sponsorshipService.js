const sponsorshipService = {
  getSponsorships: () => {
    // In a real application, you would fetch sponsorships from a server
    return [
      { id: 1, sponsor: 'Sponsor A', amount: 1000 },
      { id: 2, sponsor: 'Sponsor B', amount: 2000 },
    ];
  },
};

export default sponsorshipService;
