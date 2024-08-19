import "../../css/Card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={card.img} alt="image" />
        <div className="heart_rates">
          <div className="heartRate">
            <div className="heart_img">
              <img src={card.img2} alt="icon" />
            </div>
            <div className="values">{card.value} <span>{card.unit}</span></div>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <div className="Activities">{card.activityType}</div>
        <div className="activites-content">{card.activityDescription}</div>
      </div>
    </div>
  );
};
export default Card;
