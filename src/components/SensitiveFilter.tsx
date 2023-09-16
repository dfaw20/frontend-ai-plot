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
	const [showFilter, setShowFilter] = useState(true)

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

	if (showFilter && props.sensitiveContent) {
		return <>
			<div>センシティブなコンテンツを含んでいます</div>

			<div>
				<Button type='link' onClick={() => onclickToShow()}>表示する</Button>
			</div>
			<div>
				<Link to={pathSetting()}><Button type='link'>設定を変更する</Button></Link>
			</div>
		</>
	} else {
		return (
			<>
				{props.children}
			</>
		)
	}
}

export default SensitiveFilter
