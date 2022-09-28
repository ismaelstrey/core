import menu from './Header.module.css'
const Header = () => {
    return (
        <header className={menu.headerMenu}>
            <ul className={menu.listMenu}>
                <li>Home</li>
                <li>Serviços</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </header >
    )

}

export default Header