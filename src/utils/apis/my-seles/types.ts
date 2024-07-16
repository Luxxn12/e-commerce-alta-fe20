export interface IMySeles {
    transaction_id: number;
    product_name: string;
    quantity: number;
    grand_total: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}