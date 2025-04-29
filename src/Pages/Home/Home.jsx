import { useState } from 'react';
import "../Home/Home.css";
import Left from "../../Components/LeftSide/Left";
import Middle from "../../Components/MiddleSide/Middle";
import Right from '../../Components/RightSide/Right';
import Nav from '../../Components/Navigation/Nav';
import moment from 'moment/moment';

// These will need to be created in the assets folder
import Profile from "../../assets/profile.jpg";
import img1 from "../../assets/Post Images/img1.jpg";
import img2 from "../../assets/Post Images/img2.jpg";
import img3 from "../../assets/Post Images/img3.jpg";
import img4 from "../../assets/Post Images/img4.jpg";
import img5 from "../../assets/Post Images/img5.jpg";
import img6 from "../../assets/Post Images/img6.jpg";

import DPimg1 from "../../assets/DP/img1.jpg";
import DPimg2 from "../../assets/DP/img2.jpg";
import DPimg3 from "../../assets/DP/img3.jpg";
import DPimg4 from "../../assets/DP/img4.jpg";
import DPimg5 from "../../assets/DP/img5.jpg";
import DPimg6 from "../../assets/DP/img6.jpg";

import cover from "../../assets/Info-Dp/img-3.jpg";

import Cover1 from "../../assets/Friends-Cover/cover-1.jpg";
import Cover2 from "../../assets/Friends-Cover/cover-2.jpg";
import Cover3 from "../../assets/Friends-Cover/cover-3.jpg";
import Cover5 from "../../assets/Friends-Cover/cover-5.jpg";
import Cover7 from "../../assets/Friends-Cover/cover-7.jpg";
import Cover8 from "../../assets/Friends-Cover/cover-8.jpg";
import Cover9 from "../../assets/Friends-Cover/cover-9.jpg";

import Uimg1 from "../../assets/User-post/img1.jpg";
import Uimg2 from "../../assets/User-post/img2.jpg";
import Uimg3 from "../../assets/User-post/img3.jpg";

