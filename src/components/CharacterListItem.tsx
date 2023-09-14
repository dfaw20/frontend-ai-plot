import React, { ReactNode } from 'react'
import { Character } from '../entities/Character'
import { Button, Divider, Tag } from 'antd'
import { GiFemale, GiMale } from 'react-icons/gi'
import { AiTwotoneEdit } from 'react-icons/ai'

interface CharacterListItemProps {
	character: Character
	editable: boolean
	actionArea: ReactNode
}

function CharacterListItem(props: CharacterListItemProps) {

	function showGenderIcon() {
		switch (props.character.Gender) {
		case 'male':
			return <GiMale size={20} color='#3b82f6'/>
		case 'female':
			return <GiFemale size={20} color='#ef4444'/>
		case 'other':
			return null
		case '':
			return null
		}
	}

	return (
		<div className='px-4 py-2'>
			<div className='flex justify-between'>
				<div>
					<div className='font-bold text-black-800'>
						<div className='flex'>
							<div className='flex items-center mr-2'>{showGenderIcon()}</div>
							<div>{props.character.Name}</div>
						</div>
					</div>
					<div className='flex items-center'>
						<div className='text-gray-500'>
							{props.character.Nickname}
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center">
					{props.editable ?
						<Button><AiTwotoneEdit/></Button>
						: null}
				</div>
			</div>

			<div>
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
