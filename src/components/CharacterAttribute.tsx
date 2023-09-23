import { Tag } from "antd"
import React, { ReactNode } from "react"

interface CharacterAttributeProps {
    children: ReactNode
}

function CharacterAttribute(props: CharacterAttributeProps) {
	return <Tag className="border-palePink">{props.children}</Tag>
}

export default CharacterAttribute