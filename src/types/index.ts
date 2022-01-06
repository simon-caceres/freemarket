interface Product {
    id: number,
    title: string
    picture: string
    address: {
        state_name: string
    },
    price: {
        amount: string
        currency: string
    },
}

interface Items {
    items: Array<Product>
}

interface PaginationData {
    currentPage: number
    totalPages: number
    pageLimit: number
}

interface PaginationPRops {
    totalRecords: number
    totalPages: number
    pageNeighbours: number
    currentPage: number
    pageLimit: number
    onPageChanged: Function
}

interface InfoElement {
    info: ItemDetailedType
}

interface ItemDetailedType {
    condition: string
    price: {
        amount: string
        currency: string
    },
    initial_quantity: number
    available_quantity: number
    picture: string
    title: string
    description: string
}

interface ItemCardProps {
    navigateToItemInfo: Function;
    id: number;
    item: Product;
}

export type {
    Product,
    Items,
    PaginationData,
    ItemDetailedType,
    InfoElement,
    ItemCardProps,
    PaginationPRops
}