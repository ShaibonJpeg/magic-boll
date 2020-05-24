import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
	const [activePanel, setActivePanel] = useState(index);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel="mainPanel">
                <Panel id="mainPanel">
                    <PanelHeader>The Toxic Detector</PanelHeader>
                    <Group>
                        <FormLayout>
                            <Input type="text" top="Your text"  value={this.state.text} onChange={this.changeText}/>
                            <CellButton level="danger" onClick={this.clearText}>Clear text</CellButton>
                        </FormLayout>
                    </Group>

                    <Group title="Results">
                        {content}
                    </Group>
                </Panel>
            </View>
	);
}

export default App;
