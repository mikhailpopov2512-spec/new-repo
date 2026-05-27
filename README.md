# Happ VPN Client

Современный **VPN клиент** аналог Happ.

Стек: **Tauri 2** (Rust + React + TypeScript) + **Xray-core**

## Особенности
- Поддержка VLESS Reality, VMess, Trojan и др.
- System Proxy режим
- Импорт подписок
- Минималистичный и быстрый UI

## Сборка

```bash
npm install
npm run tauri build
```

Приложение будет собрано автоматически через GitHub Actions при пуше в main.