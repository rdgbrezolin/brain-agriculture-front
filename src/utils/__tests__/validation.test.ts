import {
  validateCPF,
  validateCNPJ,
  validateCPFCNPJ,
  formatCPFCNPJ,
} from "../validation";

describe("Validation Functions", () => {
  describe("validateCPF", () => {
    it("should validate a valid CPF", () => {
      expect(validateCPF("123.456.789-09")).toBe(true);
      expect(validateCPF("111.444.777-35")).toBe(true);
    });

    it("should reject invalid CPF", () => {
      expect(validateCPF("123.456.789-00")).toBe(false);
      expect(validateCPF("111.111.111-11")).toBe(false);
      expect(validateCPF("123")).toBe(false);
    });

    it("should handle CPF without formatting", () => {
      expect(validateCPF("12345678909")).toBe(true);
    });
  });

  describe("validateCNPJ", () => {
    it("should validate a valid CNPJ", () => {
      expect(validateCNPJ("11.222.333/0001-81")).toBe(true);
      expect(validateCNPJ("00.000.000/0001-91")).toBe(true);
    });

    it("should reject invalid CNPJ", () => {
      expect(validateCNPJ("11.222.333/0001-00")).toBe(false);
      expect(validateCNPJ("00.000.000/0000-00")).toBe(false);
      expect(validateCNPJ("123")).toBe(false);
    });

    it("should handle CNPJ without formatting", () => {
      expect(validateCNPJ("11222333000181")).toBe(true);
    });
  });

  describe("validateCPFCNPJ", () => {
    it("should validate valid CPF", () => {
      expect(validateCPFCNPJ("123.456.789-09")).toBe(true);
    });

    it("should validate valid CNPJ", () => {
      expect(validateCPFCNPJ("11.222.333/0001-81")).toBe(true);
    });

    it("should reject invalid documents", () => {
      expect(validateCPFCNPJ("123")).toBe(false);
      expect(validateCPFCNPJ("123456789012345")).toBe(false);
    });
  });

  describe("formatCPFCNPJ", () => {
    it("should format CPF correctly", () => {
      expect(formatCPFCNPJ("12345678909")).toBe("123.456.789-09");
      expect(formatCPFCNPJ("123456789")).toBe("123.456.789");
    });

    it("should format CNPJ correctly", () => {
      expect(formatCPFCNPJ("11222333000181")).toBe("11.222.333/0001-81");
      expect(formatCPFCNPJ("112223330001")).toBe("11.222.333/0001");
    });

    it("should handle already formatted input", () => {
      expect(formatCPFCNPJ("123.456.789-09")).toBe("123.456.789-09");
      expect(formatCPFCNPJ("11.222.333/0001-81")).toBe("11.222.333/0001-81");
    });
  });
});
