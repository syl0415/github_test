import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/fix/Header';
import ReportReviews from './components/review/ReportReviews';
import ReviewForm from './components/review/ReviewForm';
import SubReviews from './components/review/SubReviews';
import TeamReviews from './components/review/TeamReviews';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/team/:teamId" element={<TeamReviews />} />
          <Route path="/sub/:userId" element={<SubReviews />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/report" element={<ReportReviews />} />


        </Routes>
      </div>
    </div>
  );
}


export default App;
