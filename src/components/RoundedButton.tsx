import React from 'react'

function RoundedButton() {

	return (
		<button
			className="w-16 h-8 bg-slate-900 text-slate-50 rounded-full shadow-lg hover:bg-primary-light transition duration-300"
			onClick={() => {
				// ボタンがクリックされたときの処理を追加
			}}
			>
			<div className="flex items-center justify-center h-full">
				編集
			</div>
		</button>
	)
}

export default RoundedButton
