import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Signup from "./signup";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };


  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>
      {!account && (
        <div>
          <Link to="/Kanbas/signup" className="btn btn-warning w-100">
          Users
        </Link>
          <Link to="/Kanbas/signin" className="btn btn-warning w-100">
          Users
        </Link>
        </div>
      )}
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
        <button onClick={save}>
        Save
    </button>
    <button onClick={signout}>
    Signout
  </button>
    <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
    Users
  </Link>
    </div>
  );
}
export default Account;