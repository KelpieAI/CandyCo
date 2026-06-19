import { productImagePath } from './productGallery'

export interface Product {
  id: string
  slug: string
  emoji: string
  image: string
  name: string
  sub: string
  price: string
  accent: string
  wash: string
  stripLabel: string
}

export const products: Product[] = [
  {
    id: 'drop001-cola',
    slug: 'fizzy-cola-bottles',
    emoji: '🥤',
    image: productImagePath('imgi_4_img_12NYDDDZ2S9TA8KX3ZJNM9FVC5.png'),
    name: 'FIZZY COLA BOTTLES',
    sub: '1KG TUB · CLASSIC RANGE',
    price: '£6',
    accent: '#c8f535',
    wash: 'rgba(200,245,53,0.04)',
    stripLabel: 'Cola Bottles',
  },
  {
    id: 'drop001-strawberry',
    slug: 'fizzy-strawberries',
    emoji: '🍓',
    image: productImagePath('imgi_15_img_17J92W6ZBJ8W5RYH5WSS4F2HYQ.png'),
    name: 'FIZZY STRAWBERRIES',
    sub: '1KG TUB · CLASSIC RANGE',
    price: '£6',
    accent: '#ff2d78',
    wash: 'rgba(255,45,120,0.05)',
    stripLabel: 'Strawberries',
  },
  {
    id: 'drop001-blue-raspberry',
    slug: 'blue-raspberry',
    emoji: '🫐',
    image: productImagePath('imgi_10_img_070JV3S3D99HJ9H2WFKYV47B8J.png'),
    name: 'BLUE RASPBERRY',
    sub: '1KG TUB · SOUR RANGE',
    price: '£6',
    accent: '#1a1aff',
    wash: 'rgba(26,26,255,0.06)',
    stripLabel: 'Blue Raspberry',
  },
  {
    id: 'drop001-rings',
    slug: 'fizzy-rings',
    emoji: '🫧',
    image: productImagePath('imgi_14_img_09KXPQ5JN58AP8WQSV1CK8JZ9D.png'),
    name: 'FIZZY RINGS',
    sub: '1KG TUB · CLASSIC RANGE',
    price: '£6',
    accent: '#ffe600',
    wash: 'rgba(255,230,0,0.05)',
    stripLabel: 'Fizzy Rings',
  },
  {
    id: 'drop001-fishes',
    slug: 'fizzy-big-fishes',
    emoji: '🐟',
    image: productImagePath('imgi_2_img_1HMN9B74FZ9TS9M2YRQFDT6W8V.-'),
    name: 'FIZZY BIG FISHES',
    sub: '1KG TUB · CLASSIC RANGE',
    price: '£6',
    accent: '#c8f535',
    wash: 'rgba(200,245,53,0.04)',
    stripLabel: 'Big Fishes',
  },
]

export const scatterItems = [
  {
    image: productImagePath('imgi_4_img_12NYDDDZ2S9TA8KX3ZJNM9FVC5.png'),
    name: 'Cola Bottles',
    price: '£6',
    left: '18%',
    top: '22%',
  },
  {
    image: productImagePath('imgi_8_img_0QH1KXEZMC8AEVNGD5W458HD7P.png'),
    name: 'Strawberries',
    price: '£6',
    left: '50%',
    top: '15%',
  },
  {
    image: productImagePath('imgi_10_img_070JV3S3D99HJ9H2WFKYV47B8J.png'),
    name: 'Blue Raspberry',
    price: '£6',
    left: '80%',
    top: '25%',
  },
  {
    image: productImagePath('imgi_14_img_09KXPQ5JN58AP8WQSV1CK8JZ9D.png'),
    name: 'Fizzy Rings',
    price: '£6',
    left: '22%',
    top: '72%',
  },
  {
    image: productImagePath('imgi_2_img_1HMN9B74FZ9TS9M2YRQFDT6W8V.-'),
    name: 'Big Fishes',
    price: '£6',
    left: '55%',
    top: '78%',
  },
  {
    image: productImagePath('imgi_16_img_0YC962MEVA9BNTMK76EHEPKZ90.png'),
    name: 'Sour Belts',
    price: '£6',
    left: '80%',
    top: '65%',
  },
]

export const SCENES = [
  { start: 0, end: 0.156 },
  { start: 0.156, end: 0.311 },
  { start: 0.311, end: 0.467 },
  { start: 0.467, end: 0.622 },
  { start: 0.622, end: 0.778 },
  { start: 0.778, end: 0.889 },
  { start: 0.889, end: 1.0 },
]

export const SCENE_COUNT = SCENES.length

export const DROP_META = {
  id: 'drop-001',
  name: 'Drop 001',
  status: 'live',
  freeDeliveryThreshold: 50,
  location: 'Leicestershire',
  yearsEstablished: 20,
}
