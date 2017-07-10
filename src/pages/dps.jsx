import React from "react";
import Hero from "../components/hero";
import { parseInputText, exampleSword } from "../poe/dps";

export default class Dps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      iteminfoText: "",
      itemInfo: null,
    };
  }

  changeItemInfoText(iteminfoText) {
    this.setState({
      iteminfoText,
      itemInfo: parseInputText(iteminfoText),
    });
  }

  renderItemInfo() {
    const { itemInfo } = this.state;
    if (!itemInfo) {
      return null;
    }
    const error = itemInfo.error;
    if (error) {
      return <div className="notification is-danger">{error}</div>;
    }
    return <div>Iteminfo</div>;
  }

  render() {
    const { iteminfoText } = this.state;
    return (
      <div>
        <Hero title="Dps Calculator" description="Calculate weapon damage" />
        <section className="section">
          <div className="container">
            <div className="columns box">
              <div className="column is-half">
                <textarea
                  name="iteminfoText"
                  className="textarea"
                  rows="10"
                  value={iteminfoText}
                  onChange={e => this.changeItemInfoText(e.target.value)}
                />
                <p>
                  <button
                    className="button is-primary mt2 is-pulled-right"
                    onClick={() => this.changeItemInfoText(exampleSword)}
                  >
                    Set Example Text
                  </button>
                  <button
                    className="button is-warning mt2 mr2 is-pulled-right"
                    onClick={() => this.changeItemInfoText("")}
                  >
                    Clear
                  </button>
                </p>
              </div>
              <div className="column is-half">
                <div className="subtitle">Item Info</div>
                {this.renderItemInfo()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}
