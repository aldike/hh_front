export default function MyResume({item}){
    return (<div className="card mtb4">
        <a className="h3">{item.position}</a>
        <p>{item.createdAt}</p>

        <h3>Статистика</h3>
        <div className="flex">
            <a className="p3">{item.stats.shown} показов</a>
            <a className="p3">{item.stats.views} просмотров</a>
            <a className="p3">{item.stats.invites} приглашениё</a>
        </div>
    </div>
    )
}