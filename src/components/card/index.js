import style from './card.module.css'
const Card = () => {
    return (
        <article className={style.card}>
            <header><h2>Seja bem vindo</h2><span><p>Data:27/05/1986</p></span></header>
        </article>
    )
}

export default Card