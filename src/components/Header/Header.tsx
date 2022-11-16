import './Header.scss'

import logo from '../../images/logo.svg'
import social1 from '../../images/telegram.svg'
import social2 from '../../images/viber.svg'
import social3 from '../../images/whatsapp.svg'

const navMenu = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты']

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>
					<a href='/'>
						<img src={logo} alt='logo' />
					</a>
					<span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
				</div>
				<div className='header__menu menu'>
					<nav>
						<ul className='menu__list'>
							{navMenu.map((item, id) => (
								<li className='menu__item' key={id}>
									<a href='/' className='menu__link'>
										{item}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className='header__contacts contacts'>
					<a
						href='tel:+75555555555'
						target='noopener'
						className='contacts__phone'
					>
						+7-555-555-55-55
					</a>

					<div className='contacts__social social'>
						<a href='/' target='noopener' className='social__item'>
							<img src={social1} alt='telegram' />
						</a>
						<a href='/' target='noopener' className='social__item'>
							<img src={social2} alt='viber' />
						</a>
						<a href='/' target='noopener' className='social__item'>
							<img src={social3} alt='whatsapp' />
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
