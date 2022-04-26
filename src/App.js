import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as types from './redux/actionType';

import './scss/style.scss';

//common 컴포넌트
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main 컴포넌트
import Main from './components/main/Main';

//sub 컴포넌트
import About from './components/sub/About';
import Board from './components/sub/Board';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Portfolio from './components/sub/Portfolio';
import Service from './components/sub/Service';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.FLICKR.start, opt: { type: 'interest' } });
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header />
					<Main />
				</Route>

				<Route path='/'>
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
