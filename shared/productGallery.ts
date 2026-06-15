export const PRODUCT_PRICE = '£6'

export const REMOVEBG_SUFFIX = '-removebg-preview'

/** Original opaque filename → transparent removebg filename in public/products */
export const PRODUCT_IMAGE_REPLACEMENTS: Record<string, string> = {
  'imgi_10_img_070JV3S3D99HJ9H2WFKYV47B8J.png':
    'imgi_10_img_070JV3S3D99HJ9H2WFKYV47B8J-removebg-preview.png',
  'imgi_10_img_4T6GAVSXQV9ERT0MAVEC1RHTMM.png':
    'imgi_10_img_4T6GAVSXQV9ERT0MAVEC1RHTMM-removebg-preview.png',
  'imgi_11_img_3HCY0973X29GCT7VX4BF9DTSGR.png':
    'imgi_11_img_3HCY0973X29GCT7VX4BF9DTSGR-removebg-preview.png',
  'imgi_12_img_1880HMVWVZ803TRPTPB90S09H3.png':
    'imgi_12_img_1880HMVWVZ803TRPTPB90S09H3-removebg-preview.png',
  'imgi_12_img_64GHJ2Y6JT9CRAKETS8QGPPS3D.png':
    'imgi_12_img_64GHJ2Y6JT9CRAKETS8QGPPS3D-removebg-preview.png',
  'imgi_13_img_3SKGJAZD0F9BCAFTAXX57K4SBB.png':
    'imgi_13_img_3SKGJAZD0F9BCAFTAXX57K4SBB-removebg-preview.png',
  'imgi_13_img_4GE0JGXJKD93Z8N02WJRN7H7SW.png':
    'imgi_13_img_4GE0JGXJKD93Z8N02WJRN7H7SW-removebg-preview.png',
  'imgi_14_img_5TQWDVF5TX88NA7J0FJJNFGQK9.png':
    'imgi_14_img_5TQWDVF5TX88NA7J0FJJNFGQK9-removebg-preview.png',
  'imgi_15_img_17J92W6ZBJ8W5RYH5WSS4F2HYQ.png':
    'imgi_15_img_17J92W6ZBJ8W5RYH5WSS4F2HYQ-removebg-preview.png',
  'imgi_15_img_2KFR0RHKDK93NSY3N0VS0KCAD9.png':
    'imgi_15_img_2KFR0RHKDK93NSY3N0VS0KCAD9-removebg-preview.png',
  'imgi_16_img_0YC962MEVA9BNTMK76EHEPKZ90.png':
    'imgi_16_img_0YC962MEVA9BNTMK76EHEPKZ90-removebg-preview.png',
  'imgi_17_img_637YWPJJ8P9VNVGZAN02FMC1AY.png':
    'imgi_17_img_637YWPJJ8P9VNVGZAN02FMC1AY-removebg-preview.png',
  'imgi_4_img_12NYDDDZ2S9TA8KX3ZJNM9FVC5.png':
    'imgi_4_img_12NYDDDZ2S9TA8KX3ZJNM9FVC5-removebg-preview.png',
  'imgi_5_img_1Y1SAH64AC9KEVRE3BH4T5P8N9.png':
    'imgi_5_img_1Y1SAH64AC9KEVRE3BH4T5P8N9-removebg-preview.png',
  'imgi_6_img_1TZHVCVQSV8NBR5HNWVD30JBHP.png':
    'imgi_6_img_1TZHVCVQSV8NBR5HNWVD30JBHP-removebg-preview.png',
  'imgi_7_img_2Q8S51KYEM8YTV4KD7FXQCHCJX.png':
    'imgi_7_img_2Q8S51KYEM8YTV4KD7FXQCHCJX-removebg-preview.png',
  'imgi_7_img_7168QPVZX99APBKZEYYRWGH1VF.png':
    'imgi_7_img_7168QPVZX99APBKZEYYRWGH1VF-removebg-preview.png',
  'imgi_9_img_6PTSVED1Z99VK8X8MMKMFF81QJ.png':
    'imgi_9_img_6PTSVED1Z99VK8X8MMKMFF81QJ-removebg-preview.png',
}

