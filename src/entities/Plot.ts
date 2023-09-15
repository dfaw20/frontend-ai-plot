export interface Plot {
	ID: number
	UserID: number
	Title        :string
	Description  :string
	Prompt       :string
	Location     :string 
	Season       :string 
	Genre        :string 
	OutputFormat :string 
	ShowWarning  :boolean
	Sensitive: boolean
}