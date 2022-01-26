export interface Animals {
    readonly id: number,
    title: string,
    description: string,
    creator: string,
    imgURL?: string,
    type?: string,
    tags?: string[] 
}