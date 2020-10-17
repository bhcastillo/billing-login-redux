export interface IUser{
  id: number;
  firstName: string;
  lastName: string;
  invoices: IInvoice[];
}

export interface IInvoice {
  id:number;
  dayBehing:number;
  value:number;
}