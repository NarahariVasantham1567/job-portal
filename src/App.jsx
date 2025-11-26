import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import {
  AboutPage,
  AllCompanies,
  Applications,
  Billings,
  BlogList,
  Contact,
  CustomerSupports,
  DashboardPage,
  EmployersProfile,
  ErrorPage,
  FAQs,
  FindCandidate,
  LandingPage,
  Logout,
  MyJobs,
  Overview,
  PostJob,
  Settings,
  TermsAndConditions,
} from './pages';

import Header from './components/Header/Header';
import SavedCandidate from './pages/SavedCandidate';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/find-candidate' element={<FindCandidate />} />
        <Route path='/dashboard/' element={<DashboardPage />}>
          <Route index path='overview' element={<Overview />} />
          <Route path='employee-profile' element={<EmployersProfile />} />
          <Route path='post-job' element={<PostJob />} />
          <Route path='my-jobs' element={<MyJobs />} />
          <Route path='saved-candidate' element={<SavedCandidate />} />
          <Route path='billings' element={<Billings />} />
          <Route path='all-companies' element={<AllCompanies />} />
          <Route path='settings' element={<Settings />} />
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route path='/my-jobs' element={<MyJobs />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/customer-support' element={<CustomerSupports />} />
        <Route path='/terms-conditions' element={<TermsAndConditions />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
