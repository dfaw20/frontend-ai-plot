import React from 'react'
import { Card} from 'antd'
import Meta from 'antd/es/card/Meta'
import { Character } from '../entities/Character'
import {AiTwotoneSound} from 'react-icons/ai'
import { IconType } from 'react-icons'
import SensitiveFilter from './SensitiveFilter'

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
				<SensitiveFilter sensitiveContent={props.character.Sensitive}>
					<div className='mt-4'>
						<DescriptionRow
							icon={AiTwotoneSound}
							label="名前"
							text={props.character.Nickname}
						/>
						<DescriptionRow
							icon={AiTwotoneSound}
							label="服装"
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
					<div className='mt-4'>
						{props.character.Profile}
					</div>
				</SensitiveFilter>
			</Card>
		</div>
	)
}

export default CharacterDetailItem
