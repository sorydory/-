import Component from "./components/Components.js";

export default class Lists extends Component {

    template(){
        const { students } = this.props;
        return `
    <ul>
        ${students.map(stu=>`<li data-no="${stu.no}">${stu.contents}
        <button>${stu.active ? '비활성':'활성'}</button>
        <button class="deleteBtn" data-no="${stu.no}">삭제</button>

        </li>`).join("")}
    </ul>
        `;
    }
    setEvent(){
        const{deletestudent} = this.props;
        this.target.addEventListener("click",(e)=>{
            if(e.target.classList.contains('deleteBtn')){
                console.log("deletebtn입니다");
                //배열에서 삭제하기
                console.log(e.target);
                deletestudent(Number(e.target.dataset.no));
            }
        })
    }
}
