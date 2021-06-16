import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function FirstPost() {
	return (
			<div className="container">
				<Head>
					<title>Post</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<h1>
					<Link href="/">
						<a>Back to home</a>
					</Link>
				</h1>
				<Image
					src="/images/profile.jpg" // Route of the image file
					height={216} // Desired size with correct aspect ratio
					width={216} // Desired size with correct aspect ratio
					alt="Bill Gate"
				/>
				{/* <style jsx global>{`
					body{
						background-color: #FF0;
						min-height: 100vh;
					}
				`}</style> */}
			</div>
	)
}