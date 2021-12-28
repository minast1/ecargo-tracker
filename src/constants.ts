import * as yup from 'yup';



export const sections = [
  { title: 'Home', url: '/', options: ['about us','network','fleet','facilities']},
  { title: 'services & support', url: '#',options: ['shipping services','support','COVID-19 Vaccine Global Distribution'] },
  { title: 'products', url: '#', options:['emirates pharma','emirates fresh','emirates live','emirates safe'] },
  { title: 'news', url: '#', options: ['media center'] },
  { title: 'e-skycargo', url: '#', options: ['emirates courier','emirates mail','emirates pets','emirates charter']},
  { title: 'contact', url: '#', options:['send message', 'find local office'] },

];

export const bottomSections = [
  { title: 'Privacy policy', url: '#' },
  { title: 'Website user agreement', url: '#' },
  { title: 'Disclaimer', url: '#' },
  { title: 'Conditions of carriage', url: '#' },
  {title: 'Sitemap', url: '#'}
  
]

export const courierList = [
  { label: 'Korea Post', value: 'KOREAPOST' },
  { label: 'FedEx', value: 'FEDEX' },
  { label: 'Australia Post', value: 'AUSTRALIA POST' },
  { label: 'Pantos', value: 'PANTOS' },
  { label: 'Royal Mail', value: 'ROYAL MAIL' },
  { label: 'USPS', value: 'USPS' },
  { label: 'DHL', value: 'DHL' },
  { label: 'UPS', value: 'USPS' },
  { label: 'Canada Post', value: 'CANADA POST' },
  { label: 'XPOST', value: 'XPOST' }
           
]
 

export const text_truncate = function (str:string, length?:number | null):string {
  if (length == null) {
      length = 47
  }

  if (str.length > length) {
    let ending = '...'
    return str.substring(0, length - ending?.length) + ending;
  } else {
    return str
  }
}

export let carouselItems = [
        {
            name: "Service",
            image: "/carousel2.jpg",
            description: "Our people are the backbone of our business. With a multicultural mix of over 5,300 employees, we provide high-quality training and reward recognition to ensure an exceptional level of service. Whatever your needs, we’ll find a way. "
        },
        {
          name: "Fleet",
          image: "/carousel1.jpg",
            description: "Our fleet is one of the world’s youngest and most efficient, helping us set new standards for performance and fuel consumption. In turn, our clients benefit from exceptional reliability and speed. With over 270 wide-bodied aircraft and 12 dedicated freighters our capacity, reach and availability sets new industry benchmarks. "
  },
  {
    name: "Network",
    image: "/carousel3.jpg",
    description : "We connect you to the world’s supply chains, with a virtual network of 300 destinations spanning 80 countries across 6 continents, including 50 dedicated freighter locations. "
        }
]
    
export async function fetcher<JSON = any> (
  input: RequestInfo,
    init ?: RequestInit): Promise<JSON> 
{
  const res = await fetch(input, init)
  return  res.json()
  
}

/*export async function trackFetcher<Tracker>(input: RequestInfo, init?: RequestInit) {

  const res = await fetch(input, init);
  //save a copy to zustand store
  
  return res.json();
}*/
export const status = [
  { value: 'PACKAGE_RECIEVED', label: 'Package Recieved' },
  { value: 'PENDING', label: 'Pending Shipment' },
  { value: 'IN_TRANSIT', label: 'In Transit' },
  { value: 'DELIVERED', label: 'Delivered' },
  { value: 'RETURNED', label: 'Returned' },
  { value: 'SHIPPED', label: 'Shipped' },
  { value: 'PICK_UP', label: 'Ready for Pickup' },
   {value: 'ARRIVED_AT_DESTINATION', label: 'Arrived at destination'}
       
]


export interface ArticleType {
  title: string
  source_url: string
  image_url: string
  created_at: number
}
export interface resType {
  status: string
  totalResults: number
  articles: ArticleType[]
}

export const convertDate = (dateString: Date | string | number): string => {
 let timestamp = new Date(dateString).getTime();
let Day = new Date(timestamp).getDate();
let Month = new Date(timestamp).getMonth() + 1;
let Year = new Date(timestamp).getFullYear();
  let OurNewDateFormat = `${Day}/${Month}/${Year}`;
  return OurNewDateFormat

}

