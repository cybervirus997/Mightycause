import styles from "./LiveEdit.module.css";
import styled from "styled-components";
import { Nav } from "../Home/Nav";
import Footer from "../Home/Footer";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideNavbar from "./Navbar";

const Input = styled.input`
  width: 30%;
  color: #494d59;
`;
const forfun = {
  key: "hhhheeee",
};
function LiveEdit() {
  const [width, setWidth] = useState(window.innerWidth);
  const id = useRef();
  const [file, setFile] = useState("");
  const [myVlaue, setMyValue] = useState();

  window.addEventListener("resize", handleResize);
  function handleResize() {
    setWidth(window.innerWidth);
    // console.log("no");
  }

  const initial = {
    email: "ravishukla86044@gmai.com",
    category: "Category",
    orgainsation: "Oraganisation Name",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAJ1BMVEXIyMivr6+tra3FxcW2traysrK7u7vBwcG+vr7GxsaxsbG1tbW5ubnPcSqzAAAExUlEQVR4nO3d7XKDIBCF4ShqNMn9X28T06aACywflrOdfX+3MzxjNUYLXAbxXXoPoL6dMIrth2A2I7TNvAnjdhHbNr4JpvdAyjNhglmXxzQ9lhWcFyKs9/Fzuo/DdO0yOF40YfEvWuMNF0ERrtSVd5xRz3iC8BgpwjPQA3EkzMGPwHHpONBwB0JYgGrwCTHB88fWroOl8wiPqOD5c4Dng0u4hs7k3zqPl8glJAHDMHUe8DGHcPhEo/6U4G43HAJDAHgYbMLKIoy9h+xnE+4swoB2YbUJ6cvR3r33mL0sguEJ4K6rFoF3KuCdDBaBc0ndA7usWoTUzcUnsJsMizApoVf/6w+Jezqj3SX9r4uqYX4633qP2cu+wWAehUfvMXvZBOYlCexsdgiMr52veg/Zz/nKc+MI4B7EOISVcxh6j/iQ+/U//hQJ8yB4hPR1de48XiLvUVjyTwnw8bb/QDL4WHsP7d5i7/BYOGZAfBxJPZxfwgbEY0C+IiFf8jy7AZ4Hr8h3bXfiQGC+W3hFvy40BwTavZ1V6KXtttzHb8Y4TGgP8Jwir84v5rqu6/UKegp8ihGEpASElICQEhBSAkJKQEgJCCkBISUgpASElICQEhBSAkJKQEgJCCkBISUgpASElICQEhBSAkJKQEgJCCkBISUgpASElICQVMLtd8BCCTdrxDIJN/uf4EUSZucf+SUSPjOOfmfvCCNYc6b2UcsjOLO+XsMWR/DmrRl5BH/m3SSOcJg7KI5wnP0ojUDM3xRGoGagyiKQc2hFEehZwJIIgXnMggihmdhyCMG55GII4dnwUgiR+fxCCLEVCWQQogvJiSDEl8KTQEgs5ieAkFqOEJ+QXFARnpBeEhKdwFjUEpzAWZYTm8BaWBSawFsaFZnAXNwVmMAUABO4AlwCWwBL4AtQCRkCUAJ7UVRYQpYAkpAnQCRkCgAJuQI8QrYAjpAvQCMUCMAIJQIsQpEAilAmQCIUCoAIpQIcQrEAhlAuQCFUCEAI7B0HYAlVAghCnQCBUCkAIMQXlJZAqBZ0J9QLehMaCDoTWgjaEJbC7QyaCJoQlrFsf5U2ghaEfXn3AkMjQQPC9wL12YZWgnrCZ4n9TEMzQTXB2iQgy9BOUEtwtjnIMES2R/hjgjcStqGloI5wGAnT0FRQRSA2XmEZ2gpqCOTWMQxDY0EFIbD5TdLQWlBOCG7fkzA0FxQTIhsQRQ3tBaWE6BZKkR2gThAUEhKbQAWPwxmCMkJyG6vAcThFUERg7OlGGs4RlBBYu9IRhpMEBQSWgDCcJcgnMAUHw2mCbAJb4BnOE+QSMgSO4URBJiFLYBkyfy+vLEL2SOY/EGQRCkYyny/IIRSNZD5dkEEoHMl8toBPYG7Y2yEuAVfAJQALmARkAY8ALWARsAUcAriAQUAXpAnwgiQBX5AiCBAkCBIEcYIIQZQgQxAjCBFECFIEYYIYQZAgRxAiCBIECJIENEGUgCQYUQKKIExAEKQJjgRxggNBnsAnCBR4BFlX0+9cQs1kjm4pASElIKQEhJSAkBIQUgJCSkBICQgpASElIKQEhJSAkBIQUgJCSkBICQi5hGUS2NJ7ZZ4m/RC23gMpb3sTBrMZoW1meBOGUWzDD0F2/4DwBbBzaYqf/U92AAAAAElFTkSuQmCC",
    goal: 0,
    price: 25,
    title: "Your Event Name",
    donationTarget: 100,
    deadline: 0,
  };
  const [data, setData] = useState(initial);

  useEffect(() => {
    handleAuth();
  }, []);
  useEffect(() => {}, [data]);

  const ImageDiv = styled.div`
    background-image: url(${data.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const Progress = styled.div`
    width: ${Number((data.price / data.donationTarget) * 100)}%;
    background: rgb(118, 152, 255);
    position: absolute;
    height: 100%;
    border-radius: 18px;
  `;

  const [popC, setPopC] = useState(false);
  const [popValue, setPopValue] = useState(0);
  const [formData, setFormData] = useState({});
  const [newImg, setNewImg] = useState();
  const [dataArr, setDataArr] = useState("");
  const Email = useRef();
  const evt = useRef();

  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
      console.log(title);
    }
    let payload = { ...data, [name]: value };
    setData({ ...data, ...payload });
    console.log(data);
  };
  async function handleAuth() {
    let res = await axios.get("http://localhost:3002/login/1");
    console.log(res.data, "in th auth");
    Email.current = res.data.email;
    setData({ ...data, ...res.data });
    // setData((pre) => {
    //   return { ...pre, ...res.data };
    // });

    Promise.all([res]).then((response) => {
      console.log(response, "this is all");

      console.log(data, "this is data indide auth");
      getEmail();
    });
  }
  const getEmail = async () => {
    let res = await axios.get("http://localhost:3002/userData");

    Promise.all([res]).then((response) => {
      console.log(response, "insie getEmail promise");
      let a = response[0].data;
      console.log(a, "inside getEmail");
      for (var i = 0; i < a.length; i++) {
        if (a[i].email === Email.current) {
          console.log(a[i].events, "thsi a[i].envets");

          var original = a[i].id;
          evt.current = a[i].events;
          id.current = a[i].id;
          console.log(id.current, "this is id");
          break;
        }
      }
      return original;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    getEmail();
    let a = {};
    console.log(a, "this is a");
    let t = data.title;
    let { price, donationTarget, goal, deadline, category } = data;
    a = {
      title: t,
      price,
      donationTarget,
      goal,
      deadline,
      category,
      img: newImg,
    };
    let original = {};
    let d = {};
    let events = [];
    let currentTitle = t;
    // d.events = [...evt.current, a];
    if (evt.current.length > 0) {
      events = [...evt.current, a];
      original = { events, currentTitle };
    } else {
      events = [a];
      original = { events, currentTitle };
    }

    console.log(original, "patch");
    console.log(evt.current, "evt");
    axios.patch(`http://localhost:3002/userData/${id.current}`, original).then((res) => {
      console.log(res.data, "this is patch");
    });
    console.log(data, "inside submit");
    setPopC(false);
    setPopValue(0);
  };

  const handleChangeImg = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // const getImage = () => {
  //   axios
  //     .get("https://him-app.herokuapp.com/posts")
  //     .then((res) => {
  //       setDataArr(res.data);
  //       console.log(res.data, "inside getImage");
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const postImage = async () => {
  //   const payload = {
  //     Image: newImg,
  //   };
  //   await axios
  //     .post("https://him-app.herokuapp.com/posts", {
  //       ...payload,
  //       status: false,
  //     })
  //     .then((res) => getImage())
  //     .catch((err) => console.log(err));
  // };

  // const handleSubmitImg = () => {
  //   const reader = new FileReader();
  //   console.log(reader);
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setNewImg(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(file);

  //   postImage();
  // };
  const handleSubmitImg = () => {
    console.log(file);
    const a = new FormData();
    a.append("file", file);
    a.append("upload_preset", "uploadimage");
    axios.post("https://api.cloudinary.com/v1_1/masai-nj2045/image/upload", a).then((res) => {
      console.log(res.data.url);
      // let aa = {};
      // console.log(aa, "this is a");
      // let t = data.title;
      // let { price, donationTarget, goal, deadline, category } = data;
      // aa = {
      //   title: t,
      //   price,
      //   donationTarget,
      //   goal,
      //   deadline,
      //   category,
      //   img: newImg,
      // };
      // let d = {};
      // if (evt.current.length > 0) {
      //   d.events = [...evt.current, aa];
      // } else {
      //   d.events = [aa];
      // }
      // console.log(aa, "patch");
      // console.log(evt.current, "evt");
      // axios.patch(`http://localhost:3002/userData/${id.current}`, d).then((res) => {
      //   console.log(res.data, "this is patch");
      // });
      setNewImg(res.data.url);
      setPopC(false);
      setPopValue(0);
    });
  };

  return (
    <>
      <SideNavbar handleSubmit={handleSubmit} />
      {popC && (
        <div className={styles.pop}>
          <div className={styles.popCategory}>
            <span
              onClick={() => {
                setPopC(!popC);
                setPopValue(0);
              }}
              class="material-icons-round"
            >
              close
            </span>
            {popValue === 1 ? (
              <>
                <div>
                  <h1>CATEGORIES</h1>
                  <p>Define your cause with at least one</p>
                </div>
                <select onChange={handleChange} name="category" id="" className={styles.select}>
                  <option value="Animal">Animal</option>
                  <option value="Art-and-culture">Art and culture</option>
                  <option value="Childer-and-comunity">Childer-and-comunity</option>
                  <option value="Education ">Education</option>
                  <option value="Emergencies">Emergencies</option>
                  <option value="Environment">Environment</option>
                  <option value="Health">Health</option>
                  <option value="Sports">Sports</option>
                </select>
                <button
                  onClick={() => {
                    setPopC(false);
                    setPopValue(0);
                  }}
                  className={styles.save}
                >
                  Save
                </button>
              </>
            ) : popValue === 2 ? (
              <>
                <div>
                  <h1>Title</h1>
                  <p>Define a title for your cause </p>
                </div>

                <input type="text" name="title" onChange={handleChange} value={title} />
                <button
                  onClick={() => {
                    setPopC(false);
                    setPopValue(0);
                  }}
                  className={styles.save}
                >
                  Save
                </button>
              </>
            ) : popValue === 3 ? (
              <>
                <div>
                  <h1>Set Goal</h1>
                  <p>Set a target for your fundraising event</p>
                </div>
                <input
                  type="number"
                  name="donationTarget"
                  onChange={handleChange}
                  setFocus="true"
                />
                <button
                  onClick={() => {
                    setPopC(false);
                    setPopValue(0);
                  }}
                  className={styles.save}
                >
                  Save
                </button>
              </>
            ) : popValue === 4 ? (
              <>
                <div>
                  <h1>Image</h1>
                  <p>Upload an image for your cause </p>
                </div>

                <input type="file" name="img" onChange={handleChangeImg} />
                <button onClick={handleSubmitImg} className={styles.save}>
                  Save
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}

      {width < 600 && <Nav />}
      <div className={styles.Con}>
        <div className={styles.content}>
          <div className={styles.account}></div>
          <div>
            <button className={styles.category}>{data.category}</button>
            <span
              onClick={() => {
                setPopC(!popC);
                setPopValue(1);
              }}
              class="material-icons-outlined"
            >
              mode_edit
            </span>
          </div>
          <div>
            <div className={styles.imgDiv}>
              <div className={styles.pic}>
                <img src={newImg} alt="" />
              </div>
              <span
                onClick={() => {
                  setPopC(!popC);
                  setPopValue(4);
                }}
                class=" material-icons-outlined "
              >
                mode_edit
              </span>
            </div>
            <div className={styles.title}>
              <div>
                <h1>
                  {data.title}{" "}
                  <span
                    onClick={() => {
                      setPopC(!popC);
                      setPopValue(2);
                    }}
                    class="material-icons-outlined"
                  >
                    mode_edit
                  </span>
                </h1>
              </div>
            </div>
            <div className={styles.org}>
              <p>An Event for - {data.orgainsation}</p>
            </div>
          </div>
          <div>
            <button className={styles.editTheme}>
              <span class=" material-icons-outlined ">mode_edit</span>Edit Theme
            </button>
          </div>
        </div>

        <div className={styles.eventProgress}>
          <div>
            <h1>{`$ ${data.price} raised`}</h1>
            <p>
              FUNDRAISING DEADLINE <span class="material-icons-outlined">mode_edit</span>
            </p>
          </div>
          <div>
            <div className={styles.progressBarCon}>
              <Progress />
              <p>{`$ ${data.donationTarget} GOAL`}</p>
            </div>
            <span
              onClick={() => {
                setPopC(!popC);
                setPopValue(3);
              }}
              class="material-icons-outlined"
            >
              mode_edit
            </span>
          </div>
          <div className={styles.lastbutton}>
            <Link to="/Donation">
              <button className={styles.donate}>DONATE</button>
            </Link>
            <button>JOIN THIS EVENT</button>
          </div>
        </div>
      </div>

      <div className={styles.lastInfor}>
        <div className={styles.one}>
          <div className={styles.support}>
            <div>
              <h2>WHO WE SUPPORT</h2>
              <p>PROCEEDS GO TO 1 ORGANIZATION</p>
            </div>
            <button className={styles.donate}>DONATE</button>
          </div>
        </div>
        <div className={styles.user}>
          <div>
            <h1>Event & ORGANIZER INFO</h1>
            <p>GET THE DETAILS</p>
          </div>
          <div className={styles.userDetail}>
            <ImageDiv className={styles.userImage}></ImageDiv>
            {/* <div >
              <img src={data.current.imageUrl} alt="" />
            </div> */}
            <div>
              <h2>Event Organiser</h2>
              <p>{`${data.name}`}</p>
            </div>
            <div>
              <p>{`Created on -${data.date} `} </p>
              <p>{`Fundraising deadline ${data.deadline}`}</p>
              <p>{`Fundraising Target ${data.donationTarget}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
export { LiveEdit };
