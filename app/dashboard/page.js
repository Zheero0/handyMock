
import React from 'react'
import Dashboard from '../components/Dashboard';
import Main from '../components/Main';

import DashboardAuth from '../components/DashboardAuth';

    export const metadata = {
      title: "handy ⋅ Dashboard",
    };

export default function DashboardPage() {

  return (
    <Main>
      <DashboardAuth />
    </Main>
  );
}
