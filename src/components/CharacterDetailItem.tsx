import React from 'react'
import { Card} from 'antd'
import Meta from 'antd/es/card/Meta'
import { Character } from '../entities/Character'
import {AiTwotoneSound} from 'react-icons/ai'
import { IconType } from 'react-icons'

interface DescriptionRowProps {
	icon: IconType,
	label: string,
	text: string,
}

function DescriptionRow(props: DescriptionRowProps) {
	const Icon = props.icon

	return <>
		<div className='flex'>
			<div className="flex items-center">
				<Icon size={20}/>
			</div>
			<div className='ml-2'>
				{props.label}
			</div>
			<div className='ml-4'>
				{props.text}
			</div>
		</div>
	</>
}

interface CharacterDetailItemProps {
	character: Character
}

function CharacterDetailItem(
	props: CharacterDetailItemProps
) {
	return (
		<div className='px-4'>
			<Card>
				<Meta
				 title={<>{props.character.Name}</>}
				/>
				<div className='mt-4'>
					<DescriptionRow
						icon={AiTwotoneSound}
						label="略称"
						text={props.character.Nickname}
					/>
					<DescriptionRow
						icon={AiTwotoneSound}
						label="容姿"
						text={props.character.Outfit}
					/>
					<DescriptionRow
						icon={AiTwotoneSound}
						label="性格"
						text={props.character.Personality}
					/>
					<DescriptionRow
						icon={AiTwotoneSound}
						label="口調"
						text={props.character.Tone}
					/>
				</div>
			</Card>
		</div>
	)
}

export default CharacterDetailItem