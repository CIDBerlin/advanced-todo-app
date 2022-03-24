export interface TasksTypes {
    taskList: TasksItemProps[],
}

export interface TasksItemProps {
    primaryId: string,
    id: string,
    title: string,
    desc: string,
    completed: boolean,
    favourite: boolean,
    completeToday: boolean,
    icon: string,
    time: string,
    index?: number,
    select: boolean,
}