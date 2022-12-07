import Component from "./components/Components.js";
import ContentInput from "./components/Contentlnput.js";
import Lists from "./Lists.js";

export default class App extends Component {
    setup(){
        this.state = {
            students: [
            {
                no:1,
                contents:"stu1",
                active: true
            },
            {
                no:2,
                contents:"stu2",
                active: false
            },
            {
                no:3,
                contents:"stu3",
                active: false
            },
        ]
    }
    console.log(this);
}
template(){
    return`
        <div id="contentAdd"></div>
        <div id="studentLists"></div>
        <div id="viewBtn"></div>
        `;
    }
    mounted(){
        const { students } = this.state;
        const { addStudent,deletestudent } = this;
        const contentAppender = document.querySelector("#contentAdd");
        const stuListDiv = document.querySelector("#studentLists");
        new ContentInput(contentAppender, {
            addStudent: addStudent.bind(this)
        });
        new Lists(stuListDiv, { students: students,
        deletestudent: this.deletestudent.bind(this) });
        //객체 { target: stuListDiv, porps: {students: []} }
    }
    addStudent(contents){
        const { students } = this.state;
        // students.map(s=>s.no) => [1,2,3]
        // no중 가장 큰 숫자를 찾아서 1을 더한값을 할당
        const no = Math.max(0, ...students.map(s=>s.no))+1;
        this.setState({
            students: [
                ...students,
                { 
                    no:no,
                    contents: contents,
                    active: false
                }
            ]   
        })
    }
    deletestudent(no){
        const{students}=this.state;
        const newStudents = students.filter(stu=>stu.no !== no);
        console.log(newStudents);
        this.setState({students: newStudents});
    }
}