export type AuthState = {
    authView: string
    setAuthView: (to:string) => void
    //userId: string | number 
   // password: string
    loading: boolean
    error: string | string[] | undefined
};

export type IFormInput = {
  email: string 
  password: string | number
  callbackUrl?: string
  redirect?: boolean
}

export const registerSchema = yup.object({
 // name: yup.string().required('The name field is required'),
  email: yup.string().email('You must provide a valid email address').required('Email field is required'),
  password: yup.string().required('Password field is required'),
  //phone: yup.string().required('The phone field is required').length(10, 'phone number must be 10 digits'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Password mismatch!').required('Password field is required')
})

export const orderSchema = yup.object({
  name: yup.string().required('Client name field is required'),
  address: yup.string().required('Client address field is required'),
  prefix: yup.string().required('This field is required').length(3, 'Prefix length must be 3'),
  track_number: yup.string().required('This field is required'),

})

export const loginSchema = yup.object({
 // name: yup.string().required('The name field is required'),
  email: yup.string().email('You must provide a valid email address').required('Email field is required'),
  password: yup.string().required('Password field is required'),
  //phone: yup.string().required('The phone field is required').length(10, 'phone number must be 10 digits'),
  //passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'password mismatch!').required('This field is required')
})
 
type AirlineType = {
  name: string
  prefix: string
  code: string
}

export const airlinePrefix: AirlineType[] = [
  { name: 'American Airline', prefix: '001', code: 'AA' },
  { name: 'Air Canada', prefix: '014', code: 'AC' },
  { name: 'Alitalia Cargo', prefix: '055', code: 'AZ' },
  { name: 'Air France', prefix: '057', code: 'AF' },
  { name: 'Air Setchelles', prefix: '061', code: 'HM' },
  { name: 'Air New Zealand', prefix: '086', code: 'NZ' },
  { name: 'Air India', prefix: '098', code: 'AI' },
  { name: 'Finnair', prefix: '105', code: 'AY' },
  { name: 'Air Jamaica', prefix: '201', code: 'JM' },
  { name: 'Austrian Airlines', prefix: '257', code: 'OS' },
  { name: 'Africa West Cargo', prefix: '360', code: '3L' },
  { name: 'Absa Cargo', prefix: '524', code: 'M3' },
  { name: 'South American Airways', prefix: '817', code: 'AD' },
  { name: 'Air China', prefix: '999', code: 'CA' },
  { name: 'British Airways', prefix: '125', code: 'BA' },
  { name: 'Cargoitalia', prefix: '002', code: '2G' },
  { name: 'DHL Airways', prefix: '423', code: 'ER' },
  { name: 'Ethiopian Airlines', prefix: '071', code: 'ET' },
  { name: 'Egypt Air', prefix: '077', code: 'MS' },
  { name: 'Emirate Sky Cargo', prefix: '176', code: 'EK' },
  { name: 'Etihad Airways', prefix: '607', code: 'EY' },
  { name: 'Fedex Express', prefix: '023', code: 'FX' },
  { name: 'KLM Royal Dutch', prefix: '074', code: 'KL' },
  { name: 'Korean Air', prefix: '180', code: 'KE' },
  { name: 'Kuwait Airways', prefix: '229', code: 'KU' },
  { name: 'Kenya Airways', prefix: '760', code: 'KQ' },
  { name: 'Lufthansa Cargo', prefix: '020', code: 'LH' },
  { name: 'Malaysia Airlines', prefix: '232', code: 'MH' },
  { name: 'Oman Air', prefix: '910', code: 'WY' },
  { name: 'Quatar Airways', prefix: '157', code: 'QR' },
  { name: 'SouthAfrican Airways', prefix: '083', code: 'SA' },
  { name: 'Turkish Airlines', prefix: '235', code: 'TK' },
  { name: 'United Airlines', prefix: '016', code: 'UA' },
  { name: 'US Airways', prefix: '037', code: 'US' },
  { name: 'UPS', prefix: '406', code: '5X' },
  { name: 'Virgin Atlantic Cargo', prefix: '932', code: 'VS' },
  
]