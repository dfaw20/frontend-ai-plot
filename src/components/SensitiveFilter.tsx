import React, { ReactNode, useEffect, useState } from 'react'

import { useUser } from '../contexts/UserContext'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { pathSetting } from '../routes/EndPoints'

interface SensitiveFilterProps {
	children: ReactNode
	sensitiveContent: boolean
}

function SensitiveFilter(props: SensitiveFilterProps) {
	const {user} = useUser()
	const [showFilter, setShowFilter] = useState<boolean|null>(null)

	useEffect(() => {
		if (user == null) {
			setShowFilter(true)
		} else {
			if (user.SensitiveDirect) {
				setShowFilter(false)
			} else {
				setShowFilter(true)
			}
		}
	}, [user])

	function onclickToShow() {
		setShowFilter(false)
	}

	if (showFilter == null) return <></>

	if (showFilter && props.sensitiveContent) {
		return <div className='mx-2 my-2 px-12 py-8 border-2 border-sensitiveContent'>
			<div className='flex justify-center mb-8'>
				センシティブなコンテンツを含んでいます
			</div>

			<div className='flex justify-center'>
				<Button type='link' onClick={() => onclickToShow()}>表示する</Button>
			</div>
			<div className='flex justify-center'>
				<Link to={pathSetting()}><Button type='link'>設定を変更する</Button></Link>
			</div>
		</div>
	} else {
		return (
			<>
				{props.children}
			</>
		)
	}
}

export default SensitiveFilter
