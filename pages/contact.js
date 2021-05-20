import Image from 'next/image'

export default function Contact() {
    return (
		<div>
			<h1>Get in Touch!</h1>
			<div>
				<div>Phone: 804-731-3726</div>
				<div>Email: mail@patrickrush.tech</div>
				<Image 
					src="/images/2021-twitter-logo-blue.png"
					height={20}
					width={25}
					alt="Twitter"
				/>
			</div>
		</div>
	)
}
