import React from 'react'
import { Character } from '../entities/Character'
import { getGenderText } from '../entities/Character'
import RoundedButton from './RoundedButton'

interface CharacterListItemProps {
	character: Character
}

function CharacterListItem(props: CharacterListItemProps) {

	return (
		<div className='px-4 py-2'>
			<div className='flex justify-between'>
				<div>
					<div className='font-bold text-black-800'>{props.character.Name}</div>
					<div className='text-gray-500'>{props.character.Nickname}</div>
				</div>
				<div className="flex items-center justify-center">
					<RoundedButton/>
				</div>
			</div>
			<div>{getGenderText(props.character.Gender)}</div>
			<div>{props.character.Outfit}</div>
			<div>{props.character.Hairstyle}</div>
			<div>{props.character.Personality}</div>
			<div>{props.character.Tone}</div>
			<div>{props.character.Profile}</div>
		</div>
	)
}

export default CharacterListItem
