import React from 'react'
import { Character } from '../entities/Character'
import { getGenderText } from '../entities/Character'
import RoundedButton from './RoundedButton'
import { Divider, Tag } from 'antd'

interface CharacterListItemProps {
	character: Character
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
					<RoundedButton/>
				</div>
			</div>

			<div>
				<Tag>
					{getGenderText(props.character.Gender)}
				</Tag>
				<Tag>{props.character.Outfit}</Tag>
				<Tag>{props.character.Hairstyle}</Tag>
				<Tag>{props.character.Personality}</Tag>
				<Tag>{props.character.Tone}</Tag>
			</div>
			<div className='mt-4'>{props.character.Profile}</div>

			<Divider/>
		</div>
	)
}

export default CharacterListItem
