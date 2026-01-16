import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

    navigate("/");
  return (
    <div>
      <h1>Study Planner Dashboard</h1>
      <p>Welcome to Study Planner</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardPage;
