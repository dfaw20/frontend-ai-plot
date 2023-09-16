import React, { useEffect, useState } from 'react'

import { useUser } from '../contexts/UserContext'
import { AiTwotoneEdit } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { Button, Input, Space } from 'antd'
import axios from 'axios'
import { apiUpdateUserDisplayName } from '../network/Api'
import { UserDisplayNameEdit } from '../types/post_data/User'
import { makeBearerToken } from '../repository/Storage'
import { User } from '../entities/User'
import { MessageInstance } from 'antd/es/message/interface'

interface UserDisplayNameEditFormProps {
	messageApi: MessageInstance
}

function UserDisplayNameEditForm(props: UserDisplayNameEditFormProps) {
	const {user, reloadUser} = useUser()
	const [editing, setEditing] = useState<boolean>(false)
	const [inputDisplayName, SetInputDisplayName] = useState<string>('')

	function handleUpdateDisplayName() {
		const input: UserDisplayNameEdit = {
			DisplayName: inputDisplayName
		}
		axios
			.post<User>(apiUpdateUserDisplayName(), input, {headers: {Authorization: makeBearerToken(),}})
			.then((res) => {
				reloadUser(res.data)
				setEditing(false)
				props.messageApi.success("ユーザの名前を更新しました")
			})
	}

	useEffect(() => {
		if (user != null)
			SetInputDisplayName(user.DisplayName)
	}, [user])	

	if (user == null) return null

	return (
		<div>
			{editing ? 
				<>
					<Space.Compact style={{ width: '100%' }}>
						<Input defaultValue={inputDisplayName} onChange={(e) => SetInputDisplayName(e.target.value)} />
						<Button onClick={() => handleUpdateDisplayName()}><BsCheckLg/></Button>
					</Space.Compact>	
				</>
				:
				<div className='flex justify-center gap-2'>
					<div>
						{user.DisplayName}
					</div>
					<div className='flex items-center'>
						<AiTwotoneEdit onClick={() => setEditing(true)}/>
					</div>
				</div>
			}
		</div>
	)
}

export default UserDisplayNameEditForm
