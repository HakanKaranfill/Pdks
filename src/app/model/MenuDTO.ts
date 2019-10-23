export class MenuDTO {
    id: string;
    text: string;
    icon: string;
    path: string;
    items?: MenuDTO[]; 
}
