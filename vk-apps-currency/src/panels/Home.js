import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, Group, Div, PanelHeader } from '@vkontakte/vkui';

//const express = require("express");
//const app = express();
//const jsonParser = express.json();
//app.get("test.php", function(request,response))

const Home = ({ id }) => (

	<Panel id={id}>
		<PanelHeader>POKOR.ME</PanelHeader>
		<Group>
			<p align="center"><font face="comic sans ms"  color="#FF002E">Привет, меня зовут Белка! Пополни банк VK коинами и как только наберётся нужная сумма, атоматическая кормушка покормит меня!</font></p>
		</Group>
		<Group title="Общий банк (цель: 1.000.000,000)">
			<Div>
				<a>
					Собрано:
				</a>
			</Div>
			<Div>
				<a>
					Осталось:
				</a>
			</Div>
		</Group>

		<Group title="Видео трансляция">
			<Div>
				<iframe
					src="https://ipeye.ru/ipeye_service/api/iframe.php?iframe_player=1&dev=517fe9dbf4b244aaa0330cf582de9932&autoplay=0&archive=1"
					width="350" height="210" frameBorder="0" seamless="seamless" title="video" allowFullScreen>Ваш браузер не
					поддерживает фреймы!
				</iframe>
			</Div>
		</Group>



		<Group>
			<Div>
				<Button size="xl" level="commerce" component="a" target="_blank"	href={"https://vk.com/coin#x438360166_100000000_2000000000_1"}>
					Пополнить общий банк
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" component="a" target="_blank"	href={"https://money.yandex.ru/to/410015636437467/100"}>
					Пожертвовать разработчикам
				</Button>
			</Div>
		</Group>
		<p><font color="#a9a9a9">Всего пользователей:</font></p>
		<p><font color="#a9a9a9">Онлайн:</font></p>
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
