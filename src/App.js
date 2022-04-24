import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common 컴포넌트
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main 컴포넌트
import Main from './components/main/Main';
import Visual from './components/main/Visual';
import Ser from './components/main/Ser';
import Ab from './components/main/Ab';
import Sat from './components/main/Sat';
import Cont from './components/main/Cont';
import Por from './components/main/Por';

//sub 컴포넌트
import About from './components/sub/About';
import Board from './components/sub/Board';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Portfolio from './components/sub/Portfolio';
import Service from './components/sub/Service';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header />
					{/* <Main /> */}
					<Visual />
					<Ser />
					<Ab />
					<Sat />
					<Cont />
					<Por />
				</Route>

				<Route path='/'>
					{/* 서브에만 적용되는 header */}
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/about' component={About} />
			<Route path='/board' component={Board} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/portfolio' component={Portfolio} />
			<Route path='/service' component={Service} />

			<Footer />
		</>
	);
}

export default App;
