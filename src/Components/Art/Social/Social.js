import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Social.scss";

function Social(social) {
  return (
    <div className="social">
      <FontAwesomeIcon icon={social.icon} />
    </div>
  );
}

export default Social;
