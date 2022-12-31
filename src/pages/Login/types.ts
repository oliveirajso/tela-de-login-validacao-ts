export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}

export interface IFormLoginType {
  src?: string;
  autoplay?: true,
  stateMachines?: string,
};