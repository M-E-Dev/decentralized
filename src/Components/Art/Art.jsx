import { imgArt1, imgArt2, imgArt3, imgArt4, imgArt5 } from "../Images";
import "./Art.scss";
import Item from "./Item/Item";

function Art() {
  const arts = [
    {
      id: 1,
      name: "John Doe",
      src: imgArt1,
      nickname: "CEO",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel ea modi inventore cum minus dolor libero a laudantium",
      socialLinks: [
        {
          id: 1,
          imgSrc: "",
          icon: "<FontAwesomeIcon icon='fab fa-facebook' />",
          href: "https://www.facebook.com/",
          title: "Facebook",
        },
        {
          id: 2,
          imgSrc: "",
          icon: "",
          href: "https://www.linkedin.com/",
          title: "LinkedIn",
        },
      ],
    },
    {
      id: 2,
      name: "John Deo",
      src: imgArt2,
      nickname: "CO-CEO",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel ea modi inventore cum minus dolor libero a laudantium",
      socialLinks: [
        {
          id: 1,
          imgSrc: "",
          href: "https://www.linkedin.com/",
          title: "LinkedIn",
        },
      ],
    },
    {
      id: 3,
      name: "Jhon Doe",
      src: imgArt3,
      nickname: "CO-CEO-2",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel ea modi inventore cum minus dolor libero a laudantium",
      socialLinks: [
        {
          id: 1,
          imgSrc: "",
          href: "https://www.linkedin.com/",
          title: "LinkedIn",
        },
        {
          id: 2,
          imgSrc: "",
          href: "https://www.github.com/",
          title: "Github",
        },
        {
          id: 3,
          imgSrc: "",
          href: "https://www.twitter.com/",
          title: "Ttwitter",
        },
      ],
    },
    {
      id: 4,
      name: "Jhon Doe",
      src: imgArt4,
      nickname: "CO-CEO-2",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel ea modi inventore cum minus dolor libero a laudantium",
      socialLinks: [
        {
          id: 1,
          imgSrc: "",
          href: "https://www.linkedin.com/",
          title: "LinkedIn",
        },
        {
          id: 2,
          imgSrc: "",
          href: "https://www.github.com/",
          title: "Github",
        },
      ],
    },
    {
      id: 5,
      name: "Dohn Joe",
      src: imgArt5,
      nickname: "CO-CEO-2",
      abstract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel ea modi inventore cum minus dolor libero a laudantium",
      socialLinks: [
        {
          id: 1,
          imgSrc: "",
          href: "https://www.linkedin.com/",
          title: "LinkedIn",
        },
        {
          id: 2,
          imgSrc: "",
          href: "https://www.github.com/",
          title: "Github",
        },
      ],
    },
  ];
  return (
    <div className="arts-container">
      <h1 className="title center">Art</h1>
      <div className="arts">
        {arts.map((art) => (
          <>
            <Item key={art.id} art={art} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Art;
