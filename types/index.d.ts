import Vue from 'vue';

declare namespace VantElementNotice {
  interface MessageOptions {
    message: string;
    type?: 'success' | 'warning' | 'error' | 'info';
    duration?: number;
    showClose?: boolean;
    center?: boolean;
    onClose?: () => void;
  }

  interface MessageFunction {
    (options: MessageOptions | string): Promise<void>;
    success(message: string, options?: Omit<MessageOptions, 'message' | 'type'>): Promise<void>;
    warning(message: string, options?: Omit<MessageOptions, 'message' | 'type'>): Promise<void>;
    error(message: string, options?: Omit<MessageOptions, 'message' | 'type'>): Promise<void>;
    info(message: string, options?: Omit<MessageOptions, 'message' | 'type'>): Promise<void>;
  }

  interface AlertOptions {
    message: string;
    title?: string;
    confirmButtonText?: string;
    type?: 'success' | 'warning' | 'info' | 'error';
    showClose?: boolean;
    closeOnClickModal?: boolean;
    callback?: () => void;
  }

  type AlertFunction = {
    (options: AlertOptions | string, title?: string, confirmButtonText?: string): Promise<void>;
  }

  interface ConfirmOptions {
    message: string;
    title?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    type?: 'success' | 'warning' | 'info' | 'error';
    showClose?: boolean;
    showCancelButton?: boolean;
    closeOnClickModal?: boolean;
    closeOnPressEscape?: boolean;
  }

  type ConfirmFunction = {
    (options: ConfirmOptions | string, title?: string): Promise<void>;
  }

  interface Utils {
    message: MessageFunction;
    alert: AlertFunction;
    confirm: ConfirmFunction;
  }

  interface PluginOptions {
    framework?: 'element' | 'vant';
    features?: {
      message?: boolean;
      alert?: boolean;
      confirm?: boolean;
    };
  }
}

declare module 'vant-element-notice' {
  const vantElementNotice: {
    install(Vue: typeof Vue, options?: VantElementNotice.PluginOptions): void;
    message: VantElementNotice.MessageFunction;
    alert: VantElementNotice.AlertFunction;
    confirm: VantElementNotice.ConfirmFunction;
  };
  
  export const message: VantElementNotice.MessageFunction;
  export const alert: VantElementNotice.AlertFunction;
  export const confirm: VantElementNotice.ConfirmFunction;
  
  export default vantElementNotice;
}

declare module 'vue/types/vue' {
  interface Vue {
    $utils: VantElementNotice.Utils;
    $vantElementConfig: {
      framework: 'element' | 'vant';
    };
  }
} 