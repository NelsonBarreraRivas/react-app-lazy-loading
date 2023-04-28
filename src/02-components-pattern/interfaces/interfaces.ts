import { ButtonProps, ImgeProps, CardProps, TitleProps } from '../components';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

/* interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;
} */

export interface ProductContextProps {
    increaseBy: (value: number) => void;
    counter: number;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: CardProps): JSX.Element;
    Title: (Props: TitleProps) => JSX.Element;
    Image: (Props: ImgeProps) => JSX.Element;
    Buttons: (Props: ButtonProps) => JSX.Element;
}
