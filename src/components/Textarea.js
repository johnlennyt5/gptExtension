export function Textarea({ onChange }) {
	return (
		<div>
			<label className="block text-lg font-medium text-blue-700">
				Ask ChatGPT
			</label>
			<div className="mt-1">
				<textarea
					rows="4"
					name="comment"
					placeholder="Ask me a question..."
					className="block p-3 w-full rounded-md border-blue-700 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
					onChange={onChange}
				></textarea>
			</div>
		</div>
	);
}
