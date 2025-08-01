import type { Producer } from "../types";
import initialData from "../mocks/initialData.json";

const STORAGE_KEY = "brain_agriculture_producers";

export class StorageService {
  static loadProducers(): Producer[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      return initialData.producers;
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      return initialData.producers;
    }
  }

  static saveProducers(producers: Producer[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(producers));
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  }

  static addProducer(producer: Producer): void {
    const producers = this.loadProducers();
    producers.push(producer);
    this.saveProducers(producers);
  }

  static updateProducer(updatedProducer: Producer): void {
    const producers = this.loadProducers();
    const index = producers.findIndex((p) => p.id === updatedProducer.id);
    if (index !== -1) {
      producers[index] = updatedProducer;
      this.saveProducers(producers);
    }
  }

  static deleteProducer(producerId: string): void {
    const producers = this.loadProducers();
    const filteredProducers = producers.filter((p) => p.id !== producerId);
    this.saveProducers(filteredProducers);
  }

  static resetToInitialData(): void {
    this.saveProducers(initialData.producers);
  }

  static clearAllData(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  static hasStoredData(): boolean {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }
}
