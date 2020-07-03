let index = 1;

const makeChat = (name,date,content) => {
    const chatlistDom = document.querySelector(".chatlist");
    const template = `
    <div id="char-${index++}">
            <div class="header">
                <span class="name">${name}</span>
                <span class="date">${date}</span>
            </div>
            <div class="content">
                <p>${content}</p>
            </div>
        </div>
        `;
        chatlistDom.innerHTML += template;
};


const buttonDom = document.querySelector(".input-button");
const nameDom = document.querySelector(".input-name");
const contentDom = document.querySelector(".input-content");

const sendChat = () => {
    const date = new Date().toLocaleString();

    makeChat(nameDom.value, date, contentDom.value);
    contentDom.value ="";
};

buttonDom.addEventListener('click', () => sendChat());

contentDom.addEventListener("keydown", (e) => {
    if(e.key === "Enter") sendChat();
});