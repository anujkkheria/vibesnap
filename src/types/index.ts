export interface User {
  id: string
  name: string
  avatar: string
}

export interface Post {
  id: string
  user: User
  content: string
  timestamp: string
  likes: number
  images?: string[]
  hashtags: string[]
}

export interface GalleryImage {
  url: string
  type: 'image' | 'video'
  selected?: boolean
  selectedIndex?: number
}

export interface IPopup {
  open: boolean
}

export interface IRoundedButton {
  handleClick: () => void
}
