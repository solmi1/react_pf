import Layout from '../common/Layout';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Service() {
	return (
		<>
			<Layout name={'SERVICE'}>
				<div className='tit'>
					<h1>WEB DEVELOPMENT</h1>
				</div>

				<div className='wrap'>
					<article>
						<h2>WEB DESIGN</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
							non voluptate? Iusto placeat veniam harum alias id et velit
							incidunt! <br />
							<br />
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea harum
							consequuntur amet non voluptatibus dolorum dolor similique,
							mollitia aut quod! <br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
							dicta repellat laboriosam, nulla fugiat eveniet ipsam repudiandae
							cumque illo ad aspernatur, amet impedit rerum voluptatibus
							suscipit nostrum magnam molestiae assumenda soluta ex non quod
							odio ducimus? <br />
							<br />
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
							sapiente, vero minus molestiae porro cum.
						</p>
						<a className='btn' href='#plan'>
							SEE PRICING <FontAwesomeIcon icon={faArrowRight} />
						</a>
					</article>
					<div className='img'></div>
				</div>

				<div className='wrap'>
					<article>
						<h2>LOGO DESIGN</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
							non voluptate? Iusto placeat veniam harum alias id et velit
							incidunt! <br />
							<br />
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea harum
							consequuntur amet non voluptatibus dolorum dolor similique,
							mollitia aut quod! <br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
							dicta repellat laboriosam, nulla fugiat eveniet ipsam repudiandae
							cumque illo ad aspernatur, amet impedit rerum voluptatibus
							suscipit nostrum magnam molestiae assumenda soluta ex non quod
							odio ducimus? <br />
							<br />
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
							sapiente, vero minus molestiae porro cum.
						</p>
						<a className='btn' href='#plan'>
							SEE PRICING <FontAwesomeIcon icon={faArrowRight} />
						</a>
					</article>
					<div className='img'></div>
				</div>

				<div id='plan'>
					<h1>
						Discover Our plans <br />
						Kind right plan for you
					</h1>

					<ul className='btns'>
						<li>
							<p>PRICE</p>
						</li>
						<li>
							<a href='#logo' className='on'>
								Logo Design
							</a>
						</li>
						<li>
							<a href='#banner'>Banner Design</a>
						</li>
						<li>
							<a href='#clipping'>Clipping Path</a>
						</li>
						<li>
							<a href='#brochure'>Brochure</a>
						</li>
						<li>
							<a href='#flyer'>Flyer</a>
						</li>
						<li>
							<a href='#retouching'>Retouching</a>
						</li>
					</ul>

					<div id='logo' className='on'>
						<ul>
							<li>
								<h2>STARTER</h2>
							</li>
							<li>
								<p>$50</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>2</strong>
							</li>
							<li>
								Delivery time <strong>5 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>BASIC</h2>
							</li>
							<li>
								<p>$100</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>5</strong>
							</li>
							<li>
								Delivery time <strong>3 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>PROFESSIONAL</h2>
							</li>
							<li>
								<p>$300</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>15</strong>
							</li>
							<li>
								Delivery time <strong>1 Days</strong>
							</li>
						</ul>
					</div>

					<div id='banner'>
						<ul>
							<li>
								<h2>STARTER</h2>
							</li>
							<li>
								<p>$30</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>2</strong>
							</li>
							<li>
								Delivery time <strong>5 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>BASIC</h2>
							</li>
							<li>
								<p>$80</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>5</strong>
							</li>
							<li>
								Delivery time <strong>3 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>PROFESSIONAL</h2>
							</li>
							<li>
								<p>$250</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>15</strong>
							</li>
							<li>
								Delivery time <strong>1 Days</strong>
							</li>
						</ul>
					</div>

					<div id='clipping'>
						<ul>
							<li>
								<h2>STARTER</h2>
							</li>
							<li>
								<p>$80</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>2</strong>
							</li>
							<li>
								Delivery time <strong>5 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>BASIC</h2>
							</li>
							<li>
								<p>$120</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>5</strong>
							</li>
							<li>
								Delivery time <strong>3 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>PROFESSIONAL</h2>
							</li>
							<li>
								<p>$350</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>15</strong>
							</li>
							<li>
								Delivery time <strong>1 Days</strong>
							</li>
						</ul>
					</div>

					<div id='brochure'>
						<ul>
							<li>
								<h2>STARTER</h2>
							</li>
							<li>
								<p>$50</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>2</strong>
							</li>
							<li>
								Delivery time <strong>5 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>BASIC</h2>
							</li>
							<li>
								<p>$100</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>5</strong>
							</li>
							<li>
								Delivery time <strong>3 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>PROFESSIONAL</h2>
							</li>
							<li>
								<p>$300</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>15</strong>
							</li>
							<li>
								Delivery time <strong>1 Days</strong>
							</li>
						</ul>
					</div>

					<div id='flyer'>
						<ul>
							<li>
								<h2>STARTER</h2>
							</li>
							<li>
								<p>$90</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>2</strong>
							</li>
							<li>
								Delivery time <strong>5 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>BASIC</h2>
							</li>
							<li>
								<p>$120</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>5</strong>
							</li>
							<li>
								Delivery time <strong>3 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>PROFESSIONAL</h2>
							</li>
							<li>
								<p>$300</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>15</strong>
							</li>
							<li>
								Delivery time <strong>1 Days</strong>
							</li>
						</ul>
					</div>
					<div id='retouching'>
						<ul>
							<li>
								<h2>STARTER</h2>
							</li>
							<li>
								<p>$20</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>2</strong>
							</li>
							<li>
								Delivery time <strong>5 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>BASIC</h2>
							</li>
							<li>
								<p>$80</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>5</strong>
							</li>
							<li>
								Delivery time <strong>3 Days</strong>
							</li>
						</ul>

						<ul>
							<li>
								<h2>PROFESSIONAL</h2>
							</li>
							<li>
								<p>$250</p>
							</li>
							<li>Vector File</li>
							<li>High Resolution</li>
							<li>Logo Transparency</li>
							<li>Source File</li>
							<li>
								Revisions <strong>15</strong>
							</li>
							<li>
								Delivery time <strong>1 Days</strong>
							</li>
						</ul>
					</div>
				</div>

				<NavLink to='/contact' className='btn'>
					ORDER
				</NavLink>
			</Layout>
		</>
	);
}

export default Service;
