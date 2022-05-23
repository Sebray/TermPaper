import {Routes, Route} from 'react-router-dom';
import './App.css'
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {LoginPage} from './pages/LoginPage'
import {SignUpPage} from './pages/SignUpPage'
import {ResumesPage} from './pages/ResumesPage'
import {VacanciesPage} from './pages/VacanciesPage'
import {Layout} from './components/Layout'
import {AuthProvider} from "./hocs/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/resumes" element={<ResumesPage/>}/>
                    <Route path="/vacancies" element={<VacanciesPage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;