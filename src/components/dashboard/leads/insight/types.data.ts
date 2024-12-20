export interface Lead {
    id: string
    name: string
    role: string
    company: string
    image: string
    tags: string[]
    description: string
    value: number
    dueDate?: string
    actionTitle?: string
    actionDescription?: string
  }
  
  export interface Activity {
    id: string
    title: string
    description: string
    icon: string
    dueDate: string
    value?: number
    type: 'review' | 'meeting' | 'opportunity'
  }
  
  