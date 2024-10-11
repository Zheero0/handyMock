import React from 'react'
import Dashboard from '../components/Dashboard';
import Main from '../components/Main';
import Login from '../components/Login';

    export const metadata = {
      title: "Marketplace ⋅ Dashboard",
    };

export default function DashboardPage() {
    const isAuthenticated = false;

    let children = (
        <Login/>
    )
    if (isAuthenticated){
        children = <Dashboard />;
    }
  return (
    <Main>
        {children}
    </Main>
  )
}
