import React, { ReactNode, useState } from "react"
import { CgMenuRight } from 'react-icons/cg'
import { Drawer } from "antd"
import { useUser } from "../contexts/UserContext";
import { pathPlayer, pathSetting } from "../routes/EndPoints";
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
				<button onClick={() => handleMenuClick(() => pathPlayer(user.ID.toString()))}>
					{user.DisplayName}
				</button>
				</>
		}

		return <></>
	}

	function handleMenuClick(path: () => string) {
		onClose()
		navigate(path())
	}

	return (
		<>
			<button  onClick={showDrawer}><CgMenuRight size={30}/></button>
			<Drawer title={title()} placement="right" onClose={onClose} open={open}>
				<button onClick={() => handleMenuClick(pathSetting)}>設定</button>
			</Drawer>
		</>
	)
}

export default DrawerButton