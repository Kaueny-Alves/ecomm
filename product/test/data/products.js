import { randomUUID } from 'crypto';
export const produto = {
    id_user: randomUUID(),
    name: "coca",
    value: 2,
    quantity: 1,
    description: "refrigerante lata 350 ml,  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum cumque corporis a ab nihil ipsam saepe, recusandae nam deleniti! Aperiam, ea quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum cumque corporis a ab nihil ipsam saepe, recusandae nam deleniti! Aperiam, ea quisquam.",
    category: "bebidas",
    features: [
        {
            name: "refrigerante",
            description: " bebidas",
        },
        {
            name: "lata",
            description: " 350ml",
        },
        {
            name: "lata",
            description: " 350ml",
        }
    ],
    images: [
        {
            url: "https://pixabay.com/pt/photos/posso-lata-de-cola-cola-bebida-592366/",
            description: "refrigerante de lata",
        },
        {
            url: "https://pixabay.com/pt/photos/posso-lata-de-cola-cola-bebida-592366/",
            description: "refrigerante de lata 350ml",
        },
        {
            url: "https://pixabay.com/pt/photos/posso-lata-de-cola-cola-bebida-592366/",
            description: "refrigerante de lata 350ml",
        }
    ],
}
