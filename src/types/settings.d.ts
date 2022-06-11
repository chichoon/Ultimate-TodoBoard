import { ChangeEventHandler, FormEventHandler } from 'react';

export interface ISettingsFormProps {
  name: string;
  value: string;
  label: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
