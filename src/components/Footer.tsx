import Link from "next/link";

const Footer = () => {
	return (
		<nav>
			<div className="flex flex-cols gap-5 py-2 bg-slate-800 text-white font-semibold shadow-lg justify-center uppercase">
				<div>
					<Link href="/">@instagram link</Link>
				</div>
			</div>
		</nav>
	);
};


export default Footer;