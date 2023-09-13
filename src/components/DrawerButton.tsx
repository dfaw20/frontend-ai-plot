import React, { ReactNode, useState } from "react"
import { CgMenuRight } from 'react-icons/cg'
import { Divider, Drawer } from "antd"
import { useUser } from "../contexts/UserContext";
import { pathPlayer, pathPlayerPlots, pathSetting } from "../routes/EndPoints";
import { useNavigate } from "react-router-dom";

function DrawerButton() {

	const [open, setOpen] = useState(false);
	const {user} = useUser()
	const navigate = useNavigate()

	const showDrawer = () => {
	  setOpen(true);
	};
  
	const onClose = () => {
	  setOpen(false);
	};

	function title(): ReactNode {
		if (user) {
			return <>
				<button onClick={() => handleMenuClick(pathPlayer(user.ID.toString()))}>
					{user.DisplayName}
				</button>
				</>
		}

		return <></>
	}

	function handleMenuClick(path: string) {
		onClose()
		navigate(path)
	}

	return (
		<>
			<button  onClick={showDrawer}><CgMenuRight size={30}/></button>
			<Drawer title={title()} placement="right" onClose={onClose} open={open}>
				<div>
					<button onClick={() => handleMenuClick(pathSetting())}>設定</button>
				</div>
				<Divider/>
				{user != null ? 
				<div>
					<button onClick={() => handleMenuClick(pathPlayerPlots(user.ID.toString()))}>シナリオ管理</button>
				</div>
				 : null}
			</Drawer>
		</>
	)
}

export default DrawerButton