export const PRODUCT_IMAGE_MAP: Record<string, string> = {
  'imgi_4_img_12NYDDDZ2S9TA8KX3ZJNM9FVC5.png': 'Giant Fizzy Cola Bottles',
  'imgi_13_img_3SKGJAZD0F9BCAFTAXX57K4SBB.png': 'Fizzy Cola Bottles',
  'imgi_5_img_2W6ZRYMPBK8ME93FRNBYX29QQ4.-': 'Cola Bottles',
  'imgi_8_img_0QH1KXEZMC8AEVNGD5W458HD7P.png': 'Giant Strawberry',
  'imgi_15_img_17J92W6ZBJ8W5RYH5WSS4F2HYQ.png': 'Fizzy Strawberries',
  'imgi_8_img_3TN45P7D3G8XJVZR0P2Q720JYK.png': 'Jelly Strawberry',
  'imgi_10_img_070JV3S3D99HJ9H2WFKYV47B8J.png': 'Blue Raspberry Bottles',
  'imgi_10_img_4T6GAVSXQV9ERT0MAVEC1RHTMM.png': 'Fizzy Blue Raspberry',
  'imgi_9_img_6EXG10FW7598V9RCJQ5B281JA8.png': 'Fizzy Blue Bottles',
  'imgi_11_img_3HCY0973X29GCT7VX4BF9DTSGR.png': 'Blue Raspberry Rings',
  'imgi_14_img_09KXPQ5JN58AP8WQSV1CK8JZ9D.png': 'Fizzy Rings',
  'imgi_14_img_5TQWDVF5TX88NA7J0FJJNFGQK9.png': 'Fizzy Rings Tub',
  'imgi_2_img_1HMN9B74FZ9TS9M2YRQFDT6W8V.-': 'Big Dolphin',
  'imgi_2_img_5M2BC6V0VA8F4B992YCTBVB9Y3.-': 'Blue Dolphin',
  'imgi_12_img_1880HMVWVZ803TRPTPB90S09H3.png': 'Fizzy Coins',
  'imgi_12_img_64GHJ2Y6JT9CRAKETS8QGPPS3D.png': 'Fizzy Coins Tub',
  'imgi_7_img_2Q8S51KYEM8YTV4KD7FXQCHCJX.png': 'Fizzy Bears',
  'imgi_7_img_7168QPVZX99APBKZEYYRWGH1VF.png': 'Fizzy Bears Tub',
  'imgi_16_img_0YC962MEVA9BNTMK76EHEPKZ90.png': 'Fizzy Tongue',
  'imgi_6_img_1TZHVCVQSV8NBR5HNWVD30JBHP.png': 'Jelly Alphabet',
  'imgi_5_img_1Y1SAH64AC9KEVRE3BH4T5P8N9.png': 'Hearts',
  'imgi_1_image.webp': 'CandyCo London',
  'imgi_17_image.webp': 'CandyCo Brand',
}

