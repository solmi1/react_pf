import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common 컴포넌트
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main 컴포넌트
import Visual from './components/main/Visual';

//sub 컴포넌트
import About from './components/sub/About';
import Board from './components/sub/Board';
import Community from './components/sub/Community';
import Contact from './components/sub/Contact';
import Portfolio from './components/sub/Portfolio';
import Service from './components/sub/Service';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					{/* 메인에만 적용되는 header */}
					<Header type={'main'} />
					<Visual />
				</Route>

				<Route path='/'>
					{/* 서브에만 적용되는 header */}
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/about' component={About} />
			<Route path='/board' component={Board} />
			<Route path='/community' component={Community} />
			<Route path='/contact' component={Contact} />
			<Route path='/portfolio' component={Portfolio} />
			<Route path='/service' component={Service} />

			<Footer />
		</>
	);
}

export default App;
