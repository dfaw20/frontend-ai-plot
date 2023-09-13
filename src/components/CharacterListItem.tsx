import React, { ReactNode } from 'react'
import { Character } from '../entities/Character'
import { getGenderText } from '../entities/Character'
import { Button, Divider, Tag } from 'antd'

interface CharacterListItemProps {
	character: Character
	editable: boolean
	actionArea: ReactNode
}

function CharacterListItem(props: CharacterListItemProps) {

	return (
		<div className='px-4 py-2'>
			<div className='flex justify-between'>
				<div>
					<div className='font-bold text-black-800'>{props.character.Name}</div>
					<div className='flex items-center'>
						<div className='text-gray-500'>
							{props.character.Nickname}
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center">
					{props.editable ?
						<Button>編集</Button>
						: null}
				</div>
			</div>

			<div>
				<Tag>
					{getGenderText(props.character.Gender)}
				</Tag>
				<Tag>{props.character.Outfit}</Tag>
				<Tag>{props.character.Personality}</Tag>
				<Tag>{props.character.Tone}</Tag>
			</div>
			<div className='mt-4'>{props.character.Profile}</div>

			<div className='mt-4 flex items-center justify-center'>
				{props.actionArea}
			</div>

			<Divider/>
		</div>
	)
}

export default CharacterListItem
