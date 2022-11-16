import './Footer.scss'

import { footerMenuPart1, footerMenuPart2 } from '../../data/dataItems'
import social1 from '../../images/telegram.svg'
import social2 from '../../images/viber.svg'
import social3 from '../../images/whatsapp.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__row'>
				<div className='footer__columns'>
					<div className='footer__column'>
						<div className='footer__column-title'>О компании</div>
						<ul className='footer__column-items'>
							<li className='footer__column-item'>
								<a href='/' className='footer__column-link'>
									Партнёрская программа
								</a>
							</li>
							<li className='footer__column-item'>
								<a href='/' className='footer__column-link'>
									Вакансии
								</a>
							</li>
						</ul>
					</div>
					<div className='footer__column'>
						<div className='footer__column-title'>Меню</div>
						<div className='footer__column-lists'>
							<ul className='footer__column-items'>
								{footerMenuPart1.map((item, id) => (
									<li className='footer__column-item' key={id}>
										<a href='/' className='footer__column-link'>
											{item}
										</a>
									</li>
								))}
							</ul>

							<ul className='footer__column-items'>
								{footerMenuPart2.map((item, id) => (
									<li className='footer__column-item' key={id}>
										<a href='/' className='footer__column-link'>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className='footer__contacts contacts-footer'>
					<div className='contacts-footer__title'>Контакты</div>
					<a
						href='tel:+75555555555'
						target='noopener'
						className='contacts-footer__phone'
					>
						+7 555 555-55-55
					</a>
					<div className='social-footer'>
						<a href='/' target='noopener' className='social-footer__link'>
							<img src={social1} alt='telegram' />
						</a>
						<a href='/' target='noopener' className='social-footer__link'>
							<img src={social2} alt='viber' />
						</a>
						<a href='/' target='noopener' className='social-footer__link'>
							<img src={social3} alt='whatsapp' />
						</a>
					</div>
					<div className='contacts-footer__address'>
						Москва, Путевой проезд 3с1, к 902
					</div>
				</div>
			</div>
			<div className='footer__copy'>
				<div className='footer__rules'>©WELBEX 2022. Все права защищены.</div>
				<a href='/' target='noopener' className='footer__cors'>
					Политика конфиденциальности
				</a>
			</div>
		</footer>
	)
}

export default Footer
