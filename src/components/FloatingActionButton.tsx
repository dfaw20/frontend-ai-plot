import React from 'react'

import {GiPencil} from 'react-icons/gi'

interface FloatingActionButtonProps {
	onHandleClick: () => void
}

function FloatingActionButton(props: FloatingActionButtonProps) {
	return (
		<button
			className="fixed bottom-28 right-8 w-16 h-16 bg-primary rounded-full shadow-lg hover:bg-primary-light transition duration-300"
			onClick={() => {
				props.onHandleClick()
			}}
		>
			<div className="flex items-center justify-center h-full">
			<GiPencil className='text-white' size={36}/>
			</div>
		</button>
	)
}

export default FloatingActionButton
