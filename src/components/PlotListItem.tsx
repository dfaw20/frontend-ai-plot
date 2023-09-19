import React, { ReactNode } from 'react'
import { Button, Divider, Tag } from 'antd'
import { Plot } from '../entities/Plot'
import { AiTwotoneEdit } from 'react-icons/ai'
import SensitiveFilter from './SensitiveFilter'
import { Link } from 'react-router-dom'
import { pathPlotDetail, pathPlotEdit } from '../routes/EndPoints'

interface PlotListItemProps {
	plot: Plot
	editable: boolean
	revealPrompt: boolean
	actionArea: ReactNode
}

function PlotListItem(props: PlotListItemProps) {

	return (
		<div className='px-4 py-2'>
			<div className='flex justify-between'>
				<div>
					<Link to={pathPlotDetail(props.plot.ID.toString())}>
					<div className='font-bold text-black-800'>{props.plot.Title}</div>
					</Link>
				</div>
				<div className="flex items-center justify-center">
					{props.editable ?
						<Link to={pathPlotEdit(props.plot.ID.toString())}>
							<Button><AiTwotoneEdit/></Button>
						</Link>
						: null}
				</div>
			</div>

			<SensitiveFilter sensitiveContent={props.plot.Sensitive}>
				<div>
					{props.plot.Sensitive ? 
						<Tag>センシティブ</Tag> : null
					}
				</div>

				{props.revealPrompt ? 
					<div className='mt-4'>{props.plot.Prompt}</div>
					: null }

				<div className='mt-4 flex items-center justify-center'>
					{props.actionArea}
				</div>
			</SensitiveFilter>

			<Divider/>
		</div>
	)
}

export default PlotListItem
