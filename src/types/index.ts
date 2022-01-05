interface Product {
    id: number,
    title: string
    thumbnail: string
    price: string
    address: {
        state_name: string
    }
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
    base_price: string
    initial_quantity: number
    available_quantity: number
    thumbnail: string
    title: string
    plain_text: string
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