const Home = ({ setFriendsProfile }) => {
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Chris Roberts",
      profilepicture: DPimg1,
      img: img1,
      datetime: moment("20230131", "YYYYMMDD").fromNow(),
      body: "Just launched my new React component library on npm! Check it out: react-awesome-components 🎉",
      like: 258,
      comment: 43,
      unFilledLike: true,
      coverpicture: Cover1,
      userid: "@chris_dev",
      ModelCountryName: "USA",
      ModelJobName: "Senior Frontend Developer",
      ModelJoinedDate: "Joined in 2021-02-28",
      followers: 1478
    },
    {
      id: 2,
      username: "Emily Zhang",
      profilepicture: DPimg2,
      img: img2,
      datetime: moment("20230605", "YYYYMMDD").fromNow(),
      body: "Debugging session turned into a complete app architecture overhaul. Sometimes that's just how it goes 😅",
      like: 340,
      comment: 52,
      coverpicture: Cover2,
      userid: "@emily_codes",
      ModelCountryName: "Canada",
      ModelJobName: "Software Engineer",
      ModelJoinedDate: "Joined in 2020-01-17",
      followers: 2730
    },
    {
      id: 3,
      username: "Mark Thompson",
      profilepicture: DPimg3,
      img: img3,
      datetime: moment("20230813", "YYYYMMDD").fromNow(),
      body: "Who else is attending ReactConf this year? Let's organize a meetup! 🤝",
      like: 453,
      comment: 87,
      coverpicture: Cover3,
      userid: "@mark_react",
      ModelCountryName: "UK",
      ModelJobName: "React Developer",
      ModelJoinedDate: "Joined in 2022-03-01",
      followers: 892
    },
    {
      id: 4,
      username: "clem",
      profilepicture: Profile,
      img: Uimg1,
      datetime: moment("20230310", "YYYYMMDD").fromNow(),
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
      like: 22,
      comment: 3,
      coverpicture: cover,
      userid: "@cle98",
      ModelCountryName: "India",
      ModelJobName: "Web Developer in Google",
      ModelJoinedDate: "Joined in 2023-08-12",
      followers: 5000
    },
    {
      id: 5,
      username: "Trent Reznor",
      profilepicture: DPimg4,
      img: img4,
      datetime: moment("20200101", "YYYYMMDD").fromNow(),
      body: "Working on the new film score while Nine Inch Nails rehearses for the tour. The line between beautiful and chaotic is where the most interesting sounds live. 🎹",
      like: 28044,
      comment: 3421,
      coverpicture: Cover5,
      userid: "@trent_reznor",
      ModelCountryName: "USA",
      ModelJobName: "Musician & Composer",
      ModelJoinedDate: "Joined in 2023-04-15",
      followers: 1205000
    },
    {
      id: 6,
      username: "clem",
      profilepicture: Profile,
      img: Uimg2,
      datetime: moment("20230618", "YYYYMMDD").fromNow(),
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
      like: 84,
      comment: 3,
      coverpicture: cover,
      userid: "@clem98",
      ModelCountryName: "India",
      ModelJobName: "Web Developer in Google",
      ModelJoinedDate: "Joined in 2023-08-12",
      followers: 5000
    },
    {
      id: 7,
      username: "Thom Yorke",
      profilepicture: DPimg5,
      img: img5,
      datetime: moment("20230505", "YYYYMMDD").fromNow(),
      body: "Electronic experiments with modular synths today. The machine speaks in beautiful chaos. New Radiohead material taking shape... maybe. 🎛️",
      like: 42030,
      comment: 6234,
      coverpicture: Cover7,
      userid: "@thomyorke",
      ModelCountryName: "UK",
      ModelJobName: "Musician & Artist",
      ModelJoinedDate: "Joined in 2020-08-09",
      followers: 1626000
    },
    {
      id: 8,
      username: "clem",
      profilepicture: Profile,
      img: Uimg3,
      datetime: moment("20230219", "YYYYMMDD").fromNow(),
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
      like: 340,
      comment: 3,
      coverpicture: Cover8,
      userid: "@clem98",
      ModelCountryName: "India",
      ModelJobName: "Web Developer in Google",
      ModelJoinedDate: "Joined in 2023-08-12",
      followers: 5000
    },
    {
      id: 9,
      username: "Dave Grohl",
      profilepicture: DPimg6,
      img: img6,
      datetime: moment("20230404", "YYYYMMDD").fromNow(),
      body: "From Nirvana's drums to Foo Fighters' frontman - music has been my life's journey. Working on a special tribute project for Taylor. Rock never dies, it just gets louder. 🥁🎸",
      like: 98844,
      comment: 12403,
      coverpicture: Cover9,
      userid: "@dgrohl",
      ModelCountryName: "USA",
      ModelJobName: "Musician & Producer",
      ModelJoinedDate: "Joined in 2020-02-29",
      followers: 4599000
    }
  ]);

  const [body, setBody] = useState("");
  const [importFile, setImportFile] = useState("");
  const [search, setSearch] = useState("");
  const [following, setFollowing] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [images, setImages] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const username = "clem";
    const profilepicture = Profile;
    const datetime = moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow();
    const img = images ? { img: URL.createObjectURL(images) } : null;
    
    const obj = {
      id: id,
      profilepicture: profilepicture,
      username: username,
      datetime: datetime,
      img: img && (img.img),
      body: body,
      like: 0,
      comment: 0
    };

    const insert = [...posts, obj];
    setPosts(insert);
    setBody("");
    setImages(null);
  };

  return (
    <div className='interface'>
      <Nav 
        search={search}
        setSearch={setSearch}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      <div className="home">
        <Left />

        <Middle 
          handleSubmit={handleSubmit}
          body={body}
          setBody={setBody}
          importFile={importFile}
          setImportFile={setImportFile}
          posts={posts}
          setPosts={setPosts}
          search={search}
          setFriendsProfile={setFriendsProfile}
          images={images}
          setImages={setImages}
        />

        <Right
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          following={following}
          setFollowing={setFollowing}
        />
      </div>
    </div>
  );
};

export default Home; 