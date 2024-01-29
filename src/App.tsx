import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'

function App() {
	return (
		<>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-row'>
					<div>
						<h1 className='text-5xl font-bold'>
							Barinderpreet Singh
						</h1>
						<p className='pb-6 pt-3 text-xl'>
							Known as <b>Naffy Dharni</b>
						</p>
						<div className='flex-row'>
							<a href='https://github.com/knownasnaffy' className='pr-4 hover:text-black dark:hover:text-white'>
								<FontAwesomeIcon icon={faGithub} size='2x' />
							</a>
							<a href='https://instagram.com/knownasnaffy' className='pr-4 hover:text-fuchsia-500'>
								<FontAwesomeIcon icon={faInstagram} size='2x' />
							</a>
							<a href='https://twitter.com/dharni_naffy' className='pr-4 hover:text-blue-400'>
								<FontAwesomeIcon icon={faTwitter} size='2x' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
