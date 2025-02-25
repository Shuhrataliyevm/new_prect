import  { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PraductDetail from '@/components/ProductDetail';
import Tracking from './pages/Navbar/Tracking';
import Empty from '@/components/Empty';
import Layout from '@/components/layout/Layout';
import Abode from './pages/Navbar/Abode';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Department from '@/pages/Navbar/Department';
import Chosen from './pages/Navbar/Chosen';
import Payment from '@/pages/Navbar/Payment';
import Survey from '@/pages/Navbar/Survey';


function App() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout setSearch={setSearch} setModal={setModal} modal={modal}/>}>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/department" element={<Department />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/chosen" element={<Chosen />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path='/empty' element={<Empty />} />
          <Route path="/abode" element={<Abode />} />
          <Route path='/product/:id' element={<PraductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>

  )
}

export default App;
