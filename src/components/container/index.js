import style from './Container.module.css'
const Container = ({ children }) => {
    return (
        <content className={style.content} title="clique aqui">
            {children}
        </content>
    )
}

export default Container