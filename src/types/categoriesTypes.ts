export interface CategoriesTypes {
    categories: CategoryItemProps[],
    editMode: boolean,
}

export interface CategoryItemProps {
    id: string,
    title: string,
    color: string,
    select: boolean,
    index?: number
}