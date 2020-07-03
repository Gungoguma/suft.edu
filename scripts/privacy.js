const r1Dom = r1;
// const r1Dom = document.querySelector("#r1") //
const r2Dom = document.querySelector("#r2")
const a1Dom = document.querySelector("#a1")
const a2Dom = document.querySelector("#a2")

const submitDom = document.querySelector(".submitButton");
submitDom.addEventListener('click', () => {
    // (!r1Dom.checked || !r2Dom.checked) && alert("필수항목입니다.");
    if (!r1Dom.checked || !r2Dom.checked) {
        alert("필수항목입니다");
        return;
    }
    const isTrue = confirm("정말정말 제출하시겠습니까?");
    if (!isTrue) return;
    
    alert("성공입니다.");

    submitDom.disabled = true;
    r1Dom.disabled = r2Dom.disabled = a1Dom.disabled = a2Dom.disabled = true;
});