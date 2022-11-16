import './Hero.scss'

const promo = [
	{
		id: 1,
		title: 'Виджеты',
		subtitle: '30 готовых решений',
	},
	{
		id: 2,
		title: 'Виджеты',
		subtitle: '30 готовых решений',
	},
	{
		id: 3,
		title: 'Виджеты',
		subtitle: '30 готовых решений',
	},
	{
		id: 4,
		title: 'Виджеты',
		subtitle: '30 готовых решений',
	},
]

const Hero = () => {
	return (
		<section className='hero'>
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
						<span className='gradient-text --red'>бесплатной</span>{' '}
						<span className='gradient-text --yellow'>консультацией </span>
						мы&nbsp;дарим:
					</h2>
					<ul className='list-reset advantages-list'>
						<li className='advantages-list__item'>
							<h3 className='advantages-list__name'>Виджеты</h3>
							<p className='advantages-list__about'>30&nbsp;готовых решений</p>
						</li>
					</ul>
					<a href='foo' className='btn btn-blue hero__link'>
						Получить консультацию
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
