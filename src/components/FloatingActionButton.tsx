import React from 'react'

function FloatingActionButton() {
	return (
		<button
			className="fixed bottom-40 right-4 w-12 h-12 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
			onClick={() => {
				// ボタンがクリックされたときの処理を追加
			}}
		>
			{/* FABのアイコンやコンテンツをここに追加 */}
		</button>
	)
}

export default FloatingActionButton
