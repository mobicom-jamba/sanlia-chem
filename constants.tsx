import { Product, NavItem } from './types';

// Images using reliable high-quality stock photos to ensure visibility
export const IMAGES = {
  logo: "/images/products/logo.png",
  hero_molecule: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGwP2u8B1nge5jJhB2jUGVfphuN7Pfl5csGMP-Ofz_q-H0vhtfGQwWRJcF3AjrMKYPTSIY0U220h9PDAormKpYgi8OgTxll83H38tr_Ln3txU3veVkYh7PeWuSxDycktPQFerllqLgks5z2f5BwwUOSfbCuGxvNHD7cCvr0wNbKg_MgnH0wwB6exrx3ZR1Ywpqr2ffylOf6zFnUBF4iCWbFjcQX09uAn72V5zLVdLdhAalGyAmQdrRAWiR5EOcprRnHEF7wen4Z9w",
  home_banner: "/images/products/home-banner.png",
  // Bulk/Industrial images
  ibc_tote: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnsiJHC6JrQEWlf_ELvBADqf1XReHvXq4av6jNKEsabqjuU03CaaSH0ULEAUNDtvvp3iqU2PKoXNpq_qGv-gT2ltJIr4iidGe-7AZxLrPkEyf9BMzOPYkOsXVSjrpS9AYQ0llQbCh1QXic8DDSpa1TBEfXuA4ibBbiM6j8OmAibnZ2kYKcIjJ5CvH0DbQT5p5gkPKagQf67JcDoyU2NQiD3dJPJqTWNLaGSF9kzMGHhcpFDNclKohesUw7WMQwQPe2jRqdgSNEdFI",
  white_bags: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWznwWY9PZfdTlElihVXDhdk3hzRaW_KkS4KyeO4vNE9-xZZRF7p4-ZUCr-VU099j2xhs8Nqk2p1Bdm_DGXDkmhzRV1WUnaVV0_4N1RgM-4WQREt07qnKUpVMW-fAYUhHK0djT5crbLoyp_0yuWmF1taz3YOvZRn-4XAJskzdQFB2so7QxOdLrxvsHjx1L-QTQJhPdQkE5Gypz0joEtPaCn8YV7eYO_nYXwFmOEBzfmVDRm7pcinq0Ox_Z3-8rfOLfshFCSU4wGLs",
  zinc_powder: "https://lh3.googleusercontent.com/aida-public/AB6AXuCziVZKHJKSf1-1u0OQIE4te4re0rFH7jWj4Npon_a_Z4hhiFoJSuQPnjSZoVERqTkUv7hpo1rCng8_zWZ7kdrvLWrbZ5VKlezq2x2vp1q46gEGaqb0XQ7-MKLmBAfVxnQvNAhtPCEUA2DIhQG4FdNEjMECkksQSg6a2iOKAXafYA_fqiRWCHpPBvqYuRsIPMZ2SOQodTIIGw1odJ9DRod_37Of-xaiXB4eidMnU5KaFg8vLAiAle__WoaczpgPHhJ7gNYm_H-EkSQ",
  blue_drum: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800",
  polymer: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Iq8yulHIy6LwSaCl2OkIV8hwAJz2HnGDY_03sGoGmRNlPkcVkSeg8Qk7WRaARbjasPQAwckgPKG3yf568Uh-SOE-M4k1UucoT8gWOjLoF6PgWTCNVSVP3t5A6Z1-7FRH713jqqJWHrz93dGY6Irh1TyxXur3h4dCE9gkIBGh_41Z2FX13kaqy7_-yns4Pb1uZV5MgYLDvoUwDoJLkkF8fhxJK8ebbbVNCp4o7_PznBG15vDyhuq4GvOFv79cFcQJtla8c4B67a4",
  map_bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Xhgw6f6slZlRtojzw9fKYhw2zr2P-USkIZ4191HIcBm05why9NVGqAYq94cOu-T8Pkeje4WhrwtEwC7-_Gh4actuuC-talNRJzH3W8-oQvNf4q1F6DGJFbB6nO5xE_INHoCvYVUx6qlKk9Eh8e2TbBjW5vnKY5rJHKYLP0lE_ISqsiv7gnFZS38c9KZcMCbutrwZIaMw56g6cO-ymY-PHun0ygfkQDWSW18aPirrD6owPjhHQZWcqyiqWB45lEuiVkPceIStUEY",

  // Specific H2O2 Lineup - Product Images
  h2o2_3pct_100ml: "/images/products/h2o2_3pct_100ml.jpg",
  h2o2_6pct_500ml: "/images/products/h2o2_6pct_500ml.jpg",
  h2o2_12pct_500ml: "/images/products/h2o2_12pct_500ml.jpg",
  h2o2_12pct_1000ml: "/images/products/h2o2_12pct_1000ml.jpg",
  h2o2_37pct_jerrycan: "/images/products/h2o2_37pct_jerrycan.jpg",
  h2o2_group: "/images/products/h2o2_group.jpg"
};

