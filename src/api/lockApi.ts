export class LockAPI {
  static toggleScrollLock() {
    document.querySelector("body")?.classList.toggle("lock");
  }
}
