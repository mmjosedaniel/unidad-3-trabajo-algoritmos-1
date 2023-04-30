import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Exercise1 from './pages/Exercise-1';
import Exercise2 from './pages/Exercise-2';

function App() {
  return (
    <Layout>
			<h1>Unidad 2:</h1>
			<Routes>
				<Route path="exercise-1" element={<Exercise1 />} />
				<Route path="exercise-2" element={<Exercise2 />} />

				<Route path="*" element={<Home />} />

			</Routes>

    </Layout>
  );
}

export default App;
