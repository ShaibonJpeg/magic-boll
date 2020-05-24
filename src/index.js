import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
// Init VK  Mini App
bridge.send("VKWebAppInit");

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

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
