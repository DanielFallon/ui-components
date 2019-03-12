declare module 'ui-components' {
  import React from 'react';
  import { ButtonProps as AntButtonProps } from 'antd/lib/button';
  import { AlertProps } from 'antd/lib/alert';
  import { MessageApi } from 'antd/lib/message';
  interface ButtonProps extends Partial<AntButtonProps> {
    upload?: boolean;
    download?: boolean;
    clickFn?: (event: any) => any;
    blurFn?: () => any;
    type?: string;
    size?: string;
    className?: string;
    children?: any;
    loading?: boolean;
    style?: Partial<CSSStyleDeclaration>;
    theme?: any;
    icon?: boolean;
  }

  interface CheckboxProps {
    checkboxData?: any;
    layout?: string;
    styled?: boolean;
    onChange?: (item: any) => void;
    className?: string;
    mode?: string;
    theme?: any;
  }

  interface DrawerProps {
    visible: boolean;
    onClose: () => void;
    title: string;
    placement?: 'right' | 'left' | 'top' | 'bottom';
    width?: number;
  }

  interface ColorPickerProps {
    placement?: string;
    color?: string;
    onChange?: (color: string) => void;
  }

  interface IconProps {
    className?: string;
  }

  export const Button: (props: ButtonProps) => React.FunctionComponent<ButtonProps, {}>;
  export const Checkbox: (props: CheckboxProps) => React.FunctionComponent<CheckboxProps, {}>;
  export class ColorPicker extends React.Component<ColorPickerProps, any> {}
  export const Layers: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Settings: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Checkmark: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Close: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Info: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Copy: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const ChevronDown: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const Link: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export class TextArea extends React.Component<any, any> {}
  export const DocumentIcon: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const ChevronRight: (props: IconProps) => React.FunctionComponent<IconProps, {}>;
  export const message: MessageApi;
  export class Alert extends React.Component<AlertProps, {}> {}
  export class Input extends React.Component<any, any> {}
  export class MultiInput extends React.Component<any, any> {}
  export const ThemeProvider: (props: any) => void;
  export class Drawer extends React.Component<DrawerProps, any>{};
}