const ORIGINAL_PRODUCT_IMAGE_FILES = [
  'imgi_10_img_070JV3S3D99HJ9H2WFKYV47B8J.png',
  'imgi_10_img_4T6GAVSXQV9ERT0MAVEC1RHTMM.png',
  'imgi_11_img_3HCY0973X29GCT7VX4BF9DTSGR.png',
  'imgi_11_img_62HJX698FY8HYRENWF3V8743ZN.png',
  'imgi_12_img_1880HMVWVZ803TRPTPB90S09H3.png',
  'imgi_12_img_64GHJ2Y6JT9CRAKETS8QGPPS3D.png',
  'imgi_13_img_3SKGJAZD0F9BCAFTAXX57K4SBB.png',
  'imgi_13_img_4GE0JGXJKD93Z8N02WJRN7H7SW.png',
  'imgi_14_img_09KXPQ5JN58AP8WQSV1CK8JZ9D.png',
  'imgi_14_img_5TQWDVF5TX88NA7J0FJJNFGQK9.png',
  'imgi_15_img_17J92W6ZBJ8W5RYH5WSS4F2HYQ.png',
  'imgi_15_img_2KFR0RHKDK93NSY3N0VS0KCAD9.png',
  'imgi_16_img_0YC962MEVA9BNTMK76EHEPKZ90.png',
  'imgi_17_image.webp',
  'imgi_17_img_637YWPJJ8P9VNVGZAN02FMC1AY.png',
  'imgi_1_image.webp',
  'imgi_2_img_1HMN9B74FZ9TS9M2YRQFDT6W8V.-',
  'imgi_2_img_5M2BC6V0VA8F4B992YCTBVB9Y3.-',
  'imgi_3_img_5W7C1C2CG18CQB10MCSVPGDNPW.-',
  'imgi_3_img_615R1ANPD38C68PCCW0V4BM44R.-',
  'imgi_4_img_12NYDDDZ2S9TA8KX3ZJNM9FVC5.png',
  'imgi_4_img_2NQM2NKXK48EYT439HYP3V7JXD.-',
  'imgi_5_img_1Y1SAH64AC9KEVRE3BH4T5P8N9.png',
  'imgi_5_img_2W6ZRYMPBK8ME93FRNBYX29QQ4.-',
  'imgi_6_img_1TZHVCVQSV8NBR5HNWVD30JBHP.png',
  'imgi_6_img_6CQ74X14PA8J1929Q6P22Y1VB3.-',
  'imgi_7_img_2Q8S51KYEM8YTV4KD7FXQCHCJX.png',
  'imgi_7_img_7168QPVZX99APBKZEYYRWGH1VF.png',
  'imgi_8_img_0QH1KXEZMC8AEVNGD5W458HD7P.png',
  'imgi_8_img_3TN45P7D3G8XJVZR0P2Q720JYK.png',
  'imgi_9_img_6EXG10FW7598V9RCJQ5B281JA8.png',
  'imgi_9_img_6PTSVED1Z99VK8X8MMKMFF81QJ.png',
] as const

export function resolveProductFilename(filename: string): string {
  return PRODUCT_IMAGE_REPLACEMENTS[filename] ?? filename
}

export function productImagePath(filename: string): string {
  return `/products/${resolveProductFilename(filename)}`
}

export function isTransparentProductFilename(filename: string): boolean {
  return filename.includes(REMOVEBG_SUFFIX)
}

export function isTransparentProductSrc(src: string): boolean {
  return isTransparentProductFilename(src.split('/').pop() ?? '')
}

export const PRODUCT_IMAGE_FILES = ORIGINAL_PRODUCT_IMAGE_FILES.map((filename) =>
  resolveProductFilename(filename),
)

export function productImageSrc(filename: string): string {
  return productImagePath(filename)
}

export function productImageTitle(filename: string): string {
  if (PRODUCT_IMAGE_MAP[filename]) return PRODUCT_IMAGE_MAP[filename]

  const original = filename
    .replace(/-removebg-preview\.png$/, '.png')
    .replace(/-removebg-preview\.$/, '.-')

  return PRODUCT_IMAGE_MAP[original] ?? 'CandyCo 1kg Tub'
}

export interface GalleryProduct {
  id: string
  filename: string
  src: string
  title: string
  price: string
}

export const GALLERY_PRODUCTS: GalleryProduct[] = PRODUCT_IMAGE_FILES.map((filename) => ({
  id: filename,
  filename,
  src: productImageSrc(filename),
  title: productImageTitle(filename),
  price: PRODUCT_PRICE,
}))
