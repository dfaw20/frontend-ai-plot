export interface User {
    ID: number
    Email: string
    DisplayName: string
    SensitiveDirect: boolean
}

export interface UserResult {
    user: User
}