export const PRODUCT_CATEGORIES = [
  "Химийн бодис урвалж",
  "Хүнсний үйлдвэрт хэрэглэгддэг бодис",
  "Техникийн бодис",
  "Химийн цэвэр бодис",
  "Лабораторийн урвалж",
  "Тэжээлт орчин",
  "Багаж тоног төхөөрөмж",
  "Хөдөлмөр хамгааллын хувцас хэрэгсэл"
];

export const PRODUCTS: Product[] = [
  // H2O2 Specific Lineup
  {
    id: 'h2o2-3-100',
    name: 'Устөрөгчийн хэт исэл 3% (100мл)',
    category: 'Хүнсний үйлдвэрт хэрэглэгддэг бодис',
    description: 'Хүнсний зориулалттай, асептик савлагаатай 3%-ийн устөрөгчийн хэт исэл. Амны хөндийн эрүүл мэнд, ахуйн ариутгалд тохиромжтой.',
    tags: ['H2O2', 'Food Grade', '3%', '100ml'],
    image: IMAGES.h2o2_3pct_100ml,
    isNew: true
  },
  {
    id: 'h2o2-6-500',
    name: 'Устөрөгчийн хэт исэл 6% (500мл)',
    category: 'Хүнсний үйлдвэрт хэрэглэгддэг бодис',
    description: 'Хүнсний чанарын 6%-ийн устөрөгчийн хэт исэл. Франц технологиор үйлдвэрлэсэн, өндөр чанарын ариутгагч.',
    tags: ['H2O2', 'Food Grade', '6%', '500ml'],
    image: IMAGES.h2o2_6pct_500ml,
    isNew: true
  },
  {
    id: 'h2o2-12-500',
    name: 'Устөрөгчийн хэт исэл 12% (500мл)',
    category: 'Хүнсний үйлдвэрт хэрэглэгддэг бодис',
    description: 'Өндөр концентрацитай 12%-ийн хүнсний устөрөгчийн хэт исэл. Асептик боловсруулалт, үйлдвэрлэлийн цэвэрлэгээнд ашиглана.',
    tags: ['H2O2', 'Food Grade', '12%', '500ml'],
    image: IMAGES.h2o2_12pct_500ml
  },
  {
    id: 'h2o2-12-1000',
    name: 'Устөрөгчийн хэт исэл 12% (1000мл)',
    category: 'Хүнсний үйлдвэрт хэрэглэгддэг бодис',
    description: '12%-ийн концентрацитай, 1 литрийн том савлагаатай устөрөгчийн хэт исэл. Хүнсний үйлдвэрлэлд өргөн хэрэглэнэ.',
    tags: ['H2O2', 'Food Grade', '12%', '1000ml'],
    image: IMAGES.h2o2_12pct_1000ml
  },
  {
    id: 'h2o2-37-tech',
    name: 'Устөрөгчийн хэт исэл 37% (Техникийн)',
    category: 'Техникийн бодис',
    description: 'Техникийн зориулалттай 37%-ийн устөрөгчийн хэт исэл (Канистр). Уул уурхай, нэхмэл, цаасны үйлдвэрт цайруулагч, ариутгагчаар ашиглана.',
    tags: ['H2O2', 'Technical', '37%', 'Bulk'],
    image: IMAGES.h2o2_37pct_jerrycan
  },

  // Other Industrial Chemicals
  {
    id: '3',
    name: 'Натрийн шүлт (Sodium Hydroxide)',
    category: 'Техникийн бодис',
    description: 'Бохирдол, өөх тосыг уусгах шинж чанартай тул үйлдвэрлэлийн цэвэрлэгээ, саван хийх, уул уурхайд хүдэр баяжуулахад ашигладаг.',
    tags: ['NaOH', 'CAS: 1310-73-2', 'Caustic Soda', '99%'],
    image: IMAGES.white_bags
  },
  {
    id: '4',
    name: 'Лимоны хүчил (Citric Acid)',
    category: 'Хүнсний үйлдвэрт хэрэглэгддэг бодис',
    description: 'Гоо сайхан, хоол хүнс, цэвэрлэгээний ариутгагч бүтээгдэхүүн, эмийн үйлдвэрлэлд ашиглана. Мөн уул уурхайн салбарт хэрэглэгдэнэ.',
    tags: ['C6H8O7', 'CAS: 5949-29-1', 'Food Grade'],
    image: IMAGES.white_bags
  },
  {
    id: '5',
    name: 'Азотын хүчил (Nitric Acid)',
    category: 'Химийн бодис урвалж',
    description: 'Өнгөгүй хурц үнэртэй, хүчтэй исэлдүүлэх шинж чанартай. Бордоо, тэсрэх бодис, зэвэрдэггүй ган үйлдвэрлэл, уул уурхайд хүдэр боловсруулахад ашиглана.',
    tags: ['HNO3', 'CAS: 7697-37-2', '57-72%'],
    image: IMAGES.ibc_tote
  },
  {
    id: '6',
    name: 'Тринатри фосфат (Trisodium Phosphate)',
    category: 'Техникийн бодис',
    description: 'Хүчтэй цэвэрлэгээний бодис, тос арилгагч. Ус цэвэршүүлэх, нэхмэл эдлэл, металл боловсруулалтад өргөн хэрэглэнэ.',
    tags: ['Na3PO4', 'CAS: 10101-89-0'],
    image: IMAGES.white_bags
  },
  {
    id: '7',
    name: 'Техникийн сода (Sodium Carbonate)',
    category: 'Техникийн бодис',
    description: 'Угаалгын нунтаг, шил, цаас үйлдвэрлэл, ус зөөлрүүлэхэд ашигладаг. Уул уурхайд флотацийн бодис болон рН зохицуулагч болдог.',
    tags: ['Na2CO3', 'CAS: 497-19-8'],
    image: IMAGES.white_bags
  },
  {
    id: '8',
    name: 'Цайр (Zinc)',
    category: 'Химийн бодис урвалж',
    description: 'Гангийн зэврэлтээс хамгаалах, уул уурхайд үнэт металл (алт, мөнгө) тунадасжуулахад ашигладаг.',
    tags: ['Zn', 'CAS: 7440-66-6', 'Metal'],
    image: IMAGES.zinc_powder
  },
  {
    id: '9',
    name: 'Аммиак (Ammonium Hydroxide)',
    category: 'Химийн бодис урвалж',
    description: 'Бордоо, хуванцар, нийлэг утас үйлдвэрлэл, уул уурхайн уусгалт (зэс, никель) болон металл цэвэршүүлэлтэд ашиглана.',
    tags: ['NH4OH', 'CAS: 1336-21-6'],
    image: IMAGES.blue_drum
  },
  {
    id: '10',
    name: 'Техникийн давс (Sodium Chloride)',
    category: 'Техникийн бодис',
    description: 'Ус зөөлрүүлэх, замын мөс хайлуулах, бусад химийн бодис үйлдвэрлэлд өргөн хэрэглэнэ. 99.88% NaCl агуулсан.',
    tags: ['NaCl', 'CAS: 7647-14-5'],
    image: IMAGES.white_bags
  },
  {
    id: '11',
    name: 'Давсны хүчил (Hydrochloric Acid)',
    category: 'Химийн бодис урвалж',
    description: 'Хүдэр боловсруулах, олборлох, ялгах, цэвэршүүлэх, арьс шир боловсруулах зэрэг олон салбарт хэрэглэнэ. Өнгөгүй, хурц үнэртэй.',
    tags: ['HCl', 'CAS: 7647-01-0'],
    image: IMAGES.ibc_tote
  },
  {
    id: '12',
    name: 'Борын хүчил (Boric Acid)',
    category: 'Химийн цэвэр бодис',
    description: 'Үйлдвэрийн боловсруулалт, эм, гоо сайхан, шил, керамик, мод хамгаалахад ашигладаг.',
    tags: ['H3BO3', 'CAS: 10043-35-3'],
    image: IMAGES.white_bags
  },
  {
    id: '13',
    name: 'Шоргоолжны хүчил (Formic Acid)',
    category: 'Химийн бодис урвалж',
    description: 'Нэхмэл эдлэл, арьс шир боловсруулах, хөдөө аж ахуй, ариутгалын бодис үйлдвэрлэхэд ашигладаг. Байгаль орчинд ээлтэй.',
    tags: ['HCOOH', 'CAS: 64-18-6'],
    image: IMAGES.ibc_tote
  },
  {
    id: '14',
    name: 'Цууны хүчил (Acetic Acid)',
    category: 'Хүнсний үйлдвэрт хэрэглэгддэг бодис',
    description: 'Хуванцар үйлдвэрлэл (PET), нэхмэл, хүнс, эмийн үйлдвэрлэлд өргөн хэрэглэгддэг. Уул уурхайн тэсрэх бодисын нэмэлт.',
    tags: ['CH3COOH', 'CAS: 64-19-7'],
    image: IMAGES.ibc_tote
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Бүтээгдэхүүн', path: '/products' },
  { label: 'Үйлчилгээ', path: '/safety' },
  { label: 'Бидний тухай', path: '/about' },
  { label: 'Холбоо барих', path: '/#contact' },
];