import { useState } from 'react';
import '../css-components/Form.css'

export default function Form(props) {
	const { posts, setPosts, count, setCount } = props;
	const [text, setText] = useState('');
	return (
			<form action="#" className="Form__form" 
				onSubmit={(event) => {
					event.preventDefault();
					text && setPosts([...posts, text]);
					setText('')
					document.querySelector('.Form__inp').value = '';
					setCount(count + 1)
				}}>
				<input className="Form__inp" type="text" 
					value={text} 
					onChange={(event) => {
						setText(event.target.value)
					}}
				/>
				<button className="Form__btn">Add</button>
			</form>
		)
};