export interface ITransaction {
    id: number;
    product_name: string;
    quantity: number;
    sub_total: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}