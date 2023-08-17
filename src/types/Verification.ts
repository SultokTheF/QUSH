interface Verification {
  id: number,
  status: number,
  admin_id: number;
  owner_id: number;
  name: string;
  category_sport: number;
  location: string;
  time_from: number;
  time_to: number;
  description: string;
  price: string;
  dimensions: string;
  surface_type: number;
  latitude: number;
  longitude: number;
}

export default Verification;
