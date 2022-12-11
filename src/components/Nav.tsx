
import Link from "next/link";

const Nav = () => {
	return (
		<div className="flex sticky top-0">
			<div className="flex flex-cols gap-5 py-3 bg-slate-800 text-white text-lg font-semibold shadow-xl w-full items-center justify-center uppercase">

				<div>
					<Link href="/">home</Link>
				</div>

				<div>
					<Link href="/api/getData">get data</Link>
				</div>

				<div>
					<Link href="/api/getComments">get comments</Link>
				</div>

				<div className="flex gap-2 text-xl">
					<input className="text-slate-900 rounded-sm px-2 focus:outline-0" placeholder='filter...'/>
					<button className="px-2 bg-slate-500 rounded-sm hover:bg-slate-600 active:scale-95">Search</button>
				</div>

			</div>
		</div>
	);
};


export default Nav;