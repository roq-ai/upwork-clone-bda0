import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobsInterface {
  id?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface JobsGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
}
