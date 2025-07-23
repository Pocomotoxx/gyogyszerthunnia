# Telemedicine Application

This is a telemedicine application that allows patients, caregivers, pharmacists, and sponsors to collaborate on therapeutic processes.

## Features

- **User Roles:** The application supports multiple user roles, including Admin, Caregiver, Pharmacist, and Sponsor.
- **Therapy Management:** Users can manage therapy sheets, log therapy events, and track medication administration.
- **Medication Requests:** Users can request new medications.
- **Communication:** The application includes a chat feature for communication between users.
- **Notifications:** Users receive notifications for important events.
- **Admin and Sponsorship:** The application includes an admin dashboard for managing the application and a sponsorship section for managing sponsorships.

## Installation

### Frontend

1. Navigate to the `telemedicine-app` directory.
2. Install the dependencies: `npm install`
3. Start the development server: `npm run dev`

### Backend

1. Make sure you have a PHP server and a MySQL database set up.
2. Create a database and update the connection details in `backend/db/connect.php`.
3. Run the `backend/db/setup.php` script to create the necessary tables.

## Usage

1. Register a new user using the registration form.
2. Log in with your credentials.
3. You will be redirected to the dashboard corresponding to your user role.
4. Explore the different features of the application.
