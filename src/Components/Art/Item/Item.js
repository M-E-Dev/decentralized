import Social from "../Social/Social";
import "./Item.scss";

function Item(...props) {
  const { art } = props[0];
  console.log("art.socialLinks => ", art.socialLinks);
  return (
    <div className="Item">
      <div className="art-img-container">
        <img className="art-img" src={art.src} alt="logo1" />
      </div>
      <div className="name">{art.name}</div>
      <div className="nickname">{art.nickname} </div>
      <div className="abstract">{art.abstract}</div>
      <div className="social-medias">
        {art.socialLinks.map((social) => (
          <Social social={social} />
        ))}
      </div>
    </div>
  );
}

export default Item;
