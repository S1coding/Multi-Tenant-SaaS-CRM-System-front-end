import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterAdminPage from './pages/access/RegisterAdminTab';
import LoginPage from './pages/access/LoginPage';
import ContactsPage from './pages/contacts/ContactsPage';
import ReportsPage from './pages/reports/ReportsPage';
import RegisterPage from './pages/access/RegisterPage';
import DealsPage from './pages/deals/DealsPage';
import TasksPage from './pages/tasks/TasksPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import SettingsPage from './pages/settings/SettingsPage';
import VerifyEmail from './pages/access/verifyEmail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}/>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/exit" element={<Navigate to="/login" replace />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;