import MyResume from "./myresume"
export default function MyResumes({resumes}){
    // Вариант
    // const {resumes} = props
    // const showResumes = resumes.map(item => (<MyResume/>))
    const showResumes = resumes.map(item => (<MyResume item={item}/>))
    return (<div>
        {showResumes}
    </div>
    )
}