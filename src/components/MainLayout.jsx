import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Telemedicine App</h1>
      </header>
      <aside>
        <nav>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
