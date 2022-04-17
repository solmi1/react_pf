import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Board() {
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	//로컬스토리지의 데이터 반환
	const getLocalDate = () => {
		//로컬호스트에서 데이터 불러옴
		let data = localStorage.getItem('posts');
		const dummyData = [
			{
				title: '10',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing?',
				plus: <FontAwesomeIcon icon={faPlus} />,
			},
			{
				title: '9',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, rem?',
			},
			{
				title: '8',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore amet quam at quasi animi?',
			},
			{
				title: '7',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti voluptatibus iure inventore?',
			},
			{
				title: '6',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa?',
			},
			{
				title: '5',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa?',
			},
			{
				title: '4',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa?',
			},
			{
				title: '3',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa?',
			},
			{
				title: '2',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa?',
			},
			{
				title: '1',
				content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa?',
			},
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyData;
		}
	};

	//로컬호스트의 데이터를 posts에 저장
	//getLocalDate로 반환된 값을 posts state에 저장
	const [posts, setPosts] = useState(getLocalDate);

	//post 입력창 초기화 함수
	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	//post 추가 함수
	const createPost = () => {
		const inputVal = input.current.value.trim();
		const textareaVal = textarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('내용을 입력 해주세요');
			return;
		}

		setPosts([{ title: inputVal, content: textareaVal }, ...posts]);
		//글 저장 후 인풋창 초기화
		resetPost();
	};

	//post 삭제 함수
	const deletePost = (index) => {
		console.log('삭제할 포스트 순번', index);

		setPosts(posts.filter((_, idx) => idx !== index));
	};

	//글 수정 모드 변경 함수
	const enableUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				//현재 순번에 매칭되는 post객체에 enableUpdate라는 키값에 true값을 대입
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	//글 출력모드 변경 함수
	const disbaleUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	//글 수정 모드 저장 함수
	const saveUpdate = (index) => {
		const inputVal = editInput.current.value.trim();
		const textareaVal = editTextarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 입력해주세요');
			return;
		}

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;

					post.enableUpdate = false;
				}

				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));

		let data = localStorage.getItem('posts');
		JSON.parse(data);
	}, [posts]);

	return (
		<Layout name={'BOARD'}>
			<h1>FAQ's</h1>

			<ul class='btns'>
				<li>
					<a href='#'>FAQ</a>
				</li>
				<li>
					<a href='#'>QNA</a>
				</li>
			</ul>

			<div id='faq'>
				{posts.map((post, idx) => {
					return (
						<ul key={idx}>
							<li>{post.title}</li>
							<li>{post.content}</li>
							{/* <li>{post.plus}</li> */}
						</ul>
					);
				})}
			</div>

			<div id='qna'>
				<div className='box'>
					<input type='text' placeholder='제목을 입력하세요.' ref={input} />
					<br />
					<textarea
						cols='30'
						rows='10'
						placeholder='내용을 입력하세요.'
						ref={textarea}></textarea>

					<div className='btns'>
						<button onClick={resetPost}>Cancel</button>
						<button onClick={createPost}>Send</button>
					</div>
				</div>

				<div className='showBox'>
					{/* posts 갯수만큼 반복을 돌면서 데이터 출력 */}
					{posts.map((post, idx) => {
						return (
							<article key={idx}>
								{post.enableUpdate ? (
									//수정모드

									<>
										<input
											type='text'
											defaultValue={post.title}
											ref={editInput}
										/>
										<br />
										<textarea
											defaultValue={post.content}
											ref={editTextarea}></textarea>

										<div className='btns'>
											<button onClick={() => disbaleUpdate(idx)}>취소</button>
											{/* 수정모드에 저장버튼 클릭시 해당 순서값을 saveUpdate에 전달해 호출 */}
											<button onClick={() => saveUpdate(idx)}>저장</button>
										</div>
									</>
								) : (
									//출력모드

									<>
										<h2>{post.title}</h2>
										<p>{post.content}</p>

										<div className='btns'>
											{/* 수정버튼 클릭시 해당 포스트의 순서값을 enableUpdate함수로 전달 */}
											<button onClick={() => enableUpdate(idx)}>Modify</button>
											<button onClick={() => deletePost(idx)}>Delete</button>
										</div>
									</>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Board;
