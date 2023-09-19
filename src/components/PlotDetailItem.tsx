import React, { ReactNode } from 'react'
import { Button, Tag } from 'antd'
import { Plot } from '../entities/Plot'
import { AiTwotoneEdit } from 'react-icons/ai'
import SensitiveFilter from './SensitiveFilter'

interface PlotDetailItemProps {
	plot: Plot
	editable: boolean
}

function PlotDetailItem(props: PlotDetailItemProps) {

	return (
		<div className='px-4 py-2'>
			<div className='flex justify-between'>
				<div className='flex items-center'>
				<div className='text-black-800 text-sm'>タイトル:</div>
					<div className='font-bold text-black-800'>{props.plot.Title}</div>
				</div>
				<div className="flex items-center justify-center">
					{props.editable ?
						<>
						<Button><AiTwotoneEdit/></Button>
						</>
						: null}
				</div>
			</div>

			<SensitiveFilter sensitiveContent={props.plot.Sensitive}>
				<div>
					{props.plot.Sensitive ? 
						<Tag>センシティブ</Tag> : null
					}
				</div>

				<div className='mt-4 flex items-center'>
					<div className='text-sm'>
						プロンプト:	
					</div>
					<div>
						{props.plot.Prompt}
					</div>
				</div>			
			</SensitiveFilter>

		</div>
	)
}

export default PlotDetailItem
