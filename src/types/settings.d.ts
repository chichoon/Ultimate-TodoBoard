import { ChangeEventHandler, FormEventHandler } from 'react';

export interface ISettingsForm {
  name: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}
