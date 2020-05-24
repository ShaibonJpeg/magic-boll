import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
let arr = ["I",
					"go",
					"home",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go"];


	function handleClick() {
	document.getElementById('demo').innerText = arr[0 + Math.random() * (19)];
	return true;
}

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<Group>
		<Button content = "Кнопка" mode="commerce" onclick={handleClick}/>

		<p id="demo" color = "RED">   This element has extra spacing   and contains <span>a span element</span>.</p>

		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
