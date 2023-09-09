import React from 'react'

import {GiPencil} from 'react-icons/gi'

function FloatingActionButton() {
	return (
		<button
			className="fixed bottom-28 right-8 w-16 h-16 bg-primary rounded-full shadow-lg hover:bg-primary-light transition duration-300"
			onClick={() => {
				// ボタンがクリックされたときの処理を追加
			}}
		>
			<div className="flex items-center justify-center h-full">
			<GiPencil className='text-white' size={30}/>
			</div>
		</button>
	)
}

export default FloatingActionButton
