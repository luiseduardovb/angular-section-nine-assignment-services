export class CounterService {
  activeToInactiveCounter: number = 0;

  inactiveToActiveCounter: number = 0;

  incrementActivetoInactive() {
    this.activeToInactiveCounter++;
    console.log(
      '🚀 ~ file: counter.service.ts ~ line 3 ~ CounterService ~ activeToInactiveCounter',
      this.activeToInactiveCounter
    );
  }

  incrementInactivetoActive() {
    this.inactiveToActiveCounter++;
    console.log(
      '🚀 ~ file: counter.service.ts ~ line 5 ~ CounterService ~ inactiveToActiveCounter',
      this.inactiveToActiveCounter
    );
  }
}
