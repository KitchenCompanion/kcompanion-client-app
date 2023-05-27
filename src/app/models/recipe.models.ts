import { Time } from "@angular/common"  

export interface InputRecipe{
    title: string
    ingredients: string
    steps: string
    category: string
    level: string
    prep_time: number
    rating: number
    author: number
}

export interface InputResponse{
    id: number,
    title: string
    ingredients: string
    steps: string
    created_at: string
    updated_at: string
    category: string
    level: string
    prep_time: number
    author: number
    rating: number
}

// export interface Category {
//     name: string,
//     value: string,
// }