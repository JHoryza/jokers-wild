import React from 'react';

class PlayerHand extends React.Component {

    renderHand(hand, i) {
        return (
            <div>
                <div className="cards">
                    <p>Value: {hand.getValue()} {hand.getStatus()}</p>
                    {hand.getCards().map((card, j) => (
                        <img className="card" src={card.image} alt={card.code} key={j}></img>
                    ))}
                </div>
                {i === this.props.activeHand ? <span>^</span> : ""}
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="hand">
                    {this.props.hands.map((hand, i) => (
                        <div key={i}>
                            {this.renderHand(hand, i)}
                        </div>
                    ))}
                </div>
                <h3>Your Hand</h3>
            </div>
        );
    }
}

export default PlayerHand;