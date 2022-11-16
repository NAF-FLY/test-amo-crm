import './Hero.scss'

import { promoItems } from '../../data/dataItems'

const Hero = () => {
	return (
		<section className='hero'>
			<div className='blur__bg blur__bg-1'></div>
			<div className='blur__bg blur__bg-2'></div>
			<div className='blur__bg blur__bg-3'></div>
			<div className='blur__bg blur__bg-4'></div>
			<div className='blur__bg blur__bg-5'></div>
			<div className='hero__container'>
				<div className='hero__block left'>
					<h1 className='hero__title'>
						Зарабатывайте больше
						<br />
						<span>c WELBEX</span>
					</h1>
					<p className='hero__subtitle'>
						Развиваем и&nbsp;контролируем продажи&nbsp;за вас
					</p>
				</div>
				<div className='hero__block right'>
					<h2 className='hero__subtext'>
						Вместе с&nbsp;
						<span>бесплатной </span>
						<span>консультацией </span>
						мы&nbsp;дарим:
					</h2>
					<ul className='promo__items'>
						{promoItems.map(item => (
							<li className='promo__item' key={item.id}>
								<h3 className='promo__name'>{item.title}</h3>
								<p className='promo__info'>{item.subtitle}</p>
							</li>
						))}
					</ul>
					<button className='button'>Получить консультацию</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
