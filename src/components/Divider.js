export function Divider() {
	return (
		<div className="relative">
			<div className="absolute inset-0 flex items-center " aria-hidden="true">
				<div className="w-full border-t border-blue-700"></div>
			</div>
			<div className="relative flex justify-start">
				<span className="bg-yellow-100 pr-3 text-md font-medium text-blue-700">
					GPT Response
				</span>
			</div>
		</div>
	);
}
