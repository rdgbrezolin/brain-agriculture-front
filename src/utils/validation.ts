export const validateCPF = (cpf: string): boolean => {
  if (cpf.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10))) return false;

  return true;
};

export const validateCNPJ = (cnpj: string): boolean => {
  if (cnpj.length !== 14) return false;

  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  let sum = 0;
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * weights1[i];
  }
  let remainder = sum % 11;
  if (remainder < 2) remainder = 0;
  else remainder = 11 - remainder;
  if (remainder !== parseInt(cnpj.charAt(12))) return false;

  sum = 0;
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * weights2[i];
  }
  remainder = sum % 11;
  if (remainder < 2) remainder = 0;
  else remainder = 11 - remainder;
  if (remainder !== parseInt(cnpj.charAt(13))) return false;

  return true;
};

export const validateCPFCNPJ = (value: string): boolean => {
  const cleanValue = value.replace(/\D/g, "");

  if (cleanValue.length === 11) {
    return validateCPF(cleanValue);
  } else if (cleanValue.length === 14) {
    return validateCNPJ(cleanValue);
  }

  return false;
};

export const formatCPFCNPJ = (value: string): string => {
  const cleanValue = value.replace(/\D/g, "");

  if (cleanValue.length <= 11) {
    if (cleanValue.length >= 9) {
      return cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (cleanValue.length >= 6) {
      return cleanValue.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3");
    } else if (cleanValue.length >= 3) {
      return cleanValue.replace(/(\d{3})(\d{3})/, "$1.$2");
    }
    return cleanValue;
  } else {
    if (cleanValue.length >= 12) {
      return cleanValue.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    } else if (cleanValue.length >= 8) {
      return cleanValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4");
    } else if (cleanValue.length >= 5) {
      return cleanValue.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3");
    } else if (cleanValue.length >= 2) {
      return cleanValue.replace(/(\d{2})(\d{3})/, "$1.$2");
    }
    return cleanValue;
  }
};
