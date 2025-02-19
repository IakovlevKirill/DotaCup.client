

export type TeamMemberType = {
    name: string
    mmr: number
    avatar_url?: string
    positions: string
}

/// REQUESTS BODY

export type AuthRequestType = {
    UserName: string
    Password: string
}

export type CreateTournamentRequestType = {
    ImgUrl: string
    Description: string
    StartDate: Date
    AdditionalInfo: string
}

export type EnterTournamentRequestType = {
    TournamentId: string
    UserId : string
}

export type RegisterRequestType = {
    Email: string
    UserName: string
    Password: string
}

export type SetCaptainsRequestType = {
    TournamentId: string
    UserIds: string[]
}

/// RESPONSES BODY

export type CreateUserFromSocialLoginResponseType = {
    Email: string
    AvatarUrl: string
    UserName: string
    LoginProviderSubject: string
}

export type AuthenticationResponseType = {
    Token: string
    Expiration: Date
}

export type BaseResponseType = {
    Success: boolean
    Error: string
    CreatedId: string
}

/// Models

export type User = {
    id: string
    UserName: string
    Email: string
    SteamUrl: string
    DiscordName : string
    PlayerPosition: string
    PTS: string
    AvatarUrl: string
}

export type Tournament = {
    Id: string
    ImgUrl: string
    Description: string
    AdditionalInfo: string
    StartDate: Date
    IsActive: boolean
    Captains: string[]
    Members: User[]
}

export type Clip = {
    Url: string
    ViewCount: number
    LikeCount: number
    Description: string
}