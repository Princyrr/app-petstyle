// Definição das cores
export const colors = {
  primary: '#782CBF', // Roxo principal
  primaryLight: '#EFE9FF',
  secondary: '#FF007F', // Pink
  secondaryLight: '#FFEFE0',
  success: '#4ADE80',
  warning: '#FACC15',
  error: '#F43F5E',
  
  // Tons de cinza
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    '50': '#F9FAFB',
    '100': '#F3F4F6',
    '200': '#E5E7EB',
    '300': '#D1D5DB',
    '400': '#9CA3AF',
    '500': '#6B7280',
    '600': '#4B5563',
    '700': '#374151',
    '800': '#1F2937',
    '900': '#111827',
  },
};

// Definição da tipografia
export const typography = {
  heading1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    lineHeight: 36,
    color: colors.gray[900],
  },
  heading2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    lineHeight: 32,
    color: colors.gray[900],
  },
  heading3: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    lineHeight: 28,
    color: colors.gray[900],
  },
  subtitle1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    lineHeight: 24,
    color: colors.gray[900],
  },
  subtitle2: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    lineHeight: 22,
    color: colors.gray[900],
  },
  body1: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray[900],
  },
  body2: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.gray[900],
  },
  button: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: colors.gray[500],
  },
};