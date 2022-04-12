import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function About() {
	const path = process.env.PUBLIC_URL;
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			setMembers(json.data.data);
		});
	});

	return (
		<Layout name={'ABOUT'}>
			<div className='memberList'>
				<h1>OUR TEAM</h1>
				<p>The Leadership Team</p>
				{members.map((member, idx) => {
					return (
						<article key={idx}>
							<img src={`${path}/img/${member.pic}`} />
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default About;
