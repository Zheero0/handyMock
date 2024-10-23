import React from 'react'
import Main from "../components/Main";

import ProListings from '../components/ProListings';


export const metadata = {
  title: "Handy ⋅ Directory",
};

export default function DirectoryPage() {
  return (
<Main>
  <ProListings/>
  </Main>
  )
}
