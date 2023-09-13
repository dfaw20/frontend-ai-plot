import React from "react"
import { Link } from "react-router-dom"
import { pathTop } from "../routes/EndPoints"
import { Button } from "antd"

function NotFoundPage() {

	return (
		<div className="mx-4">
		<div>ページが見つかりません</div>
		<div className="flex items-center justify-center mt-12">
		<Link to={pathTop()}>
			<Button>
			TOPに戻る
			</Button>
		</Link>
		</div>
		</div>
	)
}

export default NotFoundPage