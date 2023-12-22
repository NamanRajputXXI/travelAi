import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openAi";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  };
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />{" "}
            <span className="brand">Travel AI</span>{" "}
          </div>

          <button className="midBtn">
            <img className="addBtn" src={addBtn} alt="" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an Api
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />
            Back to Website
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} className="chatImg" alt="" />
            <p className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate quaerat libero dolor aut ex et molestiae! Rerum
              accusantium in inventore minima excepturi atque eum illum alias
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              voluptatibus cum distinctio aspernatur, autem hic rem beatae,
              cumque illum ipsa voluptatum dolore in neque suscipit. Itaque
              atque repudiandae error nemo quae! Molestias, porro reprehenderit
              blanditiis dicta quo eaque cupiditate magni nostrum quasi
              laudantium quia minus qui deleniti, natus atque. Illum doloremque
              distinctio quia unde reiciendis quam veritatis voluptatibus sunt
              architecto, amet, praesentium, voluptates minima! Natus,
              similique. Quisquam laborum nam facilis sapiente. Tempora,
              voluptate sapiente! Natus similique cum maiores sint, eaque
              corporis consectetur unde adipisci quas incidunt, animi non
              dolorum. Adipisci corrupti nesciunt amet tempora ex alias sapiente
              quos esse totam.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a Message..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>Travel Ai may produce incorrect result</p>
        </div>
      </div>
    </div>
  );
}

export default App;
