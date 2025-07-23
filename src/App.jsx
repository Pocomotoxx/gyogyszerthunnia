import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainLayout from './components/MainLayout';
import useAuth from './hooks/useAuth';
import AdminDashboardPage from './pages/AdminDashboardPage';
import CaregiverDashboardPage from './pages/CaregiverDashboardPage';
import PharmacistDashboardPage from './pages/PharmacistDashboardPage';
import SponsorDashboardPage from './pages/SponsorDashboardPage';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            user ? (
              <MainLayout>
                <Routes>
                  {user.role === 'admin' && <Route path="/dashboard" element={<AdminDashboardPage />} />}
                  {user.role === 'caregiver' && <Route path="/dashboard" element={<CaregiverDashboardPage />} />}
                  {user.role === 'pharmacist' && <Route path="/dashboard" element={<PharmacistDashboardPage />} />}
                  {user.role === 'sponsor' && <Route path="/dashboard" element={<SponsorDashboardPage />} />}
                </Routes>
              </MainLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
