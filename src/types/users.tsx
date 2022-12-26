export interface IUser {
  userId: string
  firstName: string
  lastName: string
  email: string
}

export interface IUsersResult {
  code: string
  data: IUser[]
  error: string | null
}
