import React, { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import { Button, Modal, message } from "antd"
import axios from "axios";
import { apiUserWithdrawal } from "../../network/Api";
import { MessageInstance } from "antd/es/message/interface";
import { makeBearerToken } from "../../repository/Storage";

interface WithdrawalProps {
	messageApi: MessageInstance
}

function Withdrawal(props: WithdrawalProps) {
	const {user, logout} = useUser()
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

	/**
	 * 退会確認ダイアログ
	 */
	const showModal = () => {
		setIsModalOpen(true);
	};
	
	const handleWithdrawal = () => {
		axios.post(apiUserWithdrawal(), null, {headers: {Authorization: makeBearerToken()}}).then((res) => {
			console.log(res)
			
			handleCancel()
			showCompleteModal()
		}).catch((err) => {
			console.log(err)
			props.messageApi.error("退会に失敗しました")
		})
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};


	/**
	 * 退会完了ダイアログ
	 */
	const showCompleteModal = () => {
		setIsCompleteModalOpen(true);
	};

	const handleCompleteWithdrawal = () => {
		logout()
		message.success("退会しました")
	}

	const handleCompleteModalCancel = () => {
		logout()
		message.success("退会しました")
	};

	return (
		<div className="mx-4">
			<Modal title="退会完了" 
			open={isCompleteModalOpen} 
			onOk={handleCompleteWithdrawal}
			onCancel={handleCompleteModalCancel}
			closeIcon={null}
			footer={<Button onClick={handleCompleteModalCancel}>OK</Button>}
			>
				<p>
					退会手続きが完了しました
				</p>
			</Modal>

			<h2 className="mt-4 text-lg">退会</h2>
			{user != null ?
			<>
				<Modal title="退会" open={isModalOpen} onCancel={handleCancel} footer={
					<>
					<Button onClick={() => handleWithdrawal()} className="bg-red-500 text-white">
						退会する
					</Button>
					</>
				}>
					<p className="text-xl mb-4">
						{user.DisplayName}<br/>{user.Email}
					</p>
					<p>
						この操作は戻せません。<br/>
						よろしければ退会を押してください。
					</p>
				</Modal>
				<div className="flex items-center justify-center mt-12">
					<p className="text-xl">
						{user.DisplayName}<br/>{user.Email}
					</p>
				</div>
				<div className="flex items-center justify-center mt-12">
					<p>
						退会すると作成したキャラクターとシナリオは削除されます。
					</p>
				</div>
				<div className="flex items-center justify-center mt-36">
					<Button onClick={() => showModal()} className="bg-red-500 text-white">
						退会
					</Button>
				</div>
			</>
			: null}
			
		</div>
	)
}

export default Withdrawal