export class CreateOrderDto {
  customer: {
    fullName: string;
    dob: string;
    phone: string;
    nationalId?: string;
  };

  items: string[];
}
