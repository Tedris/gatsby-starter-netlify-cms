import React from 'react'

export default class Chatbot extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showBot: false };

        this.toggleBot = this.toggleBot.bind(this);
    }


    toggleBot() {
        this.setState((state) => ({ showBot: !state.showBot}));
    }

    render() {
        return (
            <div>
                {this.state.showBot ? 
                <div className="chatbot">
                    <iframe
                        title="DialogFlow IFrame"
                        allow="microphone;"
                        width="350"
                        height="430"
                        src="https://console.dialogflow.com/api-client/demo/embedded/697a23f1-f037-4ffe-99bc-3b8052a5aee0">
                    </iframe>
                </div>
                 : null}
                <button className="botButton" onClick={this.toggleBot}>
                    CHAT BOT
                </button>
            </div>
        );
    }
}