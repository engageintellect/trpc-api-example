import { trpc } from '../utils/trpc'


const PreHeader = () => {
	const test = trpc.api.header.useQuery();
	
	return (
		<div className="bg-slate-400">
			<div className="flex items-center justify-center">
				<div className='text-7xl font-semibold py-10 text-white'>
					{test.data?.msg ?? 'loading...'}
				</div>
			</div>
		</div>
	)
}


export default PreHeader