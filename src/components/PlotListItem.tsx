import React from 'react'
import { Button, Divider, Tag } from 'antd'
import { Plot } from '../entities/Plot'

interface PlotListItemProps {
	plot: Plot
	editable: boolean
}

function PlotListItem(props: PlotListItemProps) {

	return (
		<div className='px-4 py-2'>
			<div className='flex justify-between'>
				<div>
					<div className='font-bold text-black-800'>{props.plot.Title}</div>
					<div className='flex items-center'>
						<div className='text-gray-500'>
							{props.plot.Description}
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
				<Tag>{props.plot.Location}</Tag>
				<Tag>{props.plot.Season}</Tag>
				<Tag>{props.plot.Genre}</Tag>
				{props.plot.ShowWarning ? 
					<Tag>警告表示あり</Tag> : null
				}
				<Tag>{props.plot.OutputFormat}</Tag>
			</div>

			<div className='mt-4'>{props.plot.Prompt}</div>

			<Divider/>
		</div>
	)
}

export default PlotListItem
