export interface AppTheme {
  background: string;
  backgroundHover: string;
  text: string;
  primary: string;
  secondary: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  border: string;
  shadow: string;
}

export const lightTheme: AppTheme = {
  background: '#f7f7f7',
  backgroundHover: '#e0e0e0',
  text: '#222',
  primary: '#1976d2',
  secondary: '#f5f5f5',
  success: '#4caf50',
  error: '#d32f2f',
  warning: '#ff9800',
  info: '#2196f3',
  border: '#e0e0e0',
  shadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

export const darkTheme: AppTheme = {
  background: '#181818',
  backgroundHover: '#222',
  text: '#fff',
  primary: '#90caf9',
  secondary: '#2d2d2d',
  success: '#81c784',
  error: '#ef5350',
  warning: '#ffb74d',
  info: '#64b5f6',
  border: '#404040',
  shadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
};